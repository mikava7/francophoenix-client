import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import BookDisplay from "../BookDisplay";
import { fetchBooksByLevel } from "../../../redux/slices/books/booksSlice";
const description = `Découvrez les aventures d’Alex Leroc, un journaliste d’investigation français qui travaille à Bruxelles et qui vit uniquement pour son travail.
Résumé:
Le festival de Cannes rassemble, comme chaque année, les stars du cinéma et toute la presse. Naturellement, Alex Leroc y va. C’est le printemps, il fait beau sur la Côte d’Azur. Les conditions sont idéales pour la grande fête du cinéma. Alex s’intéresse à un acteur parisien et sa petite amie top modèle, un couple apparemment parfait`;
const A2B1Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books) || [];
  console.log("books", books);

  useEffect(() => {
    dispatch(fetchBooksByLevel("B1"));
  }, []);
  return (
    <PageWrapper>
      <Title>A1-A2 Level Books</Title>
      <BookList>
        {books &&
          books.map((book) => (
            <div>
              <BookDisplay
                title={book.title}
                authot={book.author}
                description={description}
              />
            </div>
          ))}
      </BookList>
    </PageWrapper>
  );
};

export default A2B1Books;
const PageWrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const BookList = styled.ul`
  display: grid;
  grid-template-columns: 45% 45% 45%;
  gap: 3rem;
  list-style: none;
  padding: 0;
`;

const BookItem = styled.li`
  font-size: 18px;
  margin-bottom: 5px;
`;
