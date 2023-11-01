import styled from "styled-components";
export const GrammerTopicPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 99%;

  @media (min-width: 768px) and (max-width: 920px) {
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
  /* outline: 2px solid red; */
  margin: 0 auto;

  width: 100%;

  border-bottom: 3px solid black;

  margin-bottom: 2rem;

  @media (min-width: 768px) and (max-width: 920px) {
    /* margin: 0 0.2rem; */
    width: 100%;
  }
`;
export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondaryBackground};
  margin-bottom: 1rem;
  width: 94%;
  padding: 0.5rem;

  font-size: 1.1rem;

  p {
    text-indent: 1rem;
    margin-bottom: 1rem;
    font-size: 1.1rem;

    padding: 0.5rem;
    padding-left: 2rem;
    border-bottom: 1px solid ${(props) => props.theme.tertiaryText};

    &:before {
      content: ${(props) =>
        props.theme.background === "#000000" ? '"🔸"' : '"🔹"'};
    }

    @media (max-width: 541px) {
      font-size: 1.02rem;
    }
  }
  span {
    text-indent: 1rem;
    margin-left: 2rem;
    font-size: 1.05rem;

    color: ${(props) => props.theme.secondaryText};
    @media (max-width: 541px) {
      font-size: 1rem;
    }
  }
  @media (min-width: 768px) and (max-width: 920px) {
    max-width: 88%;
  }

  @media (max-width: 392px) {
    width: 300px;
  }
  @media (max-width: 320px) {
    width: 240px;
  }
`;
export const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.primaryBackground};
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
    /* max-width: 99%; */
  }
  @media (min-width: 392px) and (max-width: 768px) {
    width: 98%;
  }
  @media (max-width: 392px) {
    width: 300px;
  }
  @media (max-width: 320px) {
    width: 240px;
  }
`;

export const ExampleBox = styled(DescriptionBox)`
  display: flex;
  /* outline: 2px solid red; */
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
  p {
    /* outline: 2px solid blue; */

    display: flex;
  }
`;

export const ListenIcon = styled.div`
  max-width: 100%;

  display: flex;
  align-items: center;
  margin-right: 3rem;
  margin-left: auto;
  & > img {
    width: ${(props) => props.width || "1.2rem"};
    height: ${(props) => props.height || "1.2rem"};
    cursor: pointer;

    filter: ${(props) => (props.isActive ? "black" : "invert(-150%)")};
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.isActive ? "scale(1.1)" : "scale(1)")};
  }
`;
