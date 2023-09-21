import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  SidebarContainer,
  Section,
  SidbarTitle,
  SideBarLink,
  DropdownArrow,
  SidebarStyledUl,
  TopicLink,
  SubTopic,
  SubTopicLink,
} from "../Sidebar";
import { darkTheme, lightTheme } from "../../../Styles/theme";

import ArrowRight from "../../../../public/icons/arrow-to-right.png";
import ArrowRightLight from "../../../../public/icons/arrow-to-right-light.png";

import { useTheme } from "styled-components";

const SideGrammarSection = ({ allAspectsData }) => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const arrowImage = theme === darkTheme ? ArrowRightLight : ArrowRight;

  const [isOpen, setIsOpen] = useState({});

  const getTitleByLanguage = (titleObject) => {
    switch (i18n.language) {
      case "fr":
        return titleObject.titleFr;
      case "ka":
        return titleObject.titleGeo;
      case "en":
        return titleObject.titleEng;
      default:
        return titleObject.titleFr; // Default to French
    }
  };

  const toggleSubSection = (aspect) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [aspect]: !prevState[aspect],
    }));
  };

  return (
    <SidebarContainer>
      <SidbarTitle>
        <SideBarLink to="/grammar">{t("Grammaire")}</SideBarLink>
      </SidbarTitle>
      {allAspectsData &&
        allAspectsData.map((aspectData, index) => {
          const { _id, titles, subtopics } = aspectData;
          const isOpenAspect = isOpen[_id];

          return (
            <Section key={_id}>
              <TopicLink onClick={() => toggleSubSection(_id)}>
                <SideBarLink to={`/grammar/${_id}`}>
                  <span>{t(_id)}</span>
                </SideBarLink>

                <DropdownArrow>{isOpenAspect ? "▲" : "▼"}</DropdownArrow>
              </TopicLink>
              <SidebarStyledUl show={isOpenAspect}>
                {titles?.map((title, subIndex) => (
                  <SubTopic key={subIndex}>
                    <img src={ArrowRight} alt="ArrowRight" />
                    <SubTopicLink to={`/grammar-basic/${subtopics[subIndex]}`}>
                      {getTitleByLanguage(title)}
                    </SubTopicLink>
                  </SubTopic>
                ))}
              </SidebarStyledUl>
            </Section>
          );
        })}
    </SidebarContainer>
  );
};

export default SideGrammarSection;
