import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDialogueTopics } from "../../../../redux/slices/dialogueTopics/dialogueTopicSlide";
import Loading from "../../../loading/Loading";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ChevronDown from "../../../../assets/icons/chevron-down-24.png";
import Listen from "../../../Listen";
import VocabularyPage from "../VocabularyPage/VocabularyPage";
import DialoguePhrase from "../DialoguePhrase/DialoguePhrase";
import useListenWord from "../../../../hooks/useListenWord";
import ToggleTranslation from "../ToggleTranslation";
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
    <DialoguePageContainer key={_id}>
      <Header>
        <h1>{chapterNameFr}</h1>

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
            return (
              <DialogueContainer key={dialogueIndex}>
                <DialogueTitle>{dialogueName}</DialogueTitle>
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
                      <Speaker>{speaker}:</Speaker>
                      <MessageLine>
                        <MessageParagraph>{messageFr}</MessageParagraph>
                        <IconcsWrapper>
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
                        </IconcsWrapper>
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
    </DialoguePageContainer>
  );
};

export default DialoguePage;
const DialoguePageContainer = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`;
const DialogueContainer = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  margin: 0 auto;
  max-width: 920px;
`;

const DialogueTitle = styled.h1`
  &::before {
    content: "⚜️  ";
  }
`;

const DialogueLine = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem;
  border-radius: 0 0 0 1rem;
  border-bottom: 5px solid ${(props) => props.theme.primaryText};
  border-right: 5px solid ${(props) => props.theme.primaryText};
  background: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.primaryText};
  margin-bottom: 1rem;

  @media (max-width: 576px) {
    flex-direction: column;
    p {
      font-size: 1rem;
      margin: 1rem 0.5rem;
    }
  }
`;
const MessageLine = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  height: 6rem;
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow-y: scroll;
`;
const Speaker = styled.p`
  font-weight: bold;
  width: 50%;

  background: ${(props) => props.theme.primaryBackground};
  color: ${(props) => props.theme.primaryText};
  padding: 1rem 0;
  text-align: center;
`;
const MessageParagraph = styled.span`
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  width: 80%;
  font-weight: bold;

  &:before {
    content: "🔹";
  }
`;
const SecondMessageParagraph = styled.span`
  background: ${(props) => props.theme.tertiaryBackground};
  color: ${(props) => props.theme.secondaryText};

  margin-left: 1.2rem;
  padding: 0.4rem;

  &:before {
    content: "🔸";
  }
`;
const ChevronContainer = styled.div`
  /* margin-left: auto; */
  img {
    /* position: absolute;
    top: 15%;
    right: 3%; */
  }
`;
const ChevronImage = styled.img`
  width: 24px;
  height: 24px;
  transition: transform 0.5s ease;
  margin-left: 0.4rem;
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
  cursor: pointer;
`;
const ListenIconContainer = styled.span`
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
const IconcsWrapper = styled.div`
  border-bottom: 2px solid grey;
  border-left: 2px solid grey;
  border-radius: 0 0 0 12px;
  padding: 0 0 0.2rem 0.4rem;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0%;
  right: 2%;
`;
