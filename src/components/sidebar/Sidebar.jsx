import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import {
  StyledLink,
  StyledUl,
  StyledListItem,
} from "../../Styles/globalStyles";
import FindTranslationForFrenchWord from "../../pages/SearchComponent/frenchWords/FindTranslationForFrenchWord";
import { grammarTopicsDescriptions } from "../../data/components/grammarTopicsDescriptions";
import { vocabularySectionData } from "../../data/components/vocabularySectionData";
import { readingZoneSectionData } from "../../data/components/readingZoneData";
const Sidebar = () => {
  const { t, i18n } = useTranslation(); // Initialize the translation function
  const lang = i18n.language; // Get the current language

  // Get the grammar topics array for the current language
  const topicsForLangGram = grammarTopicsDescriptions[lang] || [];
  const topicsForLangVocab = vocabularySectionData[lang] || [];
  const topicsForLangRead = readingZoneSectionData[lang] || [];

  return (
    <SidebarContainer>
      <Section>
        <StyledLink to="/dictionary">
          <h2>Dictionary</h2>
          <FindTranslationForFrenchWord />
        </StyledLink>
      </Section>
      <Section>
        <StyledLink to="/grammar">
          <SidbarTitle>{t("Grammar")}</SidbarTitle>
        </StyledLink>
        <StyledUl>
          {topicsForLangGram.map((topic, index) => (
            <SideBarLink to={`${topic.link}`} key={index}>
              {t(topic.title)}
            </SideBarLink>
          ))}
        </StyledUl>
      </Section>
      <Section>
        <SidbarTitle>{t("Vocabulaire")}</SidbarTitle>
        <StyledUl>
          {topicsForLangVocab.map((topic, index) => (
            <SideBarLink to={`${topic.link}`} key={index}>
              {t(topic.title)}
            </SideBarLink>
          ))}
        </StyledUl>
      </Section>
      <Section>
        <SidbarTitle>{t("Lecture")}</SidbarTitle>
        <StyledUl>
          {topicsForLangRead.map((topic, index) => (
            <SideBarLink to={`${topic.link}`} key={index}>
              {t(topic.title)}
            </SideBarLink>
          ))}
        </StyledUl>
      </Section>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: ${(props) => props.theme.primaryBackground};
  max-width: 250px;
  padding: 0.2rem 0.4rem;
  margin-right: 0.2rem;
`;

const Section = styled.div`
  margin-bottom: 20px;
  border-bottom: 2px solid ${(props) => props.theme.primaryText};
  padding-bottom: 1rem;
`;
const SidbarTitle = styled.h1`
  text-align: left;
`;
const SideBarLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.primaryText};
  margin: 0.2rem;
  padding: 0.2rem;
  &:before {
    content: ${(props) =>
      props.theme.background === "#000000" ? '"🔸"' : '"🔹"'};
  }
`;
