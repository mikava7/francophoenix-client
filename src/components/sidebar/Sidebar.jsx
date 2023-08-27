import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { fetchByAspect } from "../../redux/slices/grammer/grammerSlice";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [selectedSubSection, setSelectedSubSection] = useState(null);
  const [selectedSubSectionTopics, setSelectedSubSectionTopics] = useState([]);
  const [isSubSectionExpanded, setIsSubSectionExpanded] = useState({});

  const aspectsArray = [
    "verb",
    "article",
    "pronoun",
    "adjective",
    "conjugation",
    "preposition",
    "conjunction",
  ];

  const subTopicsByAspect =
    useSelector((state) => state.grammer.topicsByAspect) || {};

  const fetchSubTopicsByAspect = (aspect) => {
    dispatch(fetchByAspect(aspect)); // Dispatch the fetchByAspect action
  };

  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const toggleSubSection = (subSectionTitle) => {
    if (!subTopicsByAspect[subSectionTitle]) {
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

  return (
    <SidebarContainer>
      {aspectsArray.map((aspect, index) => (
        <Section key={index}>
          <TopicLink onClick={() => toggleSubSection(aspect)}>
            <span>{t(aspect)}</span>{" "}
            <DropdownArrow>
              {isSubSectionOpen(aspect) ? "▲" : "▼"}
            </DropdownArrow>
          </TopicLink>
          <SidebarStyledUl show={isSubSectionOpen(aspect)}>
            {subTopicsByAspect[aspect]?.map((subTopic, subIndex) => (
              <li key={subIndex}>
                <SideBarLink to={`/grammar-topics/${subTopic._id}`}>
                  {" "}
                  {/* Modify the link structure */}
                  {subTopic.title.titleFr}
                </SideBarLink>
              </li>
            ))}
          </SidebarStyledUl>
        </Section>
      ))}
      {/* Other sections */}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: ${(props) => props.theme.primaryBackground};
  width: 250px;
  padding: 0.2rem 0.4rem;
  margin-right: 0.2rem;
`;

const Section = styled.div`
  margin-bottom: 20px;
  border-bottom: 2px solid ${(props) => props.theme.primaryText};
  padding-bottom: 1rem;
`;

const SideBarLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.primaryText};
  margin: 0.2rem;
  padding: 0.2rem;
`;

const DropdownArrow = styled.span`
  margin-left: auto;
`;

const SidebarStyledUl = styled.ul`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
`;

const TopicLink = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.tertiaryText};
  padding: 0.3rem;
`;
