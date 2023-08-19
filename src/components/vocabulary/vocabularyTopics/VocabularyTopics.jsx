import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const VocabularyTopics = ({ vocabularyTopics }) => {
  // Get the current language and translation function (t)
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  return (
    <VocabylaryTopicsConatiner>
      {vocabularyTopics.map((topic) => {
        const { _id, nameFr, nameGeo, nameEng, imageUrl, iconUrl, french } =
          topic;
        const secondLanguage = isEnglish ? nameEng : nameGeo;
        const wordCount = french.length;
        return (
          <VocabylaryTopicCard key={_id} imageUrl={imageUrl}>
            <ImgContainer>
              <img src={imageUrl} alt={nameFr} />
            </ImgContainer>
            <Titles>
              <h1>{nameFr}</h1>
              <p>{secondLanguage}</p>
            </Titles>

            <WordCount>
              <p>{t("Les mots")}</p>
              <b>{wordCount}</b>
            </WordCount>
          </VocabylaryTopicCard>
        );
      })}
    </VocabylaryTopicsConatiner>
  );
};
const VocabylaryTopicsConatiner = styled.div`
  display: flex;
  flex-wrap: wrap; /* Add this line to make the cards wrap */
  width: 100%;
  height: 100vh;
  background: green;
`;
const VocabylaryTopicCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 2rem;
  border-radius: 1rem;

  width: 400px;
  height: 550px;
  border: 4px solid violet;
  margin: 2rem 3rem;
  position: relative;

  @media (min-width: 992px) and (max-width: 1199px) {
    margin: 1rem 2rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 14rem;
    font-size: 1.4rem;
    padding: 0.6rem 1.2rem;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    flex-direction: column;
    margin: 1.4rem 0.8rem;
    padding: 0.4rem;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    margin: 0 0.4rem;
    /* padding: 0.3rem; */
  }
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;

  p {
    font-size: 1.2rem;
  }
`;
const WordCount = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
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
  background-image: url(${(props) => props.imageUrl});
  background-repeat: repeat;
  background-position: center;
  background-size: 100%;
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
    /* background-color: #ab65fcc8; */
    filter: blur(8px);
    z-index: -1;
  }

  &:hover {
    background-size: 70%; /* Increase background-size on hover to make it approach */
    transition: background-size 1s ease;
  }
  img {
    width: 100%;
  }
`;
export default VocabularyTopics;
