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
  const { t, i18n } = useTranslation();

  const isGeorgian = i18n.language === "ka";
  const dispatch = useDispatch();
  const selectedGrammerTopic =
    useSelector((state) =>
      state.grammer.grammer.find((topic) => topic._id === BasicGrammerTopicId)
    ) || [];
  const isLoading = useSelector((state) => state.grammer.isLoading);
  const error = useSelector((state) => state.grammer.error);
  // console.log("selectedGrammerTopic", selectedGrammerTopic);
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
      </TitleContainer>
      <DescriptionContainer>
        <h2>{t("Qu'est-ce que c'est ?")}</h2>
        {descriptionFr.map((description, index) => (
          <DescriptionBox key={index}>
            <p>{description}</p>
            <span>{secondLanguageDescription[index]}</span>
          </DescriptionBox>
        ))}
      </DescriptionContainer>
      <ExampleContainer>
        <h2>{t("Examples")}</h2>
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
  justify-content: center;

  margin: 0 1.8rem;
  max-width: 100%;

  @media (min-width: 768px) and (max-width: 920px) {
    margin: 0 0.2rem;
    max-width: 90%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
  }

  @media (min-width: 393px) and (max-width: 576px) {
  }
  @media (max-width: 392px) {
  }
`;
const TitleContainer = styled.div``;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  width: 100%;

  border-bottom: 3px solid black;
  @media (min-width: 768px) and (max-width: 920px) {
    margin: 0 0.2rem;
    width: 100%;
  }
  cursor: pointer;
  margin-bottom: 2rem;
`;
const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondaryBackground};
  margin-bottom: 1rem;
  width: 94%;
  padding: 0.5rem;
  p {
    text-indent: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem;

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
    max-width: 88%;
  }

  @media (max-width: 392px) {
    width: 300px;
  }
`;
const ExampleContainer = styled(DescriptionContainer)`
  width: 94%;
  padding: 0 1rem;

  p {
    font-size: 1.2rem;
    margin-bottom: 0;
  }

  @media (min-width: 577px) and (max-width: 767px) {
    width: 90%;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    width: 90%;
  }
`;
const ExampleBox = styled(DescriptionBox)`
  width: 100%;

  @media (min-width: 393px) and (max-width: 576px) {
    width: 90%;
  }
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
