import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const VocabularyTopics = ({ vocabularyTopics }) => {
  const { t, i18n } = useTranslation(); // Get the current language and translation function (t)
  const isEnglish = i18n.language === "en";
  return (
    <div>
      {vocabularyTopics.map((topic) => {
        const { _id, nameFr, nameGeo, nameEng, imageUrl, iconUrl, french } =
          topic;
        const secondLanguage = isEnglish ? nameEng : nameGeo;
        const wordCount = french.length;
        return (
          <VocabylaryTopicsConatiner key={_id} imageUrl={imageUrl}>
            <ImgContainer>
              <img src={iconUrl} alt={nameFr} />
            </ImgContainer>
            <Titles>
              <h1>{nameFr}</h1>
              <p>{secondLanguage}</p>
            </Titles>

            <WordCount>
              <p>{t("Les mots")}</p>
              <b>{wordCount}</b>
            </WordCount>
          </VocabylaryTopicsConatiner>
        );
      })}
    </div>
  );
};

const VocabylaryTopicsConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
  border-radius: 1rem;
  border: 4px solid violet;
  margin: 2rem 3rem;
  position: relative;
  background-image: url(${(props) => props.imageUrl});
  /* background-size: auto; */
  background-repeat: repeat;
  background-position: center;
  background-size: 100%; /* Set the initial background-size */
  transition: background-size 1s ease;
  z-index: 1;
  font-family: "Arial", "Helvetica", sans-serif, "Times New Roman", "Times",
    serif, "Courier New", "Courier", monospace;

  /* Add the blur and color overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ab65fcc8;
    filter: blur(8px);
    z-index: -1;
  }

  &:hover {
    background-size: 105%; /* Increase background-size on hover to make it approach */
  }
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  /* margin: 0 auto; */
  padding: 1rem;
  h1 {
    /* font-size: 3rem; */
  }
  p {
    font-size: 1.2rem;
  }
`;
const WordCount = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-right: 1rem;
    &::after {
      content: ":";
    }
  }

  b {
    font-size: 2rem;
  }
`;
const ImgContainer = styled.div`
  width: 80px;
  height: 80px;
  background: #e4aaff;
  border-radius: 50%;
  /* margin-left: 2rem; */
  img {
    width: 100%;
    height: 100%;
  }
`;
export default VocabularyTopics;
