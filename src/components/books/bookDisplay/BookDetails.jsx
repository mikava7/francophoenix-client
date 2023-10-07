import React, { useState } from "react";
import styled from "styled-components";
import BookmarkIcon from "../../../assets/icons/bookmark-50.png";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  BookCardLayout,
  Actions,
  Preface,
  BookCover,
  BookTop,
  BookSide,
  Title,
  Author,
  Description,
} from "./style-bookDisplay";
const BookDetails = ({ books, description }) => {
  const [doubleTap, setDoubleTap] = useState(false);

  const handleDoubleClick = () => {
    setDoubleTap(true);
    setTimeout(() => {
      setDoubleTap(false);
    }, 500); // Reset double-tap after 500 milliseconds
  };
  return (
    <BookCardLayout>
      <Actions>
        <img src={BookmarkIcon} alt="BookmarkIcon" />
      </Actions>
      <BookCover
        onTouchStart={() => {
          if (doubleTap) {
            handleDoubleClick();
          } else {
            setDoubleTap(true);
            setTimeout(() => {
              setDoubleTap(false);
            }, 500); // Reset double-tap after 500 milliseconds
          }
        }}
        // onTouchMove={(e) => e.preventDefault()} // Prevent scrolling while swiping
        // className={doubleTap ? "double-tap" : ""}
      >
        <BookTop
          src={books.poster}
          alt="book-top"
          // />"https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-top.svg"
        />
        <BookSide
          src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg"
          alt="book-side"
        />
      </BookCover>
      <Preface showDescription={doubleTap}>
        <Title>{books.title}</Title>

        <Author>by {books.author}</Author>
        <Description>{description}</Description>
      </Preface>
    </BookCardLayout>
  );
};

export default BookDetails;
