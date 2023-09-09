import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  optionsDataFr,
  optionsDataEng,
  optionsDataGeo,
} from "./ExploreOptionsData";
const ExploreOptions = () => {
  const { t, i18n } = useTranslation();

  const dataToRender =
    i18n.language === "fr"
      ? optionsDataFr
      : i18n.language === "ka"
      ? optionsDataGeo
      : optionsDataEng;

  // console.log("dataToRender", dataToRender);

  return (
    <ExploreOptionsContainer>
      <Header>Parlez-vous français?</Header>
      <CardContainer>
        {dataToRender.map((data) => {
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
  /* outline: 1px solid red; */
  margin: 0 1rem;
  margin: 0;
  padding: 0;
  h1 {
    padding: 0;
    outline: 1px solid red;

    color: ${(props) => props.theme.primaryText};
  }
`;

const CardContainer = styled.div`
  /* outline: 1px solid blue; */

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

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  margin-bottom: 2rem;
  background-color: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.secondaryText};
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
  padding-left: 1rem;
  color: ${(props) => props.theme.secondaryText};

  li {
    &:before {
      content: ${(props) =>
        props.theme.background === "#000000" ? '"🔹"' : '"🔸"'};
    }
  }
`;
const CardTilte = styled.h3`
  color: ${(props) => props.theme.primaryText};
  text-align: center;
  width: 100%;
`;
const Header = styled.header`
  text-align: center;
  font-size: 2rem;
  padding: 1rem;
  font-weight: bold;
`;
