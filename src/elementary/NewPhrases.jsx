import { useState, useEffect } from "react";
import { elementaryData } from "./elementary";
import Bonjour from "../audio/drive-download-20230711T213315Z-001/bonjourCl.mp3";
import AuRevoir from "../audio/drive-download-20230711T213315Z-001/bonjour jaime claire.mp3";
import TuTAppellesComment from "../audio/drive-download-20230711T213315Z-001/tu t appel commen Claire.mp3";
import JeMAppelleClaire from "../audio/drive-download-20230711T213315Z-001/je mappelle Claire claire.mp3";
import Enchante from "../audio/drive-download-20230711T213315Z-001/encante Claire.mp3";
import {
  ContinueButtonWrapper,
  PhrasesContainer,
  PhraseTranslation,
  PhrasesBox,
  OriginalPhrase,
  Phrasessection,
} from "./style-elementaryComponant";
import Listen from "../components/Listen";
import Favorite from "../components/Favorite";
import { useDispatch, useSelector } from "react-redux";

import { fetchNewPhrases } from "../redux/slices/elementary/newPhraseSlice";

const NewPhrases = ({ Continue, lessonsCurrentIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();
  const newPhrase = useSelector((state) => state.newPhrases.newPhrases) || [];
  const isLoading = useSelector((state) => state.newPhrases.isLoading);

  const handleNextPhrase = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    dispatch(fetchNewPhrases(0));
  }, [dispatch]);

  const sounds = [
    Bonjour,
    AuRevoir,
    TuTAppellesComment,
    JeMAppelleClaire,
    Enchante,
  ];

  function playSound(index) {
    const audio = new Audio(sounds[index]);
    audio.play();
    console.log("audio", audio);
  }

  if (isLoading === true) {
    return <p>Loading</p>;
  }

  if (isLoading === false) {
    return (
      <Phrasessection onClick={handleNextPhrase}>
        <PhrasesContainer>
          {newPhrase &&
            newPhrase.originalPhrases &&
            newPhrase.translatedPhrases &&
            newPhrase.originalPhrases
              .slice(0, currentIndex + 1)
              .map((originalPhrase, index) => (
                <PhrasesBox key={`phrase-${index}`}>
                  <OriginalPhrase onClick={() => playSound(index)}>
                    <Listen /> <div>{originalPhrase}</div>
                    <Favorite />
                  </OriginalPhrase>
                  <PhraseTranslation>
                    {newPhrase.translatedPhrases[index]}
                  </PhraseTranslation>
                </PhrasesBox>
              ))}
        </PhrasesContainer>
        <ContinueButtonWrapper>{Continue}</ContinueButtonWrapper>
      </Phrasessection>
    );
  }

  // return null;
};

export default NewPhrases;
