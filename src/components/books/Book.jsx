import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooksByLevel } from "../../redux/slices/books/booksSlice";

const Book = () => {
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const selectedBook = useSelector((state) =>
    state.books.books.find((book) => book._id === bookId)
  );
  const isLoading = useSelector((state) => state.books.isLoading);
  console.log("selectedBook", selectedBook);

  useEffect(() => {
    dispatch(fetchBooksByLevel("B1"));
  }, [dispatch, bookId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!selectedBook) {
    return <p>Book not found.</p>;
  }

  // Function to add a newline before every occurrence of '-'
  const formatChapterText = (text) => {
    return text.replace(/—/g, "\n-");
  };

  return (
    <BookContainer>
      <h2>{selectedBook.title}</h2>
      <h4>{selectedBook.author}</h4>
      <p>
        {selectedBook.chapters.map((chapter, index) => (
          <ChapterText key={index}>
            <div>
              <h3>{formatChapterText(chapter.chapterTitle)}</h3>
              <p>{formatChapterText(chapter.subtitle)}</p>
              <p>{formatChapterText(chapter.text)}</p>
            </div>
          </ChapterText>
        ))}
      </p>
    </BookContainer>
  );
};

export default Book;

const BookContainer = styled.div`
  display: flex;
  background: white;

  flex-direction: column;
  align-items: center;
  padding: 5rem;
`;

const ChapterText = styled.p`
  white-space: pre-line;
  line-height: 2;
  font-size: 1.3rem;
  letter-spacing: 1px;
  font-family: "Palatino", sans-serif;
  text-indent: 30px;
`;
