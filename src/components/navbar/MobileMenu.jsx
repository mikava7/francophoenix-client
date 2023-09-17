import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/slices/auth/authSlice";
import darkHamburgerIcon from "../../../public/icons/dark-hamburger-menu-64.png";
import User from "../../pages/User/User";
import lightHamburgerIcon from "../../../public/icons/light-hamburger-menu-48.png";
import { StyledLink, Button } from "../../Styles/globalStyles";
import { Link } from "react-router-dom";
import { Logo, StyledLogo, LocalizationContainer } from "./Navbar";
import { FormContainerApendix, SignLink } from "../../pages/User/Register";
import { UserAvatar } from "../../pages/User/User";
import userIcon from "../../icons/user-50.png";
import Localization from "../../localization/Localization";
import ThemeToggle from "../themeToggle/themeToggle";
const MobileMenu = ({ isDarkMode, t, toggleTheme }) => {
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const auth = useSelector((state) => state.auth.auth) || {};
  const id = auth.user?._id; // Use optional chaining to handle potential undefined values
  const username = auth.user?.username; // Use optional chaining to handle potential undefined values

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const handleLogout = (e) => {
    e.stopPropagation();

    // Dispatch the logout action
    dispatch(logoutUser(id));
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
          <UserMobile>
            <StyledLogo to="/">Francophoenix</StyledLogo>
            <LocalAndThemeBox>
              <Localization />
              <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            </LocalAndThemeBox>

            <UserMobileMenu>
              <UserAvatar>
                {isAuthenticated ? (
                  <UserBox>
                    <UserImgAndName>
                      <img src={userIcon} alt="User Icon" />

                      {username}
                    </UserImgAndName>
                    <button onClick={handleLogout}>
                      {t("Se déconnecter")}
                    </button>
                  </UserBox>
                ) : (
                  t("Pas connecté")
                )}
              </UserAvatar>
            </UserMobileMenu>
            {!isAuthenticated && (
              <>
                <MobileFormContainerApendix>
                  <p>{t("Avez-vous déjà un compte?")}</p>
                  <MobileSignLink to="/login">{t("Connexion")}</MobileSignLink>
                </MobileFormContainerApendix>
                <MobileFormContainerApendix>
                  {" "}
                  <p>{t("Pas de compte?")}</p>
                  <MobileSignLink to="/register">
                    {t("Inscrivez-vous")}{" "}
                  </MobileSignLink>
                </MobileFormContainerApendix>
              </>
            )}
          </UserMobile>

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
          <li>
            <MenuLink to="/vocabulary/flashcards" onClick={closeMenu}>
              {t("Entraîneur de cartes mémoire")}
            </MenuLink>
          </li>
          <li></li>
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
    margin-left: 0.5rem;
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
  overflow-x: hidden;

  padding: 0;
  list-style-type: none;
  position: absolute;
  width: 100vw;
  height: 100vh;
  box-shadow: 0 0 10px #85888c;
  margin: -50px 0 0 -50px;
  padding: 50px;
  padding-top: 4rem;
  background-color: ${(props) => props.theme.primaryBackground};
  color: ${(props) => props.theme.primaryText};

  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  li {
    padding: 0.2rem 0;
    transition-delay: 2s;
    padding-left: 2rem;
    margin: 0 1rem;
    margin-top: 1rem;
    max-width: 380px;
    outline: 2px solid ${(props) => props.theme.highlight4};
    background-color: ${(props) => props.theme.secondaryBackground};
    border-radius: 8px;
    &:last-child {
      margin-bottom: 3rem;
      outline: 2px solid ${(props) => props.theme.highlight3};
    }
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
  /* padding: 0.5rem; */
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0%;
    padding-bottom: 2.5rem;
    height: 6px;
    background-color: ${(props) => props.theme.highlight4};
    color: ${(props) => props.theme.primaryBackground};

    transition: width 0.3s ease;
  }

  &:hover::after {
    opacity: 0.5;

    width: calc(100% + 2px); /* Expand width to 100% on hover */
  }
`;

const UserMobile = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${(props) => props.theme.secondaryBackground};
  /* outline: 2px solid red; */
  margin: 0 1rem;
`;
const UserMobileMenu = styled.div`
  outline: 6px solid ${(props) => props.theme.secondaryBackground};
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* outline: 2px solid blue; */
  /* margin: 0 auto; */
  width: 17rem;
  height: 3rem;
  padding: 0.4rem;
  margin-bottom: 1rem;
  background: ${(props) => props.theme.tertiaryBackground};
  @media (max-width: 359px) {
    width: 12rem;
  }
`;
const UserBox = styled.div`
  width: 100%;
  outline: 2px solid green;
  background-color: ${(props) => props.theme.highlight4};

  /* padding: 0.4rem 0.8rem; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* outline: 1px solid red; */
  img {
    max-width: 2rem;
    padding: 0.4rem;
    border-radius: 50%;
  }
  button {
    width: 8rem;
    padding: 0.4rem 0.8rem;
    border-radius: 0.4rem;
    margin-left: 5rem;

    background-color: ${(props) => props.theme.highlight4};

    cursor: pointer;
  }
`;
const LocalAndThemeBox = styled.div`
  width: 18rem;
  display: flex;
  /* outline: 1px solid ${(props) => props.theme.tertiaryText}; */
  margin: 1rem 0;
`;
const MobileFormContainerApendix = styled(FormContainerApendix)`
  display: flex;
  flex-direction: column;
`;
const MobileSignLink = styled(SignLink)`
  margin-right: 2rem;
  margin-left: auto;

  /* max-width: 100%; */
  /* border: 2px solid red; */
`;
const UserImgAndName = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  /* overflow-x: hidden; */
`;
