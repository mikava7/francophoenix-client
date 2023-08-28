import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {
  fetchByAspect,
  fetchAspectList,
} from "../../redux/slices/grammer/grammerSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/Loading";
import ErrorMessage from "../Utility/ErrorMessage";
import SideGrammarSection from "./grammarSection/SideGrammarSection";
import SideVocabularySection from "./vocabularySection/SideVocabularySection";
import { vocabularySectionData } from "../../data/components/vocabularySectionData";
const Sidebar = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [selectedSubSection, setSelectedSubSection] = useState(null);
  const [selectedSubSectionTopics, setSelectedSubSectionTopics] = useState([]);
  const [isSubSectionExpanded, setIsSubSectionExpanded] = useState({});

  const subTopicsByAspect =
    useSelector((state) => state.grammer.topicsByAspect) || {};
  const aspectList = useSelector((state) => state.grammer.aspectList) || [];
  const isLoading = useSelector((state) => state.grammer.isLoading);
  const error = useSelector((state) => state.grammer.error);

  const fetchSubTopicsByAspect = (aspect) => {
    dispatch(fetchByAspect(aspect)); // Dispatch the fetchByAspect action
  };
  useEffect(() => {
    dispatch(fetchAspectList());
  }, []);

  const toggleSubSection = (subSectionTitle) => {
    if (!subTopicsByAspect[subSectionTitle]) {
      // console.log(subSectionTitle);

      dispatch(fetchSubTopicsByAspect(subSectionTitle));
    }
    setIsSubSectionExpanded((prevState) => ({
      ...prevState,
      [subSectionTitle]: !prevState[subSectionTitle],
    }));
  };

  const isSubSectionOpen = (subSectionTitle) => {
    return isSubSectionExpanded[subSectionTitle];
  };

  const uniqueValues = aspectList.map((aspect) => aspect.grammarAspect);
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorMessage error={error} />;
  }
  return (
    <>
      <SideGrammarSection
        uniqueValues={uniqueValues}
        subTopicsByAspect={subTopicsByAspect}
        toggleSubSection={toggleSubSection}
        isSubSectionOpen={isSubSectionOpen}
      />
      <SideVocabularySection
        vocabularyAspects={vocabularySectionData[i18n.language]}
        toggleSubSection={toggleSubSection}
        isSubSectionOpen={isSubSectionOpen}
      />
    </>
  );
};

export default Sidebar;

export const SidebarContainer = styled.div`
  background-color: ${(props) => props.theme.secondaryBackground};
  width: 250px;
  padding: 0.2rem 0.4rem;
  margin-right: 0.2rem;
`;

export const Section = styled.div`
  /* margin-bottom: 20px; */
  border-bottom: 2px solid ${(props) => props.theme.tertiaryText};
  padding-bottom: 1rem;
`;
export const SidbarTitle = styled.h2``;
export const SideBarLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.primaryText};
  margin: 0.2rem;
  padding: 0.2rem;
`;

export const DropdownArrow = styled.span`
  margin-left: auto;
`;

export const SidebarStyledUl = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;

  background-color: ${(props) => props.theme.primaryBackground};
`;

export const TopicLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* border-bottom: 1px solid ${(props) => props.theme.tertiaryText}; */
  padding: 0.3rem;
`;
export const SubTopic = styled.li`
  display: flex;
  align-items: center;
  margin-left: 0.6rem;
  cursor: pointer;
  position: relative;
  padding: 0.4rem 0.4rem 0 0.4rem;
  img {
    max-width: 20px;
    max-height: 20px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 13%;
    height: 2px;
    background-color: ${(props) => props.theme.primaryText};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: calc(100% - 2px); /* Expand width to 100% on hover */
  }
  &:last-child {
    margin-bottom: 0.5rem;
  }
`;
export const SubTopicLink = styled(SideBarLink)``;
