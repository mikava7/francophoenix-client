import React from "react";
import styled, { keyframes } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Loading from "../../loading/Loading";
import { useTranslation } from "react-i18next";
const slideOut = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const VocabularyTopicCarousel = ({
  isLoadingvocabularyTopic,
  vocabularyTopic,
}) => {
  const slidesToShow = () => {
    const containerWidth = window.innerWidth;
    if (containerWidth >= 1200) return 4;
    if (containerWidth >= 992) return 3;
    if (containerWidth >= 768) return 2;
    return 1;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1600,
    slidesToShow: slidesToShow(),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: slidesToShow(),
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: slidesToShow(),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: slidesToShow(),
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1, // Show 1 card on the smallest screens
        },
      },
    ],
  };
  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";

  if (isLoadingvocabularyTopic) {
    return <Loading />;
  }

  console.log(vocabularyTopic);

  return (
    <Slider {...settings}>
      {vocabularyTopic.map((vocabulary) => (
        <TopicCard key={vocabulary._id} imageUrl={vocabulary.imageUrl}>
          <TopicTitle>
            <h2>{vocabulary.nameFr} </h2>
            <p>{isGeorgian ? vocabulary.nameGeo : vocabulary.nameEng}</p>
          </TopicTitle>
          <WordCount>
            <span>{t("Les mots")}</span>
            <b>{vocabulary.french.length}</b>
          </WordCount>
          <Link to={`vocabulary-topics/${vocabulary._id}`}>
            <ReadExtract>{t("Explorez des sujets")} </ReadExtract>
          </Link>
        </TopicCard>
      ))}
    </Slider>
  );
};

const ReadExtract = styled.span`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0055a4;
  color: white;
  font-weight: bold;
  padding: 8px;
  text-align: center;
  animation: ${slideOut} 0.3s ease-in-out;
`;

const TopicCard = styled.div`
  display: flex;

  width: 100%;
  max-width: 20rem;
  height: 18rem;
  gap: 1rem;
  margin: 0 2rem;
  margin-bottom: 1rem;
  border-radius: 12px;
  color: black;
  position: relative;
  background-image: url(${(props) => props.imageUrl});
  background-repeat: repeat;
  background-position: center;
  background-size: 100%;
  transition: background-size 1s ease;
  z-index: 1;
  font-family: "Arial", "Helvetica", sans-serif, "Times New Roman", "Times",
    serif, "Courier New", "Courier", monospace;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #3767ebc7;
    filter: blur(18px);
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    background-size: 120%;
    transition: background-size 1s ease;
    ${ReadExtract} {
      display: block;
    }
  }
`;

const TopicTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 0.3rem;

  p {
    font-size: 1.2rem;
  }
`;

const WordCount = styled.div`
  width: 200px;
  border: 2px solid #0055a4;
  padding: 1rem;
  font-size: 1.2rem;
  position: absolute;
  bottom: 12%;
  left: 50%;
  transform: translateX(-50%);
  span {
    margin-right: 0.5rem;
    &::after {
      content: ":";
    }
  }
  b {
    font-size: 1.4rem;
    width: 2rem;
    height: 2rem;
    background: blue;
    color: white;
    padding: 0.5rem;
    border-radius: 50%;
  }
`;
export default VocabularyTopicCarousel;
