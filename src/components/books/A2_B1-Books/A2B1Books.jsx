import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BookDetails from "../bookDisplay/BookDetails";
import { fetchBooksPreview } from "../../../redux/slices/books/booksSlice";
import Loading from "../../loading/Loading";
import ChooseLevel from "../chooseLevel/ChooseLevel";
import useScrollToTopOnRouteChange from "../../../hooks/useScrollToTopOnRouteChange";
const description = `Découvrez les aventures d’Alex Leroc, un journaliste d’investigation français qui travaille à Bruxelles et qui vit uniquement pour son travail.
Résumé:
Le festival de Cannes rassemble, comme chaque année, les stars du cinéma et toute la presse. Naturellement, Alex Leroc y va. C’est le printemps, il fait beau sur la Côte d’Azur. Les conditions sont idéales pour la grande fête du cinéma. Alex s’intéresse à un acteur parisien et sa petite amie top modèle, un couple apparemment parfait`;

const A2B1Books = () => {
  useScrollToTopOnRouteChange();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books) || [];
  const isLoading = useSelector((state) => state.books.isLoading);
  const [selectedLevel, setSelectedLevel] = useState(null); // Initialize with null

  useEffect(() => {
    dispatch(fetchBooksPreview());
  }, [dispatch]);

  const handleLevelChange = (event) => {
    const newSelectedLevel =
      event.target.value === "Tous" ? null : event.target.value;
    setSelectedLevel(newSelectedLevel); // Update the selected level
  };

  const filteredBooks = selectedLevel
    ? books.filter((book) => book.level === selectedLevel)
    : books; // If no level is selected, show all books

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BooksPageContainer>
      <Title>Our Best Books</Title>

      <ChooseLevel onChange={handleLevelChange} selectedLevel={selectedLevel} />
      <BookList>
        {filteredBooks.map((book) => (
          <BookItem key={book._id}>
            <StyledLink to={`/reading-zone/french-easy-reading/${book._id}`}>
              <BookDetails books={book} description={description} />
            </StyledLink>
          </BookItem>
        ))}
      </BookList>
    </BooksPageContainer>
  );
};

export default A2B1Books;
const BooksPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-x: hidden;
`;
const Title = styled.h2`
  font-weight: bold;
  margin-bottom: 10px;
`;

const BookList = styled.ul`
  display: flex;
  /* outline: 1px solid blue; */

  /* width: 90%; */

  flex-wrap: wrap; //when i comment this line then all books are in one line horizontally. if i add this line then one by one vertically. why?
  list-style: none;
  padding: 0;
`;

const BookItem = styled.li`
  font-size: 18px;
  margin-bottom: 5px;
  /* width: 100%; */
  margin: 0 1rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
