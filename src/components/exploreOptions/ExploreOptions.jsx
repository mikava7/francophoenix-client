import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const optionsData = [
  {
    title: " Découverte de la littérature française.",
    description:
      "Plongez dans les trésors de la littérature française classique et contemporaine, en explorant différents niveaux de difficulté, dès le niveau A1. Découvrez :",
    listItems: [
      " 50 classiques littéraires",
      " 35 contemporains",
      " 20 adaptations",
      " 100 articles",
    ],
    buttonLabel: "Lire",
    buttonColor: "#00384A",
    link: "/books",
  },
  {
    title: " Jouer Avec Le Français",
    description:
      "Améliorez vos compétences linguistiques en jouant à des jeux amusants et éducatifs qui vous aideront à maîtriser le français tout en vous amusant. Profitez de :",
    listItems: [
      " Quiz interactifs",
      " Jeux de mots",
      " Exercices de dictée",
      " Activités ludiques",
    ],
    buttonLabel: "Jouer",
    buttonColor: "#2B4700",
    link: "/games",
  },
  {
    title: " Approndre Le Français",
    description:
      "Débutez votre parcours d'apprentissage du français, explorez les bases de la grammaire, du vocabulaire et de la communication, et avancez vers la maîtrise. Venez découvrir :",
    listItems: [
      " Les fondamentaux de la grammaire",
      " Un vaste vocabulaire",
      " La communication quotidienne",
      " Le perfectionnement",
    ],
    buttonLabel: "Apprendre",
    buttonColor: "#67330A",
    link: "",
  },
];

const ExploreOptions = () => {
  const { t, i18n } = useTranslation();

  return (
    <ExploreOptionsContainer>
      <h1>Parlez-vous français?</h1>
      <CardContainer>
        {optionsData.map((data) => {
          const {
            title,
            buttonLabel,
            description,
            listItems,
            buttonColor,
            link,
          } = data;

          return (
            <CardBox key={title}>
              <CardTilte>{title.toUpperCase()}</CardTilte>
              <p>{description}</p>
              <List>
                {listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </List>
              <StyledLink to={link}>
                <ExploreButton style={{ backgroundColor: buttonColor }}>
                  {buttonLabel}
                </ExploreButton>
              </StyledLink>
            </CardBox>
          );
        })}
      </CardContainer>
    </ExploreOptionsContainer>
  );
};

export default ExploreOptions;

const ExploreOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-family: "Roboto Sans Serif", Verdana, sans-serif;
  line-height: 1.4;
  -webkit-text-size-adjust: 100%;

  margin: 0 1rem;
  margin: 0;
  padding: 0;
  h1 {
    color: ${(props) => props.theme.background};
  }
`;

const CardContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.background};
  gap: 1rem;

  @media (min-width: 576px) and (max-width: 767px) {
    flex-direction: column;
    font-size: 1.3rem;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    gap: 0;
    margin: 0 auto;
    font-size: 1.2rem;
  }
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  margin-bottom: 2rem;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.background};
  padding: 0 1rem;
  width: 335px;
  p {
    text-indent: 20px;
    text-align: center;
  }
  h3 {
    text-align: center;
    &:before {
      content: ${(props) =>
        props.theme.background === "#000000" ? '"🔷"' : '"🔶"'};
    }
    &:after {
      content: ${(props) =>
        props.theme.background === "#000000" ? '" 🔷"' : '" 🔶"'};
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 380px;
    font-size: 1.3rem;
  }

  @media (min-width: 390px) and (max-width: 576px) {
    width: 360px;

    font-size: 1.2rem;
  }
  @media (max-width: 393px) {
    width: 325px;

    font-size: 1.2rem;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  margin-top: auto;
`;
const ExploreButton = styled.button`
  /* margin-left: auto; */
  padding: 0.5rem 1rem;
  color: white;
  font-weight: bold;
  width: 100%;
  margin: 1rem 0;
  font-size: 1.6rem;
  cursor: pointer;
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 1.4rem;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 1.3rem;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;
const List = styled.ul`
  list-style: none;
  padding-left: 1.5em;

  li {
    &:before {
      content: ${(props) =>
        props.theme.background === "#000000" ? '"🔹"' : '"🔸"'};
    }
  }
`;
const CardTilte = styled.h3``;
