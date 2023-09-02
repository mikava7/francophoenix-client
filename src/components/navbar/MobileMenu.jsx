import React, { useState } from "react";
import styled from "styled-components";
import darkHamburgerIcon from "../../../public/icons/dark-hamburger-menu-64.png";

import lightHamburgerIcon from "../../../public/icons/light-hamburger-menu-48.png";
import { StyledLink } from "../../Styles/globalStyles";
import { Link } from "react-router-dom";
const MobileMenu = ({ isDarkMode, t }) => {
  // State to track whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <MenuContainer class="content">
      <MenuToggle id="menuToggle">
        <input
          type="checkbox"
          checked={isMenuOpen}
          onChange={() => setIsMenuOpen(!isMenuOpen)}
        />

        <span style={{ background: isDarkMode ? "#ffffff" : "#000000" }}></span>
        <span style={{ background: isDarkMode ? "#ffffff" : "#000000" }}></span>
        <span style={{ background: isDarkMode ? "#ffffff" : "#000000" }}></span>
        <MenuUl onClick={closeMenu}>
          <li>
            <MenuLink to="/grammar">{t("Grammaire")}</MenuLink>
          </li>
          <li>
            <MenuLink to="/vocabulary" onClick={closeMenu}>
              {t("Vocabulaire")}
            </MenuLink>
          </li>
          <li>
            <MenuLink
              to="/reading-zone/french-easy-reading"
              onClick={closeMenu}
            >
              {t("Livres")}
            </MenuLink>
          </li>
          <li>
            <MenuLink to="/dictionary" onClick={closeMenu}>
              {t("Dictionnaire")}
            </MenuLink>
          </li>
        </MenuUl>
      </MenuToggle>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default MobileMenu;

const MenuToggle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 5%;
  left: 8%;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
  input {
    display: flex;
    width: 40px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }
  span {
    display: flex;
    width: 29px;
    height: 3px;
    margin-top: 4px;
    margin-left: 0.2rem;
    position: relative;
    background: ${(props) =>
      props.isDarkMode
        ? "#ff0000"
        : "yellow"}; // Change these colors to match your theme
    border-radius: 3px;
    z-index: 1;
    transform-origin: 5px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    &:first-child {
      transform-origin: 0% 0%;
    }
    &:nth-last-child(2) {
      transform-origin: 0% 100%;
    }
  }
  input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-3px, -1px);
    background: #36383f;
  }
  input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }
  input:checked ~ ul {
    transform: none;
  }
`;
const MenuUl = styled.ul`
  padding: 0;
  list-style-type: none;
  position: absolute;
  width: 100vw;
  height: 100vh;
  box-shadow: 0 0 10px #85888c;
  margin: -50px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  background-color: ${(props) => props.theme.primaryBackground};
  color: ${(props) => props.theme.primaryText};

  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  li {
    padding: 10px 0;
    transition-delay: 2s;
    padding-left: 3rem;
  }
`;
const MenuLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.primaryText};
  opacity: 1;
  font-family: "work sans", sans serif;
  font-size: 1.5em;
  font-weight: 400;
  transition: 200ms;
  font-style: italic;
  position: relative;
  padding: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0%;
    padding-bottom: 2.5rem;
    height: 6px;
    background-color: ${(props) => props.theme.primaryText};
    color: ${(props) => props.theme.primaryBackground};

    transition: width 0.3s ease;
  }

  &:hover::after {
    opacity: 0.5;

    width: calc(100% + 2px); /* Expand width to 100% on hover */
  }
`;
