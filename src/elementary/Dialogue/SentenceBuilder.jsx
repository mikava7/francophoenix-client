import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSentenceBuilder,
  fetchAudioFiles,
} from "../../redux/slices/elementary/sentenceBuilderSlice";
import { playAudio, decodeUrl } from "../helpers/helpers";
import Listen from "../../components/Listen";
import axios from "axios";
import config from "../config";

import {
  BuildBox,
  BuildBoxContainer,
  TopBox,
  TopWord,
  BottomWord,
  BottomBox,
  PlayButton,
} from "../style-elementaryComponant";

const SentenceBuilder = ({ Continue, lessonsCurrentIndex }) => {
  const dispatch = useDispatch();
  const sentenceBuilders =
    useSelector((state) => state.sentenceBuilder.sentenceBuilder) || [];
  const sentenceBuilderAudio =
    useSelector((state) => state.sentenceBuilder.audioFiles) || [];

  const [newPair, setNewPair] = useState(0);
  const [audioPlayer, setAudioPlayer] = useState(null); // State to hold the audio player reference

  const { sentence, words } = sentenceBuilders[newPair] || {};

  useEffect(() => {
    dispatch(fetchSentenceBuilder(lessonsCurrentIndex));
    dispatch(fetchAudioFiles());
  }, [dispatch, lessonsCurrentIndex]);

  useEffect(() => {
    if (sentenceBuilderAudio.length > 0) {
      handlePlayAudio(sentenceBuilderAudio[newPair]); // Play the audio for the current pair
    }
  }, [sentenceBuilderAudio, newPair]);

  const handlePlayAudio = (audioUrl) => {
    if (audioPlayer) {
      audioPlayer.pause(); // Pause the currently playing audio, if any
    }
    const decodedUrl = decodeUrl(audioUrl);
    const fullUrl = `${config.baseUrl}/${decodedUrl}`;
    const newAudioPlayer = new Audio(fullUrl);
    setAudioPlayer(newAudioPlayer);
    newAudioPlayer.play();
  };
  const [selectedWords, setSelectedWords] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleWordSelect = (index) => {
    setSelectedWords((prevSelectedWords) => {
      if (prevSelectedWords.includes(index)) {
        return prevSelectedWords.filter((wordIndex) => wordIndex !== index);
      } else {
        return [...prevSelectedWords, index];
      }
    });
  };

  const handleWordRemove = (index) => {
    setSelectedWords((prevSelectedWords) => {
      return prevSelectedWords.filter((wordIndex) => wordIndex !== index);
    });
  };

  const handleCheckAnswer = () => {
    const selectedSentence = selectedWords
      .map((index) => words[index])
      .join(" ")
      .trim(); // Trim whitespace from the selected sentence

    const isEqual = selectedSentence === sentence;

    setIsCorrect(isEqual);
    setShowAnswers(true);
  };

  const handleRetry = () => {
    setSelectedWords([]);
    setShowAnswers(false);
  };

  const handleNext = () => {
    setSelectedWords([]);
    setShowAnswers(false);
    setNewPair((prevPair) => prevPair + 1);
  };

  const nextComponent = newPair === sentenceBuilders.length - 1;

  return (
    <BuildBoxContainer>
      <h2>Build the Sentence</h2>

      <PlayButton
        onClick={() => handlePlayAudio(sentenceBuilderAudio[newPair])}
      >
        <Listen /> <span>play</span>
      </PlayButton>

      <BuildBox>
        <TopBox>
          {selectedWords.map((wordIndex, index) => (
            <TopWord key={index} onClick={() => handleWordRemove(wordIndex)}>
              {words[wordIndex]}
            </TopWord>
          ))}
        </TopBox>
        <BottomBox>
          {words &&
            words.map((word, index) => (
              <BottomWord
                isSelected={selectedWords.includes(index)}
                key={index}
                onClick={() => handleWordSelect(index)}
              >
                {word}
              </BottomWord>
            ))}
        </BottomBox>
        <div>
          {showAnswers ? (
            isCorrect ? (
              nextComponent ? (
                Continue
              ) : (
                <div onClick={handleNext}>
                  <Button>Next</Button>
                </div>
              )
            ) : (
              <div onClick={handleRetry}>
                <Button>Retry</Button>
              </div>
            )
          ) : (
            <div onClick={handleCheckAnswer}>
              <Button>Submit</Button>
            </div>
          )}
        </div>
      </BuildBox>
    </BuildBoxContainer>
  );
};

export const Button = styled.div`
  background-color: #70ff41;
  color: black;
  width: 20rem;
  font-weight: bold;
  margin: 0 auto;
  padding: 1rem 2rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 2rem;
  letter-spacing: 2px;
`;

export default SentenceBuilder;
