import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import useScrollHandler from "../../hooks/HOC";
import { Link } from "react-router-dom";
import UserIcon from "../../assets/icons/user-50.png";
import ThemeToggle from "../themeToggle/themeToggle";
import Localization from "../../localization/Localization";
import { useTranslation } from "react-i18next";
import { ani, changeColor } from "../../Styles/frames";
import MobileMenu from "./MobileMenu";
import User from "../../pages/User/User";
const Navbar = ({ toggleTheme, isDarkMode }) => {
  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  const isScrolled = useScrollHandler();

  return (
    <NavbarContainer isVisible={isScrolled}>
      <MobileMenu isDarkMode={isDarkMode} toggleTheme={toggleTheme} t={t} />
      <Logo>
        <StyledLogo to="/">Home</StyledLogo>
      </Logo>
      <StyledUl>
        <StyledList to="/grammar/basic-grammar-lessons" isGeorgian={isGeorgian}>
          {t("Grammaire")}
        </StyledList>
        <StyledList to="/vocabulary/vocabulary-topics" isGeorgian={isGeorgian}>
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
        <Localization />
        <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <User />
      </LocalizationContainer>
    </NavbarContainer>
  );
};

export default Navbar;
const NavbarContainer = styled.div`
  box-sizing: border-box;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  width: 100%;
  min-height: 4rem;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) =>
    props.isVisible ? props.theme.highlight2 : "transparent"};
  color: white;
  transition: background-color 0.3s ease-in-out;
  border-bottom: 3px solid ${(props) => props.theme.primaryText};
  padding-left: 0.4rem;
  padding-right: 0.4rem;
`;

const StyledUl = styled.ul`
  display: flex;
  overflow: hidden;
  /* gap: 0.6rem; */
  padding: 0;
  max-width: 50%;
  flex: 1;

  @media (min-width: 992px) and (max-width: 1025) {
    & > :nth-child(4) {
      display: none;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    & > :nth-child(4) {
      display: none;
    }
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
    & > :nth-child(1) {
      display: none;
    }
    & > :nth-child(2) {
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

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  margin-left: 1rem;

  @media (min-width: 576px) and (max-width: 767px) {
  }

  @media (max-width: 767px) {
  }
`;

export const StyledLogo = styled(Link)`
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
    font-size: 1.35rem;
    margin: 0;
    padding: 0;
    background-size: 120%;

    font-weight: 400;
  }
  @media (max-width: 320px) {
    margin-right: 3rem;
  }
`;

const ToggleContainer = styled.div`
  /* flex: 1; */
  /* border: 2px solid red; */
`;
export const LocalizationContainer = styled.div`
  max-width: 100%;
  margin-right: 0.5rem;
  padding: 0.2rem 0.5rem;
  display: flex;
  gap: 1rem;
  @media (min-width: 394px) and (max-width: 415px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid red; */
    gap: 1rem;
  }

  @media (max-width: 393px) {
    gap: 0.2rem;

    & > :nth-child() {
      display: none;
    }
  }
  @media (max-width: 361px) {
    gap: 0.2rem;

    & > :nth-child() {
      display: none;
    }
    & > :nth-child(1) {
      display: none;
    }
    & > :nth-child(4) 1
      display: none;
    }
  }
`;
