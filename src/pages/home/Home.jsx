import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooksPreview } from "../../redux/slices/books/booksSlice";
import { fetchVocabularyTopics } from "../../redux/slices/vocabularyTopics/vocabularyTopicSlice";
import Carousel from "../../components/carousel/Carousel";
import WellcomeCarousel from "../../components/wellcome/WellcomeCarousel";
import { wellcomeData } from "./wellcomeData";
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
import useScrollToTopOnRouteChange from "../../hooks/useScrollToTopOnRouteChange";
import LanguagePreference from "../../localization/LanguagePreference";

const Home = () => {
  const [showLanguagePopup, setShowLanguagePopup] = useState(true);
  const [languageSelected, setLanguageSelected] = useState(false);
  const [isLoadingLanguageSelection, setIsLoadingLanguageSelection] =
    useState(true);

  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const hasLanguageSelected = localStorage.getItem("nativeLanguageSelected");

    if (hasLanguageSelected) {
      // Language has been selected before
      setShowLanguagePopup(false);
      setLanguageSelected(true);
    } else if (location.pathname === "/") {
      // Language has not been selected, and this is the home page
      setShowLanguagePopup(true);
    }

    setIsLoadingLanguageSelection(false);
  }, [location]);

  const handleLanguagePopupClose = (language) => {
    setShowLanguagePopup(false);
    // console.log("language", language);
    localStorage.setItem("nativeLanguageSelected", language);
    setLanguageSelected(true);
    // Change the language in i18n immediately
    i18n.changeLanguage(language);
  };

  const dispatch = useDispatch();
  useScrollToTopOnRouteChange();
  const books = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.books.isLoading);

  const vocabularyTopic =
    useSelector((state) => state.vocabularyTopics.vocabularyTopics) || [];
  const isLoadingvocabularyTopic = useSelector(
    (state) => state.vocabularyTopics.isLoading
  );

  useEffect(() => {
    dispatch(fetchBooksPreview());
  }, []);

  useEffect(() => {
    dispatch(fetchVocabularyTopics());
  }, []);

  if (isLoadingLanguageSelection) {
    return <Loading />;
  }

  return (
    <HomeContainer>
      {showLanguagePopup && (
        <BackgroundOverlay showoverlay={showLanguagePopup}>
          <LanguagePreferenceBox>
            {/* Pass handleLanguagePopupClose function */}
            <LanguagePreference
              handleLanguagePopupClose={handleLanguagePopupClose}
            />
          </LanguagePreferenceBox>
        </BackgroundOverlay>
      )}
      <FindTranslationForFrenchWord />
      <ExploreOptions />

      <Section>
        <TopOfCarousel>
          <CarouselTitle>{t("Tous les livres")} </CarouselTitle>
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
  position: relative;

  overflow-x: hidden;
  /* outline:1px solid green; */
  @media screen and (max-width: 576px) {
    margin: 0 0.2rem;
  }
  @media screen and (min-width: 768px) {
    margin: 0 0.3rem;
  }
  @media screen and (min-width: 992px) {
    margin: 0 0.6rem;
  }
`;

const LanguagePreferenceBox = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999; /* Ensure it's on top */
`;

const WellcomeSection = styled.div`
  max-height: 100%;
`;
const Section = styled.div`
  /* background-image: url("src/assets/icons/tex.avif"); */

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

const SeeAllLink = styled(Link)`
  font-weight: bold;
  font-size: 2rem;
  text-decoration: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  color: white;
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
export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0%;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
  z-index: ${({ showoverlay }) => {
    // console.log("showOverlay in BackgroundOverlay:", showoverlay); // Add this console log
    return showoverlay ? 99 : -1;
  }};
`;
