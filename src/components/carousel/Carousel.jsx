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

const Carousel = ({ books }) => {
  const { t } = useTranslation();
  const slidesToShow = () => {
    const containerWidth = window.innerWidth;
    if (containerWidth >= 1200) return 5;
    if (containerWidth >= 992) return 4;
    if (containerWidth >= 768) return 3;
    return 1;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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

  return (
    <Slider {...settings}>
      {books.map((book) => (
        <BookCard key={book._id}>
          <BookImage src={book.poster} alt={book.title} />
          <Link to={`books/${book._id}`}>
            <ReadExtract>{t("Lire Extrait")}</ReadExtract>
          </Link>
        </BookCard>
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
  background: ${(props) => props.theme.highlight5};
  color: ${(props) => props.theme.background};
  padding: 8px;
  text-align: center;
  font-weight: bold;
  animation: ${slideOut} 0.3s ease-in-out;
`;

const BookCard = styled.div`
  width: 100%;
  max-width: 12rem;
  height: 18rem;
  margin: 0 2rem;

  position: relative;
  padding: 0;
  &:hover {
    cursor: pointer;
    ${ReadExtract} {
      display: block;
      /* transform: translateY(0); */
    }
  }
`;

const BookImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 0;
  margin: 0;
`;

export default Carousel;
