import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import useScrollHandler from "../../hooks/HOC";
import { Link } from "react-router-dom";
import User from "../../../public/icons/user-50.png";
import ThemeToggle from "../themeToggle/themeToggle";
import Localization from "../../localization/Localization";

import { useTranslation } from "react-i18next";
const Navbar = ({ toggleTheme, theme }) => {
  const { t } = useTranslation();
  const isScrolled = useScrollHandler();

  return (
    <Container isScrolled={isScrolled}>
      <Logo>
        {/* Use the Link component here and apply styles to it */}
        <StyledLogo to="/">Francophoenix</StyledLogo>
      </Logo>
      <StyledUl>
        <StyledList to="/books">{t("Livres")}</StyledList>
        <StyledList to="/courses">{t("Courses")}</StyledList>
        <StyledList to="/projects">{t("Articles")}</StyledList>
        <StyledList to="/contact">{t("Contacter")}</StyledList>
        <StyledList to="/contact">{t("Film&Musique")}</StyledList>
      </StyledUl>

      <Account>
        <Link to="/login">{t("Connexion")}</Link>

        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        <Localization />
      </Account>
    </Container>
  );
};

export default Navbar;

const Container = styled.header`
  position: sticky;
  box-sizing: border-box;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-bottom: ${({ isScrolled }) =>
    isScrolled ? "18px solid red" : "none"};

  p {
    font-size: 2rem;
    text-align: center;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  gap: 1.5rem;
  font-size: 1.3rem;
  padding: 0;
`;
export const ani = keyframes`
  0% {
    width: 0%;
    height: 1px;
    left: 50%;
  }

  50% {
    width: 100%;
    height: 1px;
    left: 0;
  }

  100% {
    width: 100%;
    height: 100%;
    left: 0;
  }
`;
const StyledList = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  position: relative;
  transition: 0.8s all linear;
  padding: 0.5rem;
  color: black;

  &:hover {
    color: white;
  }

  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    background-color: black;

    z-index: -1;
  }

  &:hover::before {
    animation: ${ani} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  }
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const changeColor = keyframes`
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
`;

const StyledLogo = styled(Link)`
  font-size: 4rem;
  background-image: linear-gradient(-90deg, #0055a4, #ffffff, #ef4135);
  background-position: 0 10%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: 150%;

  &:hover {
    animation: ${changeColor} 5s linear infinite;
  }
`;
const Account = styled.div`
  display: flex;
  align-items: space-around;
  gap: 1rem;
  justify-content: center;
  font-size: 2rem;
  color: black;
  p {
    align-self: center;
  }
`;
