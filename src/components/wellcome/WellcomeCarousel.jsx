import React from "react";
import styled, { keyframes } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
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

const WellcomeCarousel = ({ wellcomeData }) => {
  const { t, i18n } = useTranslation(); // Get the current language and translation function (t)
  const isEnglish = i18n.language === "en"; // Check if the current language is English

  const slidesToShow = () => {
    const containerWidth = window.innerWidth;
    if (containerWidth >= 1500) return 4;
    if (containerWidth >= 1200) return 3;
    if (containerWidth >= 992) return 2;
    if (containerWidth >= 768) return 2;
    return 1;
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow(),
    slidesToScroll: 2,
    prevArrow: <CustomArrow>{""}</CustomArrow>,
    nextArrow: <CustomArrow>{""}</CustomArrow>,

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
  const pagePaths = [
    "/courses",
    "/books",
    "/grammer",
    "/vocabulary-topics",
    "/myaccount",
    "/frenchmovies",
    "/frenchmusic",
  ];
  return (
    <Slider {...settings}>
      {wellcomeData.map((data, index) => (
        <WellcomeCard key={index}>
          <h2>{isEnglish ? data.title : data.titleGeo}</h2>
          <p>{isEnglish ? data.description : data.descriptionGeo}</p>
          <ExploreLink to={pagePaths[index]}>Explore</ExploreLink>
        </WellcomeCard>
      ))}
    </Slider>
  );
};

const WellcomeCard = styled.div`
  width: 100%;
  max-width: 20rem;
  height: 20rem;
  position: relative;

  background-color: #fff1f1;

  padding: 1rem;
  margin: 1rem 4rem;

  border-radius: 12px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  h2 {
    font-size: 1.4rem;
  }
  p {
    /* text-indent: 30px; */
    text-align: stretch;
    width: 100%;
    font-size: 1.2rem;
    color: grey;
  }
`;

export const ExploreLink = styled(Link)`
  text-decoration: none;
  padding: 0.5rem 1rem;

  border: 1px solid grey;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: white;
  color: orange;
  font-weight: bold;
  &:hover {
    background-color: orange;
    color: white;
  }
`;
const CustomArrow = styled.button`
  margin: 0 2rem;
`;
export default WellcomeCarousel;
