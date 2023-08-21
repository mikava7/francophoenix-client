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
import PresentTense from "../../components/verbs/presentTense/PresentTense";
import SentenceBuilderEx from "../../components/sentenceBuilder/SentenceBuilderEx";
import { StyledLink } from "../../Styles/globalStyles";
import Footer from "../footer/Footer";
import ExploreOptions from "../../components/exploreOptions/ExploreOptions";
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
      <ExploreOptions />
      <WellcomeSection>
        <TiTleMessage>{t("Bienvenue à Francophoenix")}</TiTleMessage>
        <WellcomeCarousel wellcomeData={wellcomeData} />
      </WellcomeSection>

      <PickAndQuiz>
        <QuizPictures />
        <PresentTense />
        <SentenceBuilderEx />
      </PickAndQuiz>
      <Section>
        <TopOfCarousel>
          <CarouselTitle>{t("Tous les livres")} </CarouselTitle>
          <SeeAllLink to="/books/level/a2-b1">{t("Tout afficher")}</SeeAllLink>
        </TopOfCarousel>

        <Carousel books={books} />
      </Section>

      <Section>
        <TopOfCarousel>
          <CarouselTitle>{t("Vocabulaire thématique")} </CarouselTitle>
          <SeeAllLink to="/vocabulary-topics">{t("Tout afficher")}</SeeAllLink>
        </TopOfCarousel>

        <VocabularyTopicCarousel
          vocabularyTopic={vocabularyTopic}
          isLoadingvocabularyTopit={isLoadingvocabularyTopic}
        />
      </Section>

      <Section>
        <TopOfCarousel>
          <CarouselTitle>{t("Niveau A1")} </CarouselTitle>
          <SeeAllLink to="/books/level/a2-b1">{t("Tout afficher")}</SeeAllLink>
        </TopOfCarousel>

        <Carousel books={books} />
      </Section>

      <Footer />
    </HomeContainer>
  );
};

export default Home;
const HomeContainer = styled.section`
  margin: 0 1rem;

  background-color: ${(props) => props.theme.primaryBackground};
  color: ${(props) => props.theme.primaryText};
  max-width: 100%;
  font-size: 1.8rem;
  @media screen and (max-width: 576px) {
    margin: 0 0.2rem;
    font-size: 1.1rem;
  }
  @media screen and (min-width: 768px) {
    margin: 0 0.3rem;
    font-size: 1.3rem;
  }
  @media screen and (min-width: 992px) {
    margin: 0 0.6rem;
    font-size: 1.4rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.6rem;
  }
`;
const WellcomeSection = styled.div`
  max-height: 100%;
`;
const Section = styled.div`
  background-image: url("/icons/tex.avif");
  background-repeat: repeat-x;
  margin: 0 2rem;

  border-bottom: 1.6rem solid #c26528;
  margin-bottom: 2rem;
  position: relative;
`;

const TiTleMessage = styled.h2`
  background: white;
  width: 100%;

  margin: 0;
`;
const TopOfCarousel = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-size: 1.4rem;
`;
const LineBrake = styled.div`
  height: 2.5rem;
`;
const PickAndQuiz = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin-bottom: 1rem;
  border: 2px solid green;
  @media (min-width: 992px) and (max-width: 1199px) {
  }

  @media (min-width: 768px) and (max-width: 991px) {
  }

  @media (min-width: 576px) and (max-width: 766px) {
    flex-direction: column;
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;
const CarouselTitle = styled.p`
  font-size: 2rem;
  background: ${(props) => props.theme.vocabularyBack};
  color: #955cff;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #955cff;
  }
  @media screen and (max-width: 576px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    margin: 0 0.3rem;
    font-size: 1.3rem;
  }
`;

const SeeAllLink = styled(StyledLink)`
  font-weight: bold;
  font-size: 1.6rem;

  color: ${(props) => props.theme.background};
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.text};
    text-decoration-thickness: 4px;
    text-underline-offset: 6px; /* Adjust the spacing */
  }
  @media screen and (max-width: 576px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    margin: 0 0.3rem;
    font-size: 1.3rem;
  }
`;
