import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import useScrollHandler from "../../hooks/HOC";
import { Link } from "react-router-dom";
import User from "../../../public/icons/user-50.png";
import ThemeToggle from "../themeToggle/themeToggle";
import Localization from "../../localization/Localization";
import { useTranslation } from "react-i18next";
const Navbar = ({ toggleTheme, theme }) => {
  const { t, i18n } = useTranslation();
  const isScrolled = useScrollHandler();
  const isGeorgian = i18n.language === "ka";

  return (
    <NavbarContainer isScrolled={isScrolled}>
      <Logo>
        <StyledLogo to="/">Francophoenix</StyledLogo>
      </Logo>
      <StyledUl>
        <StyledList to="/books" isGeorgian={isGeorgian}>
          {t("Livres")}
        </StyledList>
        <StyledList to="/courses" isGeorgian={isGeorgian}>
          {t("Courses")}
        </StyledList>
        <StyledList to="/projects" isGeorgian={isGeorgian}>
          {t("Articles")}
        </StyledList>
        <StyledList to="/vocabulary-topics" isGeorgian={isGeorgian}>
          {t("Vocabulaire")}
        </StyledList>
        <StyledList to="/contact" isGeorgian={isGeorgian}>
          {t("Contacter")}
        </StyledList>
      </StyledUl>

      <Account>
        <LoginLink to="/login">{t("Connexion")}</LoginLink>
        <ToggleContainer>
          <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        </ToggleContainer>
        <LocalizationContainer>
          <Localization />
        </LocalizationContainer>
      </Account>
    </NavbarContainer>
  );
};

export default Navbar;
const NavbarContainer = styled.div`
  position: sticky;
  box-sizing: border-box;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #f1f1f1;
  gap: 1rem;
  width: 100%;
`;

const StyledUl = styled.ul`
  display: flex;
  gap: 0.6rem;
  padding: 0;
  max-width: 50%;
  flex: 1;

  @media (min-width: 768px) and (max-width: 991px) {
    & > :nth-child(3) {
      display: none;
    }
  }

  @media (min-width: 576px) and (max-width: 767px) {
    & > :nth-child(3) {
      display: none;
    }
    & > :nth-child(4) {
      display: none;
    }
  }
  @media (max-width: 576px) {
    & > :nth-child(3) {
      display: none;
    }
    & > :nth-child(4) {
      display: none;
    }
    /* & > :nth-child(5) {
      display: none;
      gap: 0;
    } */
  }
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
  margin: 0 auto;
  position: relative;
  transition: 0.8s all linear;
  padding: 0.5rem;
  gap: 0;
  color: #0055a4;
  font-size: ${(props) => (props.isGeorgian ? "1.45rem" : "1.8rem")};
  &:hover {
    color: white;
    outline: 2px solid red;
  }

  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    background-color: #0055a4;

    z-index: -1;
  }

  &:hover::before {
    animation: ${ani} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: ${(props) => (props.isGeorgian ? "1.2rem" : "1.5rem")};
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: ${(props) => (props.isGeorgian ? "1.1rem" : "1.5rem")};
  }

  @media (min-width: 576px) and (max-width: 767px) {
    font-size: ${(props) => (props.isGeorgian ? "1.1rem" : "1.3rem")};
  }

  @media (max-width: 576px) {
    font-size: ${(props) => (props.isGeorgian ? "1rem" : "1.2rem")};
  }
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
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  max-width: 20%;
  margin-left: 1rem;

  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 1.3rem;
    background-size: 120%;
  }

  @media (max-width: 576px) {
    font-size: 1.3rem;
    background-size: 100%;
  }
`;

const StyledLogo = styled(Link)`
  font-size: 2.4rem;
  background-image: linear-gradient(-90deg, #0055a4, #f5e2e2, #ef4135);
  background-position: 0 10%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: 150%;
  max-width: 100%;

  &:hover {
    animation: ${changeColor} 5s linear infinite;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 2rem;
    background-size: 130%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 1.6rem;
    background-size: 120%;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 1.5rem;

    background-size: 120%;
    margin-left: 1rem;
  }

  @media (max-width: 576px) {
    font-size: 1.6rem;

    background-size: 100%;
    margin-left: 2rem;
  }
`;

const Account = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #0055a4;
  width: 30%;
  margin: 0 auto;
  @media (min-width: 576px) and (max-width: 767px) {
    display: flex;
  }

  @media (max-width: 576px) {
    display: flex;
  }
`;
const LoginLink = styled(Link)`
  text-decoration: none;
  align-self: center;
  font-weight: bold;
  color: #a4009c;
  max-width: 100%;
  font-size: 1.3rem;
`;

const ToggleContainer = styled.div`
  flex: 1;
`;
const LocalizationContainer = styled.div`
  max-width: 100%;
  margin-right: 1rem;
`;
