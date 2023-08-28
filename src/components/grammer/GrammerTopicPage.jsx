import React, { useState, useEffect } from "react";
import { fetchGrammer } from "../../redux/slices/grammer/grammerSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/Loading";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ListenImg from "../../../public/icons/sound-50.png";
import useListenWord from "../../hooks/useListenWord";
const GrammerTopicPage = () => {
  const { BasicGrammerTopicId } = useParams();
  const { handleListen, isActiveStates } = useListenWord();

  const { i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  const dispatch = useDispatch();
  const selectedGrammerTopic =
    useSelector((state) =>
      state.grammer.grammer.find((topic) => topic._id === BasicGrammerTopicId)
    ) || [];
  const isLoading = useSelector((state) => state.grammer.isLoading);
  const error = useSelector((state) => state.grammer.error);
  console.log("selectedGrammerTopic", selectedGrammerTopic);
  // useEffect(() => {
  //   dispatch(fetchGrammer());
  // }, [dispatch]);

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
  const secondLanguageTitle = isGeorgian ? titleGeo : titleEng;
  const secondLanguageDescription = isGeorgian
    ? descriptionGeo
    : descriptionEng;
  const secondLanguageExample = isGeorgian ? exampleGeo : exampleEng;

  return (
    <GrammerTopicPageContainer>
      <TitleContainer>
        <h2>{titleFr}</h2>

        <span>{secondLanguageTitle}</span>
      </TitleContainer>
      <DescriptionContainer>
        <h2>Description</h2>
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
              <p>{example}</p>{" "}
              <ListenIcon
                onClick={handleListen(example)}
                isActive={isActiveStates[index]}
              >
                <img src={ListenImg} alt="ListenImg" />
              </ListenIcon>
            </div>
            <span>{secondLanguageExample[index]}</span>
          </ExampleBox>
        ))}
      </ExampleContainer>
    </GrammerTopicPageContainer>
  );
};

export default GrammerTopicPage;
const GrammerTopicPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 920px) {
    min-width: 550px;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    min-width: 500px;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
    min-width: 400px;
  }
`;
const TitleContainer = styled.div``;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  max-width: 100%;
  font-size: 1.3rem;
  border-bottom: 3px solid black;

  cursor: pointer;
  margin-bottom: 2rem;
`;
const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondaryBackground};
  margin-bottom: 1rem;
  padding: 1rem;
  line-height: 1.5rem;
  letter-spacing: 1.2px;
  p {
    text-indent: 1rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    &:before {
      content: ${(props) =>
        props.theme.background === "#000000" ? '"🔸"' : '"🔹"'};
    }
  }
  span {
    text-indent: 1rem;

    margin-left: 2rem;
    font-size: 1rem;
    color: ${(props) => props.theme.secondaryText};
  }
  @media (max-width: 920px) {
    min-width: 500px;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    min-width: 480px;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
    min-width: 370px;
  }
`;
const ExampleContainer = styled(DescriptionContainer)`
  p {
    font-size: 1.2rem;
    margin-bottom: 0;
  }
`;
const ExampleBox = styled(DescriptionBox)`
  max-width: 100%;

  div {
    display: flex;
  }
  span {
    padding: 0.5rem 1rem;
  }
`;

export const ListenIcon = styled.div`
  max-width: 100%;

  display: flex;
  align-items: center;
  margin-right: 3rem;
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
