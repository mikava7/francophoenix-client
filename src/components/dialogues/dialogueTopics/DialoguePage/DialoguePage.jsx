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
const DialoguePage = () => {
  const dispatch = useDispatch();
  const { dialogueTopicId } = useParams();
  const { i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka"; // Change 'geo' to the appropriate language code for Georgian
  const [showAllTranslations, setShowAllTranslations] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [rotationChevron, setRotationChevron] = useState({});
  const [activeSoundIndex, setActiveSoundIndex] = useState(-1); // Keep track of the active SoundContainer index
  const handleSoundToggle = (index) => {
    setActiveSoundIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
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
    vocabulary,
    phrases,
  } = selectedTopic || {};
  const secondLanguage = isGeorgian ? chapterNameGeo : chapterNameEng;

  return (
    <div>
      <div>
        <div key={_id}>
          <p>chapter{chapter}</p>

          <h2>
            {chapterNameFr}:{secondLanguage}
            <button
              onClick={() => setShowAllTranslations(!showAllTranslations)}
            >
              {showAllTranslations
                ? "Hide All Translations"
                : "Show All Translations"}
            </button>
          </h2>
          <div>
            {dialogues &&
              dialogues.map((dialogueSet, dialogueIndex) => {
                const { dialogueName, dialogueImg, dialogue } = dialogueSet;

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
                      const isSoundActive = activeSoundIndex === lineIndex;

                      return (
                        <DialogueLine key={lineIndex}>
                          <SpeakerSpan>{speaker}:</SpeakerSpan>
                          <MessageLine>
                            <MessageParagraph>{messageFr}</MessageParagraph>
                            <SoundContainer
                              onClick={() => handleSoundToggle(lineIndex)}
                              isActive={isSoundActive}
                            >
                              <Listen />
                            </SoundContainer>
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
                      <VocabularyPage vocabulary={vocabulary} />
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
  background: #fdffa3;
  padding: 1rem;
  border-radius: 12px;
  border-bottom: 3px solid orange;
  border-right: 2px solid orange;

  margin-bottom: 1rem;
`;
const MessageLine = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  background: #ffffec;

  min-height: 3.5rem;
  border-radius: 12px;
  width: 100%;
  border-bottom: 3px solid #f3c23c;
  border-right: 2px solid #f3c23c;
  position: relative;
`;
const SpeakerSpan = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
  width: 20%;
  font-size: 1.1rem;
  color: #414e8d;
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
const SoundContainer = styled(ChevronContainer)`
  cursor: pointer;
  img {
    width: 2rem;
    position: absolute;
    top: 15%;
    right: 12%;
  }
`;
