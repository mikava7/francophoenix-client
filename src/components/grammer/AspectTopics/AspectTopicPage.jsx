import React, { useState, useEffect } from "react";
import { fetchByAspect } from "../../../redux/slices/grammer/grammerSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../loading/Loading";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ListenImg from "../../../../public/icons/sound-50.png";
import useListenWord from "../../../hooks/useListenWord";
import { useNavigate } from "react-router-dom"; // Import useHistory from React Router
import ErrorMessage from "../../Utility/ErrorMessage";
import useScrollToTopOnRouteChange from "../../../hooks/useScrollToTopOnRouteChange";
import {
  GrammerTopicPageContainer,
  TitleContainer,
  DescriptionContainer,
  DescriptionBox,
  ExampleContainer,
  ExampleBox,
} from "../grammerStyles";
import { ListenIcon } from "../../../Styles/globalStyles";
const AspectTopicPage = () => {
  useScrollToTopOnRouteChange();

  const { TopicId } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { handleListen, isActiveStates } = useListenWord();

  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  const findTopicById = (arrays, topicId) => {
    for (const key in arrays) {
      if (arrays.hasOwnProperty(key) && Array.isArray(arrays[key])) {
        const foundTopic = arrays[key].find((topic) => topic._id === topicId);
        if (foundTopic) {
          // console.log("foundTopic in AspectTopicPage", foundTopic);
          return foundTopic;
        }
      }
    }
    return null; // Return null if not found in any array
  };
  const selectedGrammerTopic = useSelector((state) =>
    findTopicById(state.grammer.topicsByAspect, TopicId)
  );
  // console.log("selectedGrammerTopic in ", selectedGrammerTopic);
  const isLoading = useSelector((state) => state.grammer.isLoading);
  const error = useSelector((state) => state.grammer.error);
  useEffect(() => {
    if (selectedGrammerTopic === null || selectedGrammerTopic === undefined) {
      // Use navigate to redirect to another route
      navigate("/grammar/basic-grammar-lessons");
    }
  }, [navigate, selectedGrammerTopic]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorMessage />;
  }
  if (!selectedGrammerTopic && selectedGrammerTopic === null) {
    return null;
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
              <p>{example}</p>

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
