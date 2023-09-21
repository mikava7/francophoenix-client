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
import { menuData } from "./menuData";
import {
  SubTopic,
  SubTopicLink,
  DropdownArrow,
  SidebarStyledUl,
} from "../sidebar/Sidebar";
import ArrowRight from "../../../public/icons/arrow-to-right.png";

const MobileMenu = ({ isDarkMode, t, toggleTheme }) => {
  const dispatch = useDispatch();
  // console.log("t", t);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const auth = useSelector((state) => state.auth.auth) || {};
  const id = auth.user?._id; // Use optional chaining to handle potential undefined values
  const username = auth.user?.username; // Use optional chaining to handle potential undefined values
  const [isOpen, setIsOpen] = useState(false);

  const [subCategoryOpen, setSubCategoryOpen] = useState({});

  // Function to toggle the visibility of subcategories for a category
  const toggleSubCategory = ({ e, categoryIndex }) => {
    e.stopPropagation();

    setSubCategoryOpen((prevState) => ({
      ...prevState,
      [categoryIndex]: !prevState[categoryIndex],
    }));
  };
  const toggleSubItems = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
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
          <>
            {menuData.map((menuItem, index) => (
              <Category key={index}>
                <div>
                  <img src={ArrowRight} alt="ArrowRight" />
                  <SubTopicLink to={menuItem.link}>
                    {t(menuItem.title)}
                  </SubTopicLink>
                  {menuItem.subItems && menuItem.subItems.length > 0 && (
                    <span
                      onClick={(e) =>
                        toggleSubCategory({ e, categoryIndex: index })
                      }
                    >
                      {subCategoryOpen[index] ? "▲" : "▼"}
                    </span>
                  )}
                </div>
                {subCategoryOpen[index] &&
                  menuItem.subItems &&
                  menuItem.subItems.length > 0 && (
                    <ul>
                      {menuItem.subItems.map((subItem, subIndex) => (
                        <SubTopic key={subIndex}>
                          <SubTopicLink to={subItem.link}>
                            {subItem.title}
                          </SubTopicLink>
                        </SubTopic>
                      ))}
                    </ul>
                  )}
              </Category>
            ))}
          </>
          <LastItem></LastItem>
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
  /* color:red; */
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;

  input {
    display: flex;
    width: 30px;
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
  margin: -3rem 0 0 -50px;
  padding: 50px;
  padding-top: 5rem;
  background-color: ${(props) => props.theme.primaryBackground};
  color: ${(props) => props.theme.primaryText};

  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
`;
const MenuLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.primaryText};
  opacity: 1;
  font-family: "work sans", sans serif;
  font-size: 1.5rem;
  font-weight: 400;
  transition: 200ms;
  /* border: 1px solid red; */
  font-style: italic;
  position: relative;
  /* padding: 0.5rem; */
`;
const LastItem = styled.li`
  margin-top: 3rem;
  height: 1rem;
  background-color: ${(props) => props.theme.highlight4};
`;

const UserMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${(props) => props.theme.secondaryBackground};
  /* outline: 2px solid red; */
  /* margin: 0 1rem; */
  margin-bottom: 3rem;
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
  margin-bottom: 1rem;
  padding: 0.4rem;
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
const Category = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.secondaryText};
  }
  ul {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 1.4rem;
    height: 1.4rem;
  }
  span {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;
const subCategory = styled(SubTopicLink)``;
