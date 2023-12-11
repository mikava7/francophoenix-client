import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import { fetchGrammer } from "../../redux/slices/grammer/grammerSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/Loading";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
import Listen from "../Listen";
import useScrollToTopOnRouteChange from "../../hooks/useScrollToTopOnRouteChange";
const GrammerTopicPage = () => {
  const { BasicGrammerTopicId } = useParams();
  useScrollToTopOnRouteChange();
  const currentUrl = window.location.href;
  const handleFacebookShare = () => {
    // Replace 'your-url' with the actual URL you want to share
    const shareUrl = currentUrl;

    // Open the Facebook Share Dialog
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank"
    );
  };
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
      <ShareButton
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          currentUrl
        )}`}
        target="_blank"
      >
        Share on Facebook
      </ShareButton>
      <TitleContainer>
        <h2>{titleFr}</h2>
      </TitleContainer>
      <DescriptionContainer>
        {/* <h2>{t("Qu'est-ce que c'est ?")}</h2> */}
        {descriptionFr.map((description, index) => (
          <DescriptionBox key={index}>
            {description.split("\n").map((text, i) => (
              <p key={i}>{text}</p>
            ))}
            <span>{secondLanguageDescription[index]}</span>
          </DescriptionBox>
        ))}
      </DescriptionContainer>

      <ShareButton onClick={handleFacebookShare}>
        <FontAwesomeIcon icon={faFacebook} />
        Share on Facebook
      </ShareButton>
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
                <Listen />
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
const ShareButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  background-color: #3b5998; /* Facebook blue color */
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    background-color: #2d4373; /* Darker Facebook blue on hover */
  }

  & > svg {
    margin-right: 8px; /* Adjust the spacing between the icon and text */
  }
`;
