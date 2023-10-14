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
        <StyledLink to={"/"}>{t("Accueil")}</StyledLink>
        <StyledLink to={"/"}>{t("Contact")}</StyledLink>
        <StyledLink to="/courses">{t("Courses")}</StyledLink>
      </Links>

      <Links>
        <StyledLink to="/reading-zone/french-easy-reading">
          {t("Livres")}
        </StyledLink>
        <StyledLink to="/grammar/basic-grammar-lessons">
          {t("Grammaire")}
        </StyledLink>
        <StyledLink to="/dictionary">{t("Dictionnaire")}</StyledLink>
      </Links>

      <Links>
        <StyledLink to="/vocabulary/vocabulary-topics">
          {t("Vocabulaire")}
        </StyledLink>
        <StyledLink to="/verbs">{t("Verbes")}</StyledLink>
        <StyledLink to="/dialogue-topics">{t("Dialogues")}</StyledLink>
      </Links>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 40px 0;
  border-top: 3px solid #000;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  color: #000;
  font-size: 18px;
  transition: background-color 0.4s, color 0.4s;

  &:hover {
    background-color: #258ff3;
    color: #fff;
  }
`;
