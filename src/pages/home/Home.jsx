import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooksByLevel } from "../../redux/slices/books/booksSlice";
import Carousel from "../../components/carousel/Carousel";
import WellcomeCarousel from "../../components/wellcome/WellcomeCarousel";
import { wellcomeData } from "../../data/wellcomeData";
const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.books.isLoading);

  useEffect(() => {
    dispatch(fetchBooksByLevel("A2"));
  }, []);

  if (isLoading) {
    return <p>Loading</p>;
  }
  return (
    <HomeContainer>
      <Section>
        <TiTleMessage>Wellcome to Francophoenix</TiTleMessage>

        <WellcomeCarousel wellcomeData={wellcomeData} />
      </Section>

      <Section>
        <TopOfCarousel>
          <p>nivaou A2</p>
          <SeeAllLink to="/books/level/a2-b1">See All</SeeAllLink>
        </TopOfCarousel>

        <Carousel books={books} />
      </Section>
    </HomeContainer>
  );
};

export default Home;
const HomeContainer = styled.section`
  width: 100%;
  padding-left: 5rem;
  background-color: #bfb4e6;
`;
const Section = styled.div`
  border: 2px solid grey;
  background-color: white;
  padding-left: 2rem;
  h2 {
    text-align: center;
  }
`;
const SeeAllLink = styled(Link)`
  margin-right: 2rem;
  &:hover {
    color: blue;
  }
`;
const TiTleMessage = styled.h2`
  background: white;
  width: 100%;
  padding: 2rem;
  margin: 0;
`;
const TopOfCarousel = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-size: 1.4rem;
  p {
    font-size: 2rem;
  }
`;
