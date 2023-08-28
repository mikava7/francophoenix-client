import React, { useState, useEffect } from "react";
import { fetchByAspect } from "../../../redux/slices/grammer/grammerSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../loading/Loading";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ListenImg from "../../../../public/icons/sound-50.png";
import useListenWord from "../../../hooks/useListenWord";
const AspectTopicPage = () => {
  const { TopicId } = useParams();
  const { handleListen, isActiveStates } = useListenWord();

  const { i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  const findTopicById = (arrays, topicId) => {
    for (const key in arrays) {
      if (arrays.hasOwnProperty(key) && Array.isArray(arrays[key])) {
        const foundTopic = arrays[key].find((topic) => topic._id === topicId);
        if (foundTopic) {
          return foundTopic;
        }
      }
    }
    return null; // Return null if not found in any array
  };
  const selectedGrammerTopic = useSelector((state) =>
    findTopicById(state.grammer.topicsByAspect, TopicId)
  );
  const isLoading = useSelector((state) => state.grammer.isLoading);
  const error = useSelector((state) => state.grammer.error);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (!selectedGrammerTopic) {
    return;
  }
  const {
    title: { titleFr, titleEng, titleGeo },
    description: { descriptionFr, descriptionEng, descriptionGeo },
    example: { exampleFr, exampleEng, exampleGeo },
  } = selectedGrammerTopic;
  // console.log("descriptionFr", selectedGrammerTopic);

  const secondLanguageTitle = isGeorgian ? titleGeo : titleEng;
  const secondLanguageDescription = isGeorgian
    ? descriptionGeo
    : descriptionEng;
  const secondLanguageExample = isGeorgian ? exampleGeo : exampleEng;

  return (
    <GrammerTopicPageContainer>
      <TitleContainer>
        <h1>{titleFr}</h1>

        <span>{secondLanguageTitle}</span>
      </TitleContainer>

      <DescriptionContainer>
        {/* <h2>Description</h2> */}
        {descriptionFr.map((description, index) => (
          <DescriptionBox key={index}>
            <p>{description}</p>
            <span>{secondLanguageDescription[index]}</span>
          </DescriptionBox>
        ))}
      </DescriptionContainer>

      <ExampleContainer>
        <h2>Example</h2>
        {exampleFr.map((example, index) => (
          <ExampleBox key={index}>
            <div>
              <Example>{example}</Example>

              {example.length !== 0 && ( // Check if example is not empty before rendering the icon
                <ListenIcon
                  onClick={handleListen(example)}
                  isActive={isActiveStates[index]}
                >
                  <img src={ListenImg} alt="ListenImg" />
                </ListenIcon>
              )}
            </div>
            <span>{secondLanguageExample[index]}</span>
          </ExampleBox>
        ))}
      </ExampleContainer>
    </GrammerTopicPageContainer>
  );
};

export default AspectTopicPage;
const GrammerTopicPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;
const TitleContainer = styled.div``;

const DescriptionContainer = styled.div`
  border-bottom: 3px solid ${(props) => props.theme.secondaryText};

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 1rem 0.2rem;
  width: 80%;
  background-color: ${(props) => props.theme.secondaryBackground};

  p {
    margin-bottom: 1rem;
    padding: 0 1rem;
    &:before {
      content: ${(props) =>
        props.theme.background === "#000000" ? '"🔸"' : '"🔹"'};
    }
  }
  span {
    text-indent: 1rem;
    margin-left: 2rem;
    color: ${(props) => props.theme.secondaryText};
  }
  @media (min-width: 768px) and (max-width: 920px) {
    span {
      font-size: ${({ theme }) => theme.small};
    }
  }
  @media (min-width: 412px) and (max-width: 768px) {
    span {
      font-size: ${({ theme }) => theme.extraSmall};
    }
  }
  @media (min-width: 392px) and (max-width: 412px) {
    span {
      font-size: ${({ theme }) => theme.extraSmall};
    }
  }
`;
const ExampleContainer = styled(DescriptionContainer)``;
const ExampleBox = styled(DescriptionBox)`
  /* min-width: 370px; */
  div {
    display: flex;
  }
  span {
    padding: 0.5rem 1rem;
  }
`;
const Example = styled.p``;

export const ListenIcon = styled.div`
  display: flex;
  margin-right: 1rem;
  margin-left: auto;
  & > img {
    color: black;
    width: ${(props) => props.width || "1.2rem"};
    height: ${(props) => props.height || "1.2rem"};
    cursor: pointer;

    filter: ${(props) => (props.isActive ? "black" : "invert(-150%)")};
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.isActive ? "scale(1.1)" : "scale(1)")};
  }
`;
