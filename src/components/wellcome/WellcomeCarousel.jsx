import React from "react";
import styled, { keyframes } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

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
    "/vocabulary",
    "/myaccount",
    "/frenchmovies",
    "/frenchmusic",
  ];
  return (
    <Slider {...settings}>
      {wellcomeData.map((data, index) => (
        <WellcomeCard key={index}>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <ExploreLink to={pagePaths[index]}>Explore</ExploreLink>
        </WellcomeCard>
      ))}
    </Slider>
  );
};

const WellcomeCard = styled.div`
  width: 100%;
  max-width: 20rem;
  height: 16rem;
  position: relative;
  background-color: #fffbfb;
  padding: 1rem;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    z-index: 1;
    box-shadow: 0 0 10px rgba(197, 165, 165, 0.2);
  }
`;

export const ExploreLink = styled(Link)`
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid grey;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: #ffd105;
`;

export default WellcomeCarousel;
