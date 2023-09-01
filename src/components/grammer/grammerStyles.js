import styled from "styled-components";
export const GrammerTopicPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 1.8rem;
  max-width: 100%;

  @media (min-width: 768px) and (max-width: 920px) {
    margin: 0 0.2rem;
    max-width: 90%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
  }

  @media (min-width: 393px) and (max-width: 576px) {
  }
  @media (max-width: 392px) {
  }
`;
export const TitleContainer = styled.div``;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  width: 100%;

  border-bottom: 3px solid black;
  @media (min-width: 768px) and (max-width: 920px) {
    margin: 0 0.2rem;
    width: 100%;
  }
  cursor: pointer;
  margin-bottom: 2rem;
`;
export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondaryBackground};
  margin-bottom: 1rem;
  width: 94%;
  padding: 0.5rem;
  p {
    text-indent: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem;

    &:before {
      content: ${(props) =>
        props.theme.background === "#000000" ? '"🔸"' : '"🔹"'};
    }
  }
  span {
    text-indent: 1rem;
    margin-left: 2rem;

    color: ${(props) => props.theme.secondaryText};
  }
  @media (min-width: 768px) and (max-width: 920px) {
    max-width: 88%;
  }

  @media (max-width: 392px) {
    width: 300px;
  }
`;
export const ExampleContainer = styled(DescriptionContainer)`
  width: 94%;
  padding: 0 1rem;

  p {
    font-size: 1.2rem;
    margin-bottom: 0;
  }

  @media (min-width: 577px) and (max-width: 767px) {
    width: 90%;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    width: 90%;
  }
`;

export const ExampleBox = styled(DescriptionBox)`
  width: 100%;

  @media (min-width: 393px) and (max-width: 576px) {
    width: 90%;
  }
  div {
    display: flex;
  }
  span {
    padding: 0.5rem 1rem;
  }
`;

export const ListenIcon = styled.div`
  max-width: 100%;

  display: flex;
  align-items: center;
  margin-right: 3rem;
  margin-left: auto;
  & > img {
    color: black;
    width: ${(props) => props.width || "1.2rem"};
    height: ${(props) => props.height || "1.2rem"};
    cursor: pointer;

    filter: ${(props) => (props.isActive ? "black" : "invert(-150%)")};
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.isActive ? "scale(1.1)" : "scale(1)")};
  }
`;
