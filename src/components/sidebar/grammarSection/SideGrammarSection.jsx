import React from "react";
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

const SideGrammarSection = ({
  uniqueValues,
  subTopicsByAspect,
  toggleSubSection,
  isSubSectionOpen,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const arrowImage = theme === darkTheme ? ArrowRightLight : ArrowRight;
  return (
    <SidebarContainer>
      <SidbarTitle>
        <SideBarLink to="/grammar">{t("Grammar")}</SideBarLink>
      </SidbarTitle>
      {uniqueValues &&
        uniqueValues?.map((aspect, index) => {
          return (
            <Section key={index}>
              <TopicLink onClick={() => toggleSubSection(aspect)}>
                <SideBarLink to={`/grammar/${aspect}`}>
                  <span>{aspect.toUpperCase()}</span>
                </SideBarLink>

                <DropdownArrow>
                  {isSubSectionOpen(aspect) ? "▲" : "▼"}
                </DropdownArrow>
              </TopicLink>
              <SidebarStyledUl show={isSubSectionOpen(aspect)}>
                {subTopicsByAspect[aspect]?.map((subTopic, subIndex) => (
                  <SubTopic key={subIndex}>
                    <img src={ArrowRight} alt="ArrowRight" />
                    <SubTopicLink to={`/grammar-topics/${subTopic._id}`}>
                      {subTopic.title.titleFr}
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
