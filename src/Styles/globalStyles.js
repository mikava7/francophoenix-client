import styled, { createGlobalStyle, css } from "styled-components";
import { slideRight, slideLeft, ani } from "./frames.js";
// import theme from "./theme";

import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  body {

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;

    width: 100vw;
    background-color: ${(props) => props.theme.primaryBackground};
    color: ${(props) => props.theme.primaryText};

  }

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

  }
}

.slick-next {
  right: -30px; 
}
.slick-prev {
  left: -30px; 
}
 h1{
  font-size: ${({ theme }) => theme.extraMega};
  letter-spacing: ${({ theme }) => theme.megaLetterSpacing};

  
  @media (min-width: 768px) and (max-width: 920px) {
 
 font-size: ${({ theme }) => theme.mega};
  letter-spacing: ${({ theme }) => theme.extraLargeLetterSpacing};
 
}
@media (min-width: 577px) and (max-width: 767px) {
 font-size: ${({ theme }) => theme.extraLarge};

}

@media (min-width: 393px) and (max-width: 576px) {
 font-size: ${({ theme }) => theme.large};

}
@media (max-width: 392px) {
 font-size: ${({ theme }) => theme.medium};

}
 }
 h2{
  font-size: ${({ theme }) => theme.extraLarge};
  letter-spacing: ${({ theme }) => theme.extraLargeLetterSpacing};

  @media (min-width: 768px) and (max-width: 920px) {
 
 font-size: ${({ theme }) => theme.large};
 
}
@media (min-width: 577px) and (max-width: 767px) {
 font-size: ${({ theme }) => theme.large};

}

@media (min-width: 393px) and (max-width: 576px) {
 font-size: ${({ theme }) => theme.medium};

}
@media (max-width: 392px) {
 font-size: ${({ theme }) => theme.medium};

}
 }


h3{
  font-size: ${({ theme }) => theme.large};
  letter-spacing: ${({ theme }) => theme.largeLetterSpacing};

@media (min-width: 768px) and (max-width: 920px) {
  letter-spacing: ${({ theme }) => theme.largeLetterSpacing};
 
 font-size: ${({ theme }) => theme.large};
 
}
@media (min-width: 577px) and (max-width: 767px) {
 font-size: ${({ theme }) => theme.medium};

}

@media (min-width: 393px) and (max-width: 576px) {
 font-size: ${({ theme }) => theme.small};

}
@media (max-width: 392px) {
 font-size: ${({ theme }) => theme.small};

}

 }

 h1,h2,h3{
  text-align:center;

 }

 p {
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.large};
    line-height: ${({ theme }) => theme.extraLargeLineHeight};
    letter-spacing: ${({ theme }) => theme.extraLargeLetterSpacing};


 @media (min-width: 768px) and (max-width: 920px) {
 
    font-size: ${({ theme }) => theme.medium};
    line-height: ${({ theme }) => theme.largeLineHeight};
    letter-spacing: ${({ theme }) => theme.extraLargeLetterSpacing};
    
  }
  @media (min-width: 577px) and (max-width: 767px) {
    font-size: ${({ theme }) => theme.medium};
    line-height: ${({ theme }) => theme.mediumLineHeigth};
    letter-spacing: ${({ theme }) => theme.largeLetterSpacing};

  }

  @media (min-width: 393px) and (max-width: 576px) {
    font-size: ${({ theme }) => theme.small};
    line-height: ${({ theme }) => theme.smallLineHeight};
    letter-spacing: ${({ theme }) => theme.largeLetterSpacing};

  }
  @media (max-width: 392px) {
    font-size: ${({ theme }) => theme.small};
   line-height: ${({ theme }) => theme.smallLineHeight};
    letter-spacing: ${({ theme }) => theme.mediumLetterSpacing};

  }
  }


`;
/////////////////
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContinueButton = styled.button`
  background-color: #70ff41;
  color: #1a1a4b;
  width: 20rem;
  font-weight: bold;
  margin: 0 auto;
  padding: 1rem 2rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 1.8rem;
  letter-spacing: 2px;
  cursor: pointer;
  &:hover {
    color: #70ff41;
    background: #1a1a4b;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 18rem;
    font-size: 1.6rem;
    padding: 0.8rem 1.6rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 14rem;
    font-size: 1.4rem;
    padding: 0.6rem 1.2rem;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    width: 12rem;
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
  }

  @media (max-width: 576px) {
    width: 10rem;
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  width: 12rem;
  font-size: 1.6rem;

  font-weight: bold;
  cursor: pointer;
  background: ${(props) => props.theme.primaryText};
  color: ${(props) => props.theme.primaryBackground};
  &:hover {
    background: ${(props) => props.theme.primaryBackground};
    color: ${(props) => props.theme.primaryText};
  }
  @media screen and (min-width: 576px) {
    font-size: 1.1rem;
  }
  @media screen and (min-width: 768px) {
    width: 8rem;

    font-size: 1.2rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1.4rem;
    width: 10rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.6rem;
  }
`;
export const LightButton = styled(Button)`
  width: 12rem;
  background: ${(props) => props.theme.primaryBackground};
  color: ${(props) => props.theme.primaryText};
  &:hover {
    background: ${(props) => props.theme.primaryText};
    color: ${(props) => props.theme.primaryBackground};
  }
`;
export const CenteredMessageContent = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.4rem 0.8rem;
  letter-spacing: 1.5px;
  font-size: 1.3rem;
`;

export const ListenIcon = styled.div`
  display: flex;
  align-items: center;
  width: 1.8rem;
  height: 1.8rem;
  @media (min-width: 767px) and (max-width: 920px) {
    width: 1.8rem;
    height: 1.8rem;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    width: 1.6rem;
    height: 1.6rem;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    width: 1.4rem;
    height: 1.4rem;
  }
  @media (max-width: 392px) {
    width: 1.2rem;
    height: 1.2rem;
  }
  & > img {
    max-width: 100%;
    max-height: 100%;
    cursor: pointer;

    filter: ${(props) => (props.isActive ? "none" : "invert(-150%)")};
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.isActive ? "scale(1.1)" : "scale(1)")};
  }
`;
export const ChevronIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(props) =>
    props.isExpanded ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  margin: 0;
  font-size: 2rem;
  /* margin-left:auto; */
  /* border: 2px solid red; */
  @media (min-width: 767px) and (max-width: 920px) {
    font-size: 1.8rem;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    font-size: 1.6rem;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    font-size: 1.4rem;
  }
  @media (max-width: 392px) {
    font-size: 1.2rem;
  }
`;
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// ///////////////// Section Landing Cards ////////////////////////////////////

export const LandingCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* outline: 2px solid red; */
  overflow-x: hidden;
  /* margin: 0 auto; */
  width: 96%;
  h1 {
    color: ${(props) => props.theme.primaryText};
    margin: 1rem;
    @media (max-width: 361px) {
      font-size: 1rem;
    }
  }
  h4 {
    @media (max-width: 421px) {
      font-size: 1rem;
    }
  }
  p {
    margin-bottom: 2rem;
    @media (max-width: 361px) {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 361px) {
    max-width: 90%;
  }
  @media (max-width: 321px) {
    max-width: 82%;
  }
`;
export const CardContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.primaryBackground};
  gap: 1rem;

  @media (min-width: 576px) and (max-width: 767px) {
    flex-direction: column;
    font-size: 1.3rem;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    gap: 0;
    margin: 0 auto;
    font-size: 1.2rem;
  }
`;
export const TopicCard = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  margin: 0 auto;
  margin-bottom: 2rem;
  background-color: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.secondaryText};
  padding: 0 1rem;
  width: 335px;
  h3 {
    text-align: center;
    color: ${(props) => props.theme.primaryText};

    &:before {
      content: ${(props) =>
        props.theme.background === "#000000" ? '"🔷"' : '"🔶"'};
    }
    &:after {
      content: ${(props) =>
        props.theme.background === "#000000" ? '" 🔷"' : '" 🔶"'};
    }
  }
  h4 {
    &:before {
      content: ${(props) =>
        props.theme.background === "#000000" ? '"❔"' : '"❓"'};
    }
  }
  p {
    &:before {
      content: ${(props) =>
        props.theme.background === "#000000" ? '"🔸"' : '"🔹"'};
    }
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 95%;
  }
  @media (max-width: 376px) {
    width: 85%;
  }
`;

export const CardDescription = styled.p`
  margin: 0 1.8rem;
  padding-right: 0;

  text-align: center;
`;

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
export const StyledLink = styled(Link)`
  display: inline-block; /* or inline-flex */
  color: ${(props) => props.theme.primaryText};
  text-decoration: none;

  font-size: ${(props) =>
    props.fontSize ||
    "1.5rem"}; /* Use props.fontSize if provided, otherwise use theme default */
  margin-top: ${(props) => props.marginTop || "0"};
  margin-bottom: ${(props) => props.marginBottom || "0"};

  position: relative;
  transition: 0.8s all linear;
  padding: 0.5rem;
  &:hover {
    color: ${(props) => props.theme.tertiaryText};
  }
  &:active {
    color: ${(props) => props.theme.secondaryText};
  }
  &:visited {
    color: ${(props) => props.theme.secondaryText};
  }
`;

export const AccordionContent = styled.div`
  width: 100%;
  margin: 0 auto;
  max-height: ${(props) => (props.isExpanded ? "1000px" : "0")};
  opacity: ${(props) => (props.isExpanded ? "1" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  background-color: ${(props) => props.background || "#0055a4"};
  color: ${(props) => props.text || "#ffffff"};
  padding: ${(props) => props.padding || ""};

  position: relative;
  text-align: center;
  clip-path: polygon(0 0, 100% 0, 97% 100%, 3% 100%);
`;
export const StyledButton = styled.button`
  padding: 1rem;
  text-align: center;
  width: 12rem;
  margin: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 8px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.background};
  }
`;

export const NavBarContainer = styled.nav`
  margin-bottom: 1rem;

  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
`;
export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;

  max-width: 100%;

  &:not(input) {
    user-select: none;
  }
`;
export const StyledListItem = styled.li`
  cursor: pointer;
  text-decoration: none;
  margin: 0.2rem;
  padding: 0.2rem;
`;

export const ChapterListContainer = styled.ul`
  list-style-type: none;
  background-color: grey;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  height: calc(100vh - 1rem);
  min-width: 15rem;
  width: 20%;

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
`;

export const ChapterItem = styled.li`
  cursor: pointer;

  margin: 1rem;
  padding: 1rem;
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
  color: ${(props) => props.theme.text};
`;

export const ChapterText = styled.span`
  margin-bottom: 2rem;
  font-size: 24px;

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
  margin-top: 1rem;
  color: black;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 12px;
  list-style-type: none;
  li {
    color: ${(props) => props.theme.text};
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

  & > img {
    width: 1.2rem;
    height: 1.2rem;
    cursor: pointer;
    filter: ${(props) => (props.isStarred ? "invert(50%)" : "none")};
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.isStarred ? "scale(1)" : "scale(1.1)")};
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
  background-color: ${(props) => props.theme.background};
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
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.colors.text};
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.text};
      color: ${(props) => props.theme.background};
    }
  }
`;
