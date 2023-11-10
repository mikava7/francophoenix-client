import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";

  return (
    <FooterContainer>
      <StyledLink to={"/"}>{t("Accueil")}</StyledLink>
      <StyledLink to={"/contact"}>{t("Contact")}</StyledLink>
      <StyledLink to="/courses">{t("Courses")}</StyledLink>
      <StyledLink to="/reading-zone/french-easy-reading">
        {t("Livres")}
      </StyledLink>
      <StyledLink to="/grammar/basic-grammar-lessons">
        {t("Grammaire")}
      </StyledLink>
      <StyledLink to="/dictionary">{t("Dictionnaire")}</StyledLink>
      <StyledLink to="/vocabulary/vocabulary-topics">
        {t("Vocabulaire")}
      </StyledLink>
      <StyledLink to="/verbs">{t("Verbes")}</StyledLink>
      <StyledLink to="/dialogue-topics">{t("Dialogues")}</StyledLink>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  gap: 20px;
  padding: 40px 0;
  border-top: 3px solid #000;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  font-size: 18px;
  transition: background-color 0.4s, color 0.4s;
  color: ${(props) => props.theme.primaryText};

  &:hover {
    background-color: ${(props) => props.theme.highlight4};
    color: ${(props) => props.theme.primaryText};
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;
