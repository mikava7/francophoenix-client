import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const DialogueTopics = ({ dialogueTopics }) => {
  const { i18n } = useTranslation();
  const isGeorgian = i18n.language === "geo"; // Change "geo" to the appropriate language code for Georgian

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
              <ChapterIndex>Chapter: {chapter}</ChapterIndex>
              <ChapterTitle>{chapterNameFr}</ChapterTitle>
            </ChapterInfoContainer>

            <ChapterDialogueContainer>
              <p>Dialogues in the chapters</p>

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
                New Words: <b>15</b>
              </p>
              <p>
                New Phrase: <b>10</b>
              </p>
              <p>
                exercise: <b> 5</b>
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
  margin: 2rem 4rem;
  border-radius: 3rem;
  border: 6px solid #1222ff;
`;

const DialogueTopicCard = styled.div`
  background: #ddc0ff;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  color: white;
  font-size: 1.6rem;
  border: 3px solid white;
  padding: 0.4rem 1rem;
  background: #1222ff;
  border-radius: 12px;
  text-align: center;
  margin: 0 auto;
`;

const ChapterDialogueContainer = styled.div`
  padding: 1rem;
  width: 80%;
  margin: 1rem;
  border: 3px dashed #1222ff;
  p {
    font-size: 1.2rem;
    color: #1e072e;
  }
  h4 {
    font-size: 1.4rem;

    color: #1222ff;
  }
`;
const ChapterWordsAndPhrases = styled(ChapterDialogueContainer)`
  display: flex;

  justify-content: space-evenly;
  p {
    color: #0400ff;
    b {
      background: green;
      color: white;
      border: 3px solid white;
      padding: 0.3rem;
      border-radius: 50%;
    }
  }
`;
export default DialogueTopics;
