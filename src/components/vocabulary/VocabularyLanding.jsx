import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  StyledLink,
  Button,
  LandingCardContainer,
  CardContainer,
  TopicCard,
  CardDescription,
} from "../../Styles/globalStyles";
import { useTranslation } from "react-i18next";
import { vocabularySectionData } from "../sidebar/components/vocabularySectionData";

const VocabularyLanding = () => {
  const { t, i18n } = useTranslation(); // Initialize the translation function
  const lang = i18n.language; // Get the current language

  // Get the vocabulary topics array for the current language
  const topicsForLang = vocabularySectionData[lang] || [];

  return (
    <LandingCardContainer>
      <h1>{t("Bienvenue dans la section Vocabulaire")}</h1>
      <CardDescription>
        {t(
          "Explorez différents sujets de vocabulaire pour améliorer vos compétences linguistiques"
        )}
      </CardDescription>
      <CardContainer>
        {topicsForLang.map((topic, index) => (
          <TopicCard>
            <div>
              <h3 aria-label="Topic Title">{t(topic.title)}</h3>
              <h4 aria-label="Topic Question">{t(topic.question)}</h4>
              <p aria-label="Topic Description">{t(topic.description)}</p>
            </div>
            <CardLink to={topic.link} key={index}>
              <CardButton>{t("Explore")}</CardButton>
            </CardLink>
          </TopicCard>
        ))}
      </CardContainer>
    </LandingCardContainer>
  );
};

export default VocabularyLanding;

const CardButton = styled(Button)`
  margin-bottom: auto;
  width: 10rem;
  @media (max-width: 576px) {
    width: 6rem;
    font-size: 1.2rem;
  }
`;

const CardLink = styled(StyledLink)`
  margin-top: auto;
  margin-left: auto;
  margin-bottom: 1rem;
`;
