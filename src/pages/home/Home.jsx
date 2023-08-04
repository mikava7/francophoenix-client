import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooksByLevel } from "../../redux/slices/books/booksSlice";
import { fetchVocabularyTopics } from "../../redux/slices/vocabularyTopics/vocabularyTopicSlice";
import Carousel from "../../components/carousel/Carousel";
import WellcomeCarousel from "../../components/wellcome/WellcomeCarousel";
import { wellcomeData } from "../../data/wellcome/wellcome";
import { useTranslation } from "react-i18next";
import Loading from "../../components/loading/Loading";
import VocabularyTopicCarousel from "../../components/carousel/vocabularyTopicCarousel/vocabularyTopicCarousel";
import QuizPictures from "../../components/quizPictures/QuizPictures";
import FindTranslationForFrenchWord from "../SearchComponent/frenchWords/FindTranslationForFrenchWord";
const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.books.isLoading);

  const vocabularyTopic =
    useSelector((state) => state.vocabularyTopics.vocabularyTopics) || [];
  const isLoadingvocabularyTopic = useSelector(
    (state) => state.vocabularyTopics.isLoading
  );
  useEffect(() => {
    dispatch(fetchBooksByLevel("A2"));
  }, []);
  useEffect(() => {
    dispatch(fetchVocabularyTopics());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <HomeContainer>
      <FindTranslationForFrenchWord />

      <WellcomeSection>
        <TiTleMessage>{t("Bienvenue à Francophoenix")}</TiTleMessage>
        <WellcomeCarousel wellcomeData={wellcomeData} />
      </WellcomeSection>

      <SearchAndQuiz>
        <QuizPictures />
      </SearchAndQuiz>
      <Section>
        <TopOfCarousel>
          <p>{t("Tous les livres")} </p>
          <SeeAllLink to="/books/level/a2-b1">{t("Tout afficher")}</SeeAllLink>
        </TopOfCarousel>

        <Carousel books={books} />
      </Section>

      <Section>
        <TopOfCarousel>
          <p>{t("Vocabulaire thématique")} </p>
          <SeeAllLink to="/vocabulary-topics">{t("Tout afficher")}</SeeAllLink>
        </TopOfCarousel>

        <VocabularyTopicCarousel
          vocabularyTopic={vocabularyTopic}
          isLoadingvocabularyTopit={isLoadingvocabularyTopic}
        />
      </Section>

      <Section>
        <TopOfCarousel>
          <p>{t("Niveau A1")} </p>
          <SeeAllLink to="/books/level/a2-b1">{t("Tout afficher")}</SeeAllLink>
        </TopOfCarousel>

        <Carousel books={books} />
      </Section>
    </HomeContainer>
  );
};

export default Home;
const HomeContainer = styled.section`
  background-color: ${(props) => props.theme.colors.lightBack};
  color: ${(props) => props.theme.colors.textPrimary};
`;
const WellcomeSection = styled.div`
  background: #b4bdcfc7;
  max-height: 100%;
`;
const Section = styled.div`
  border: 2px solid grey;
  background-image: url("/icons/tex.avif");
  background-repeat: repeat-x;
  margin: 0 2rem;
  color: white;

  border-bottom: 1.6rem solid #c26528;
  margin-bottom: 2rem;
  position: relative;
  h2 {
    text-align: center;
  }
`;
const SeeAllLink = styled(Link)`
  margin-right: 2rem;
  color: #955cff;
  padding: 0.5rem 1rem;
  text-decoration: none;
  background-color: white;

  border-radius: 6px;
  &:hover {
    color: white;
    background-color: #955cff;
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
const LineBrake = styled.div`
  height: 2.5rem;
`;
const SearchAndQuiz = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 1rem;
  border: 2px solid green;
  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 2rem;
    background-size: 130%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    display: grid;
    grid-template-columns: 60% 25%;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 1.5rem;

    background-size: 120%;
    margin-left: 1rem;
  }

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    border: none;
  }
`;
