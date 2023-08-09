import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDialogueTopics } from "../../../../redux/slices/dialogueTopics/dialogueTopicSlide";
import Loading from "../../../loading/Loading";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ChevronDown from "../../../../../public/icons/chevron-down-24.png";
import Listen from "../../../Listen";
import VocabularyPage from "../VocabularyPage/VocabularyPage";
import DialoguePhrase from "../DialoguePhrase/DialoguePhrase";
import useListenWord from "../../../../hooks/useListenWord";
import ToggleTranslation from "../ToggleTranslation";
import ListenImg from "../../../../../public/icons/sound-50.png";
const DialoguePage = () => {
  const dispatch = useDispatch();
  const { dialogueTopicId } = useParams();
  const { i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka"; // Change 'geo' to the appropriate language code for Georgian
  const [showAllTranslations, setShowAllTranslations] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const [rotationChevron, setRotationChevron] = useState({});

  const { handleListen, isActiveStates } = useListenWord();

  const handleChevronToggle = (lineIndex) => {
    setRotationChevron((prevRotations) => ({
      ...prevRotations,
      [lineIndex]: prevRotations[lineIndex] === 0 ? 180 : 0,
    }));

    setActiveIndex((prevIndex) => (prevIndex === lineIndex ? -1 : lineIndex));
  };

  const dialogueTopics =
    useSelector((state) => state.dialogueTopics.dialogueTopics) || [];
  const isLoading = useSelector((state) => state.dialogueTopics.isLoading);

  const selectedTopic = dialogueTopics.find(
    (topic) => topic._id === dialogueTopicId
  );
  useEffect(() => {
    dispatch(fetchDialogueTopics());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!selectedTopic) {
    return <div>No data available for the selected topic.</div>;
  }

  const {
    _id,
    chapter,
    chapterName: { chapterNameEng, chapterNameFr, chapterNameGeo },
    dialogues,
  } = selectedTopic || {};
  const secondLanguage = isGeorgian ? chapterNameGeo : chapterNameEng;

  return (
    <div>
      <div>
        <div key={_id}>
          <Header>
            <h2>{chapterNameFr}:</h2>
            <h3>{secondLanguage}</h3>

            <ToggleTranslation
              isActive={showAllTranslations}
              onClick={() => setShowAllTranslations(!showAllTranslations)}
            />
          </Header>
          <div>
            {dialogues &&
              dialogues.map((dialogueSet, dialogueIndex) => {
                const { dialogueName, dialogueImg, dialogue, words, phrases } =
                  dialogueSet;
                console.log(phrases);
                return (
                  <DialogueContainer key={dialogueIndex}>
                    <h1>{dialogueName}</h1>
                    {dialogue.map((dialogue, lineIndex) => {
                      const { speaker, messageFr, messageEng, messageGeo } =
                        dialogue;
                      const secondLanguageMessage = isGeorgian
                        ? messageGeo
                        : messageEng;

                      const isTranslationVisible =
                        showAllTranslations || activeIndex === lineIndex;

                      return (
                        <DialogueLine key={lineIndex}>
                          <SpeakerSpan>{speaker}:</SpeakerSpan>
                          <MessageLine>
                            <MessageParagraph>{messageFr}</MessageParagraph>
                            <ListenIconContainer
                              onClick={handleListen(messageFr)}
                            >
                              <Listen />
                            </ListenIconContainer>
                            <ChevronContainer
                              onClick={() => {
                                handleChevronToggle(lineIndex);
                              }}
                            >
                              <ChevronImage
                                src={ChevronDown}
                                alt="ChevronDown"
                                rotation={rotationChevron[lineIndex] || 0}
                              />
                            </ChevronContainer>
                            {isTranslationVisible && (
                              <SecondMessageParagraph>
                                {secondLanguageMessage}
                              </SecondMessageParagraph>
                            )}
                          </MessageLine>
                        </DialogueLine>
                      );
                    })}
                    <div>
                      <VocabularyPage words={words} />
                    </div>
                    <DialoguePhrase phrases={phrases} />
                  </DialogueContainer>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialoguePage;

const DialogueContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  margin: 0 auto;
  max-width: 920px;
`;
const DialogueLine = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0 0 0 12px;
  border-bottom: 3px solid orange;
  border-right: 2px solid orange;
`;
const MessageLine = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  background: #ffffec;
  font-size: 1.3rem;
  min-height: 3.5rem;
  border-radius: 12px;
  width: 100%;

  position: relative;
`;
const SpeakerSpan = styled.span`
  font-weight: bold;
  font-size: 1.4rem;
  margin-right: 0.5rem;
  width: 20%;
  background: #8080808f;
  padding: 2rem;
  color: #4b1d02;
`;
const MessageParagraph = styled.p`
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 80%;
  font-weight: bold;
`;
const SecondMessageParagraph = styled.p`
  color: grey;
  margin-left: 1rem;
`;
const ChevronContainer = styled.div`
  margin-left: auto;

  img {
    position: absolute;
    top: 15%;
    right: 3%;
  }
`;
const ChevronImage = styled.img`
  width: 24px;
  height: 24px;
  transition: transform 0.5s ease;
  margin-left: 1rem;
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
  cursor: pointer;
`;
const ListenIconContainer = styled.span`
  display: flex;
  align-items: center;
  margin-right: 0.3rem;
  font-weight: bold;
  width: 2rem;
  position: absolute;
  top: 15%;
  right: 12%;
  cursor: pointer;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  button {
    margin: 0 auto;
  }
`;
