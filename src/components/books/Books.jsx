import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BooksWrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const LevelLink = styled(Link)`
  display: block;
  font-size: 18px;
  color: #007bff;
  margin-bottom: 10px;
  text-decoration: none;
`;

const Books = () => {
  return (
    <BooksWrapper>
      <Title>Choose Your Level</Title>
      <LevelLink to="/books/level/a1-a2">A1-A2</LevelLink>
      <LevelLink to="/books/level/a2-b1">A2-B1</LevelLink>
      <LevelLink to="/books/level/b1-b2">B1-B2</LevelLink>
    </BooksWrapper>
  );
};

export default Books;
