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
} from "../Sidebar";

const SideVocabularySection = ({
  vocabularyAspects,
  toggleSubSection,
  isSubSectionOpen,
}) => {
  const { t } = useTranslation();
  console.log("vocabularyAspects", vocabularyAspects);
  return (
    <SidebarContainer>
      <SidbarTitle>
        <SideBarLink to="/vocabulary">{t("Vocabulary")}</SideBarLink>
      </SidbarTitle>
      {vocabularyAspects &&
        vocabularyAspects?.map((aspect, index) => {
          return (
            <Section key={index}>
              <TopicLink>
                <SideBarLink to={`${aspect.link}`}>
                  <span>{t(aspect.title)}</span>
                </SideBarLink>
              </TopicLink>
            </Section>
          );
        })}
    </SidebarContainer>
  );
};

export default SideVocabularySection;
