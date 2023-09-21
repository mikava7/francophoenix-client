import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { fetchAllAspectsData } from "../../redux/slices/grammer/grammerSlice";
import Loading from "../loading/Loading";
import ErrorMessage from "../Utility/ErrorMessage";
import { Link } from "react-router-dom";
import SideGrammarSection from "./grammarSection/SideGrammarSection";
import SideVocabularySection from "./vocabularySection/SideVocabularySection";
import { vocabularySectionData } from "./components/vocabularySectionData";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [isSubSectionExpanded, setIsSubSectionExpanded] = useState({});

  const allAspectsData =
    useSelector((state) => state.grammer.allAspectsData) || [];
  console.log("allAspectsData", allAspectsData);
  // console.log("subTopicsByAspect", subTopicsByAspect);

  const isLoading = useSelector((state) => state.grammer.isLoading);
  const error = useSelector((state) => state.grammer.error);

  useEffect(() => {
    dispatch(fetchAllAspectsData());
    // dispatch(fetchGrammer());
  }, [dispatch]);

  const isSubSectionOpen = (subSectionTitle) => {
    return isSubSectionExpanded[subSectionTitle];
  };
  return (
    <>
      <SideGrammarSection
        allAspectsData={allAspectsData}
        isSubSectionOpen={isSubSectionOpen} // Pass isSubSectionOpen here
      />

      <SideVocabularySection
        vocabularyAspects={vocabularySectionData[i18n.language]}
        isSubSectionExpanded={isSubSectionExpanded}
      />
    </>
  );
};

export default Sidebar;

export const SidebarContainer = styled.div`
  background-color: ${(props) => props.theme.secondaryBackground};
  max-width: 100%;
  padding: 0.2rem 0.4rem;
  margin-right: 0.2rem;
  @media (min-width: 751px) and (max-width: 920px) {
    /* letter-spacing: ${({ theme }) => theme.largeLetterSpacing}; */
    /* border: 2px solid red; */
    width: 280px;
    font-size: ${({ theme }) => theme.small};
  }
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
  max-width: 300px;
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
