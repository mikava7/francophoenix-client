import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import useScrollHandler from "../../hooks/HOC";
import { Link } from "react-router-dom";
import User from "../../../public/icons/user-50.png";
import ThemeToggle from "../themeToggle/themeToggle";
import Localization from "../../localization/Localization";
import { useTranslation } from "react-i18next";
import { ani, changeColor } from "../../Styles/frames";
import MobileMenu from "./MobileMenu";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  const isScrolled = useScrollHandler();

  return (
    <NavbarContainer>
      <MobileMenu isDarkMode={isDarkMode} t={t} />
      <Logo>
        <StyledLogo to="/">Francophoenix</StyledLogo>
      </Logo>
      <StyledUl>
        <StyledList to="/grammar" isGeorgian={isGeorgian}>
          {t("Grammaire")}
        </StyledList>
        <StyledList to="/vocabulary" isGeorgian={isGeorgian}>
          {t("Vocabulaire")}
        </StyledList>
        <StyledList
          to="/reading-zone/french-easy-reading"
          isGeorgian={isGeorgian}
        >
          {t("Livres")}
        </StyledList>

        <StyledList to="/dictionary" isGeorgian={isGeorgian}>
          {t("Dictionnaire")}
        </StyledList>
      </StyledUl>

      <LocalizationContainer>
        <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Localization />
      </LocalizationContainer>
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
  justify-content: space-between;
  background-color: ${(props) => props.theme.secondaryBackground};
  border-bottom: 3px solid ${(props) => props.theme.highligt1};
  width: 100%;
`;

const StyledUl = styled.ul`
  display: flex;
  gap: 0.6rem;
  padding: 0;
  max-width: 50%;
  flex: 1;

  @media (min-width: 768px) and (max-width: 991px) {
    & > :nth-child(4) {
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
    display: none;
  }
`;

const StyledList = styled(Link)`
  text-decoration: none;
  margin: 0 auto;
  position: relative;
  transition: 0.8s all linear;
  padding: 0.5rem;
  gap: 0;
  color: ${(props) => props.theme.primaryText};
  font-size: ${(props) => (props.isGeorgian ? "1.45rem" : "1.8rem")};
  &:hover {
    color: ${(props) => props.theme.primaryBackground};

    outline: 2px solid ${(props) => props.theme.primaryText};
  }

  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    background-color: ${(props) => props.theme.primaryText};

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

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  margin-left: 1rem;

  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 1.3rem;
    background-size: 120%;
  }

  @media (max-width: 576px) {
    font-size: 1.3rem;
    background-size: 100%;
    width: 200px;
    margin-left: 0.21rem;
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
  font-weight: bold;
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
    font-size: 1.3rem;

    background-size: 100%;
  }
`;

const ToggleContainer = styled.div`
  /* flex: 1; */
  border: 2px solid red;
`;
const LocalizationContainer = styled.div`
  max-width: 100%;
  margin-right: 0.5rem;
  padding: 0.2rem 0.5rem;
  /* outline: 1px solid ${(props) => props.theme.tertiaryText}; */
  display: flex;
`;
