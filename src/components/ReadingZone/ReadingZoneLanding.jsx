import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  StyledLink,
  Button,
  LandingCardContainer,
  CardContainer,
  TopicCard,
} from "../../Styles/globalStyles";
import { useTranslation } from "react-i18next";
import { readingZoneSectionData } from "../../data/components/readingZoneSectionData";

const ReadingZoneLanding = () => {
  const { t, i18n } = useTranslation(); // Initialize the translation function
  const lang = i18n.language; // Get the current language

  // Get the reading zone topics array for the current language
  const topicsForLang = readingZoneSectionData[lang] || [];

  return (
    <LandingCardContainer>
      <h1>{t("Welcome to the Reading Zone")}</h1>
      <p>
        {t(
          "Discover various reading materials to enhance your language skills"
        )}
      </p>
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

export default ReadingZoneLanding;

const CardButton = styled(Button)`
  margin-bottom: auto;
  width: 10rem;
`;

const CardLink = styled(StyledLink)`
  margin-top: auto;
  margin-left: auto;
  margin-bottom: 1rem;
`;
