import React, { useState, useEffect } from "react";
import { fetchGrammer } from "../../redux/slices/grammer/grammerSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/Loading";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ListenImg from "../../../public/icons/sound-50.png";
import useListenWord from "../../hooks/useListenWord";
import {
  GrammerTopicPageContainer,
  TitleContainer,
  DescriptionContainer,
  DescriptionBox,
  ExampleContainer,
  ExampleBox,
  ListenIcon,
} from "./grammerStyles";

import useScrollToTopOnRouteChange from "../../hooks/useScrollToTopOnRouteChange";
const GrammerTopicPage = () => {
  const { BasicGrammerTopicId } = useParams();
  useScrollToTopOnRouteChange();

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
