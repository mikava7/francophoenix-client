import React from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const BookList = styled.ul`
  list-style: none;
  padding: 0;
`;

const BookItem = styled.li`
  font-size: 18px;
  margin-bottom: 5px;
`;

const B1B2Books = () => {
  return (
    <PageWrapper>
      <Title>A1-A2 Level Books</Title>
      <BookList>
        <BookItem>Book 1 for A1-A2 Level</BookItem>
        <BookItem>Book 2 for A1-A2 Level</BookItem>
        <BookItem>Book 3 for A1-A2 Level</BookItem>
        {/* Add more books as needed */}
      </BookList>
    </PageWrapper>
  );
};

export default B1B2Books;
