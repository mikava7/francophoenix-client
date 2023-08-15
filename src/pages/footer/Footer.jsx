import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  return (
    <FooterContainer>
      <Links>
        <StyledLink to={"/"}>Home</StyledLink>
        <StyledLink to={"/"}>About</StyledLink>
        <StyledLink to={"/"}>Contact</StyledLink>
        <StyledLink to={"/"}>Services</StyledLink>
      </Links>

      <Links>
        <StyledLink to="/books">{t("Livres")}</StyledLink>

        <StyledLink to="/grammer/basic-grammer">{t("Grammer")}</StyledLink>
        <StyledLink to="/courses">{t("Courses")}</StyledLink>
        <StyledLink to="/dictionary">{t("Dictionnaire")}</StyledLink>
      </Links>
      <Links>
        <StyledLink to="/vocabulary-topics">{t("Vocabulaire")}</StyledLink>
        <StyledLink to="/vocabulary-topics">{t("Phrases")}</StyledLink>

        <StyledLink to="/dialogue-topics">{t("Dialogues")}</StyledLink>
        <StyledLink to="/dialogue-topics">{t("Nouvelles")}</StyledLink>
      </Links>
    </FooterContainer>
  );
};

export default Footer;
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
const FooterContainer = styled.div`
  height: 20rem;
  outline: 1px solid grey;
  border-top: 3px solid black;
  border-right: 3px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  background-color: grey;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    gap: 1rem;
  }
  @media screen and (max-width: 576px) {
    gap: 0.5rem;
  }
`;
const Links = styled.div`
  display: flex;

  flex-direction: column;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 auto;
  position: relative;
  padding: 0.5rem;
  color: black;
  background-color: #9ccfff;
  outline: 1px solid grey;
  border-bottom: 3px solid black;
  border-right: 3px solid black;
  width: 10rem;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  transition: 0.4s all linear;
  &:hover {
    color: white;
    background-color: #258ff3;
  }

  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    background-color: #0055a4;
    color: black;

    z-index: -1;
  }
  
  
  &:hover::before {
    animation: ${ani} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  }
 
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 8rem;
    font-size: 1.3rem;
    padding: 0.3rem;
  }
  @media screen and (max-width: 576px) {
    width: 6rem;
    font-size: 1.1rem;
    padding: 0.2rem;
  }
`;
