import styled, { createGlobalStyle, css } from "styled-components";
import { slideRight, slideLeft, ani } from "./frames.js";
import theme from "./theme";

import { Link } from "react-router-dom";

// Rest of the code...
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.lightText};
    color: ${(props) => props.theme.colors.lightBack};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    overflow-x: hidden;
    width: 100vw;
    
  }
  @media (max-width: 920px) {
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
  }
  /* slick-custom-styles.css */
.slick-prev,
.slick-next {

  color: black;
  background-color: black;
   width: 40px;
  height: 40px; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1; 
  &:hover{
    background-color: ${(props) => props.theme.colors.lightText};

  }
}

.slick-next {
  right: -30px; 
}
.slick-prev {
  left: -30px; 
}
 h1{
  font-size:2rem;

 }
 h2{
  font-size:1.8rem;
 }
 h3{
  font-size:1.4rem;
 }
 h1,h2,h3{
  text-align:center;

 }
  p {
    margin: 0;
    padding: 0;

  }


    @media screen and (min-width: 576px) {
    width: 564px;
    font-size: 1.1rem;
  }
  @media screen and (min-width: 768px) {
    width: 756px;
    font-size: 1.2rem;
  }
  @media screen and (min-width: 992px) {
    width: 980px;
    font-size: 1.3rem;
  }
  @media screen and (min-width: 1200px) {
    width: 1188px;
    font-size: 1.4rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  position: relative;
  transition: 0.8s all linear;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.text};

  &:hover {
    color: ${(props) => props.theme.colors.text2};
  }

  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    background-color: ${({ theme }) => theme.colors.text};

    z-index: -1;
  }

  &:hover::before {
    animation: ${ani} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  }
`;

export const StyledButton = styled.button`
  padding: 1rem;
  text-align: center;
  width: 8rem;
  background-color: ${(props) => props.theme.colors.text2};
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.text2};
  }
`;
export const FormContainer = styled.div`
  margin: 0 auto;
  width: 18rem;
  padding: 0.2rem 1rem;
  background-color: ${(props) => props.theme.colors.formBackground};
  color: ${(props) => props.theme.colors.formText};
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.colors.formBoxShadow};
  text-align: center;

  h2 {
    font-size: 33px;
    font-weight: 600;
    margin-bottom: 35px;
    color: #595959;
    justify-self: center;
    color: ${(props) => props.theme.colors.text};
  }
`;
export const FormContainerApendix = styled.div`
  margin: 10px 0;
  color: ${(props) => props.theme.colors.primeColor};
  font-size: 1rem;
`;
export const SignLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};

  text-decoration: none;
  padding-left: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;
export const InputField = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  position: relative;
  &:nth-child(2) {
    margin-top: 20px;
  }
  &:nth-child(3) {
    margin-top: 20px;
  }
  input {
    height: 100%;
    width: 100%;
    padding-left: 3rem;
    outline: none;
    border: none;
    font-size: 18px;
    border-radius: 25px;
    background-color: ${(props) => props.theme.colors.inputBackground};
    color: ${(props) => props.theme.colors.text2};

    box-shadow: ${(props) => props.theme.colors.inputBoxShadow};

    &:focus {
      box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #ffffff73;
    }
    &::placeholder {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 4rem;
      pointer-events: none;
      font-size: 1rem;
      color: ${(props) => props.theme.colors.text2};
    }
  }

  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #595959;
    width: 1.3rem;
    padding-left: 1.2rem;
    line-height: 30px;
  }
`;
export const FormButton = styled.button`
  margin: 15px 0;
  width: 100%;
  height: 50px;
  font-size: 18px;
  line-height: 50px;
  font-weight: 600;
  background: #dde1e7;
  border-radius: 25px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.primeColor};
  color: ${(props) => props.theme.colors.primeBackground};
  box-shadow: 2px 2px 5px #babecc, -5px -5px 10px #ffffff73;
  &:hover {
    background-color: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.text2};
  }
  &:focus {
    color: #3498db;
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73;
  }
`;
export const ThemeToggleContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;
export const ToggleImageContainer = styled.div`
  display: flex;
  width: 4rem;
  background-color: ${(props) =>
    props.theme === "light" ? "#E0E0E0" : "#e4b315"};

  border-radius: 100px;
  cursor: pointer;
  &:not(input) {
    user-select: none;
  }
  img {
    width: 2rem;
    animation: ${(props) =>
      props.theme === "light"
        ? css`
            ${slideRight} 0.8s forwards
          `
        : css`
            ${slideLeft} 0.8s forwards
          `};
  }
`;
export const NavBarContainer = styled.nav`
  margin-bottom: 1rem;
  border-bottom: 1px solid red;
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
`;
//chapter

export const ChapterListContainer = styled.ul`
  list-style-type: none;
  background-color: grey;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  height: calc(100vh - 1rem);
  min-width: 15rem;
  width: 20%;
  background-color: ${(props) => props.theme.colors.primeColor};
  &:not(input) {
    user-select: none;
  }
`;
export const ChapterContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  width: 100%;
  height: calc(100vh - 16px);
  background-color: ${(props) => props.theme.colors.primeBackground};
`;

export const ChapterItem = styled.li`
  cursor: pointer;

  margin: 1rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.primeBackground};
  color: ${(props) => props.theme.colors.text};
  ${(props) =>
    props.selected
      ? {
          backgroundColor: "#bfbfbf",

          borderRadius: "4px",
        }
      : {}};

  &:hover {
    background-color: ${(props) => props.theme.colors.inputBackground};
    color: ${(props) => props.theme.colors.primeBackground};
  }
`;

export const ContentContainer = styled.div`
  flex-grow: 1;
  width: 80%;
`;

export const ChapterContentContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primeBackground};

  padding: 24px;
  border-radius: 4px;
  cursor: pointer;
  overflow-y: auto;
  height: calc(100vh - 16px);
  &:not(input) {
    user-select: none;
  }
`;

export const ChapterTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
`;

export const ChapterText = styled.span`
  margin-bottom: 2rem;
  font-size: 24px;

  color: ${(props) => props.theme.colors.primeColor};
  line-height: 1.4;
`;
export const UnknownWordsList = styled.ul`
  margin: 0 auto;
  list-style-type: none;
  margin-top: 3rem;
  &:first-child {
    margin-top: 3rem;
  }
`;

export const UnknownWordsItem = styled.ul`
  background-color: ${(props) => props.theme.colors.primeBackground};
  margin-top: 1rem;
  color: black;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 12px;
  list-style-type: none;
  li {
    color: ${(props) => props.theme.colors.text};
  }
  li:first-child {
    font-size: 2rem;
    font-weight: bold;
  }

  li:first-child::after {
    content: ":";
  }
  li:nth-child(2) {
    font-size: 1.3rem;
    font-style: italic;
    padding-left: 1rem;
  }
  li:last-child {
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    font-style: italic;
    margin-right: auto;
  }
`;
export const StarIcon = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 1.6rem;
    height: 1.6rem;
    cursor: pointer;
    background-color: transparent;
    filter: ${(props) => (props.favorited ? "invert(50%)" : "none")};
  }
`;
export const ListenIcon = styled.div`
  & > img {
    width: ${(props) => props.width || "1.5rem"};
    height: ${(props) => props.height || "1.5rem"};
    cursor: pointer;

    filter: ${(props) => (props.isActive ? "none" : "invert(50%)")};
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.isActive ? "scale(1.2)" : "scale(1)")};
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  margin-left: auto;
  gap: 1rem;
`;

export const WordCardCompletionSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 16rem;
  border-radius: 12px;
  margin: 1rem auto;
  padding: 1rem;
  padding-top: 3rem;
  align-items: space-between;
  text-align: center;
  background-color: ${(props) => props.theme.colors.formBackground};
  color: ${(props) => props.theme.colors.text};
  p {
    font-size: 1.2rem;
  }
`;
export const CompletionSection = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: space-between;

  button {
    padding: 1rem;
    text-align: center;
    width: 8rem;
    background-color: ${(props) => props.theme.colors.text2};
    color: ${(props) => props.theme.colors.text};
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.colors.text};
      color: ${(props) => props.theme.colors.text2};
    }
  }
`;
