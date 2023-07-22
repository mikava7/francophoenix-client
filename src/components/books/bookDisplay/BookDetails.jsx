import React from "react";
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
} from "./style-bookDisplay";

const BookDetails = ({ books }) => {
  return (
    <BookCardLayout>
      <Actions>
        <img src={BookmarkIcon} alt="BookmarkIcon" />
      </Actions>
      <BookCover>
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
      <Preface>
        <Title>{books.title}</Title>

        <Author>by {books.author}</Author>
        <p>{books.description}</p>
      </Preface>
    </BookCardLayout>
  );
};

export default BookDetails;
