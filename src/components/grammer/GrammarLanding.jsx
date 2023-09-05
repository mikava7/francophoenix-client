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
import { grammarTopicsDescriptions } from "../sidebar/components/grammarTopicsDescriptions";

const GrammarLanding = () => {
  const { t, i18n } = useTranslation(); // Initialize the translation function
  const lang = i18n.language; // Get the current language

  // Get the grammar topics array for the current language
  const topicsForLang = grammarTopicsDescriptions[lang] || [];

  return (
    <LandingCardContainer>
      <h1>{t("Bienvenue dans la section Grammaire")}</h1>
      <CardDescription>
        {t(
          "Découvrez différents sujets de grammaire pour améliorer vos compétences linguistiques"
        )}
      </CardDescription>
      <CardContainer>
        {topicsForLang.map((topic, index) => (
          <TopicCard index={index}>
            <div>
              <h3 aria-label="Topic Title">{t(topic.title)}</h3>
              <h4 aria-label="Topic Question">{t(topic.question)}</h4>
              <p aria-label="Topic Description">{t(topic.description)}</p>
            </div>
            <CardLink to={topic.link} key={index}>
              <CardButton>{t("Explorer")}</CardButton>
            </CardLink>
          </TopicCard>
        ))}
      </CardContainer>
    </LandingCardContainer>
  );
};

export default GrammarLanding;
const CardButton = styled(Button)`
  margin-bottom: auto;
  width: 10rem;
`;
const CardLink = styled(StyledLink)`
  margin-top: auto;
  margin-left: auto;
  margin-bottom: 1rem;
`;
