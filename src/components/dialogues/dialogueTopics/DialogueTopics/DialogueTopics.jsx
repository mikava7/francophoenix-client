import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const DialogueTopics = ({ dialogueTopics }) => {
  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";

  return (
    <DialogueTopicContainer>
      {dialogueTopics.map((topic) => {
        const {
          _id,
          chapter,
          chapterName: { chapterNameEng, chapterNameFr, chapterNameGeo },
          dialogues,
        } = topic;
        const secondLanguage = isGeorgian ? chapterNameGeo : chapterNameEng;

        return (
          <DialogueTopicCard key={_id}>
            <ChapterInfoContainer>
              <ChapterIndex>{chapter}</ChapterIndex>
              <ChapterTitle>{chapterNameFr}</ChapterTitle>
            </ChapterInfoContainer>

            <ChapterDialogueContainer>
              {dialogues.map((dialogue) => {
                const { dialogueName, dialogueImg } = dialogue;

                return (
                  <div key={dialogueName}>
                    <h4>{dialogueName}</h4>
                  </div>
                );
              })}
            </ChapterDialogueContainer>
            <ChapterWordsAndPhrases>
              <p>
                {t("Des mots")}
                <b>15</b>
              </p>
              <p>
                {t("Expressions")}
                <b>10</b>
              </p>
              <p>
                {t("Des exercices")} <b> 5</b>
              </p>
            </ChapterWordsAndPhrases>
          </DialogueTopicCard>
        );
      })}
    </DialogueTopicContainer>
  );
};
const DialogueTopicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  border-radius: 3rem;
  border: 6px solid ${(props) => props.theme.primaryText};
`;

const DialogueTopicCard = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.primaryText};
`;

const ChapterInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChapterIndex = styled.span`
  color: #1e072e;
  font-size: 1.4rem;
`;

const ChapterTitle = styled.span`
  font-size: 1.6rem;
  border-bottom: 3px solid white;
  padding: 0.4rem 1rem;
  border-radius: 12px;
  text-align: center;
  margin: 0 auto;
`;

const ChapterDialogueContainer = styled.div`
  padding: 0.2rem 1rem;
  width: 80%;
  margin: 1rem;
  border: 3px dashed ${(props) => props.theme.primaryText};
  div {
    border-radius: 0 0 0 8px;
    border-bottom: 2px solid ${(props) => props.theme.primaryText};
    &:last-child {
      margin-bottom: 1rem;
    }
  }
  p {
    font-size: 1.2rem;
    color: ${(props) => props.theme.primaryText};
  }
  h4 {
    font-size: 1.4rem;

    color: ${(props) => props.theme.primaryText};
    font-weight: bold;
  }
`;
const ChapterWordsAndPhrases = styled(ChapterDialogueContainer)`
  display: flex;

  justify-content: space-evenly;
  p {
    display: flex;
    align-items: center;
    border-radius: 0 0 1rem;

    b {
      background: ${(props) => props.theme.primaryText};
      color: ${(props) => props.theme.background};

      border: 3px solid white;
      padding: 0.3rem;
      border-radius: 50%;
      margin-left: auto;
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    flex-direction: column;
    margin: 1rem 0.5rem;
    padding: 0.5rem;
    p {
      font-size: 1rem;
      margin: 1rem 0.5rem;

      b {
        background: green;
        color: white;
        border: 3px solid white;
        padding: 0.3rem;
        border-radius: 50%;
      }
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;
    p {
      font-size: 1rem;
      margin: 1rem 0.5rem;
    }
  }
`;
export default DialogueTopics;
