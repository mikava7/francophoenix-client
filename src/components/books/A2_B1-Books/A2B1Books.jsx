import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import BookDetails from "../bookDisplay/BookDetails";
import { fetchBooksByLevel } from "../../../redux/slices/books/booksSlice";
import Loading from "../../loading/Loading";
const description = `Découvrez les aventures d’Alex Leroc, un journaliste d’investigation français qui travaille à Bruxelles et qui vit uniquement pour son travail.
Résumé:
Le festival de Cannes rassemble, comme chaque année, les stars du cinéma et toute la presse. Naturellement, Alex Leroc y va. C’est le printemps, il fait beau sur la Côte d’Azur. Les conditions sont idéales pour la grande fête du cinéma. Alex s’intéresse à un acteur parisien et sa petite amie top modèle, un couple apparemment parfait`;
const A2B1Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books) || [];
  const isLoading = useSelector((state) => state.books.isLoading);

  useEffect(() => {
    dispatch(fetchBooksByLevel("B1"));
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BooksPageContainer>
      <Title>A1-A2 Level Books</Title>
      <BookList>
        {books.map((book) => (
          <BookItem key={book._id}>
            <Link to={`/books/${book._id}`}>
              <BookDetails books={book} />
            </Link>
          </BookItem>
        ))}
      </BookList>
    </BooksPageContainer>
  );
};

export default A2B1Books;
const BooksPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fdf3f2;
`;
const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const BookList = styled.ul`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  gap: 2rem;
  list-style: none;
  padding: 0;
`;

const BookItem = styled.li`
  font-size: 18px;
  margin-bottom: 5px;
`;
