import styled from "styled-components";

export const BookCardLayout = styled.div`
  width: 20.3rem;
  height: 41.9rem;
  margin: 1.9rem 0;
  border-radius: 1rem;
  perspective: 31.3rem;
  overflow: hidden;
  color: ${(props) => props.theme.primaryText};

  background-color: ${(props) => props.theme.tertiaryBackground};
  box-shadow: 2.3rem 2.3rem 3.1rem 0.9rem
    ${(props) => props.theme.tertiaryBackground};
  outline: 1px solid ${(props) => props.theme.highlight1};
`;
export const Actions = styled.div`
  position: fixed;
  top: 0rem;
  right: -16rem;
  width: 90%;
  padding: 1rem;

  margin-left: auto;
  z-index: 6;
  img {
    width: 2rem;
    cursor: pointer;
  }
`;
export const Preface = styled.div`
  height: 28rem;
  padding: 3rem;
  transition: transform 0.7s ease-in-out;
  background: ${(props) => props.theme.primaryBackground};
  transform: translateY(
    ${(props) => (props.showDescription ? "-9.8rem" : "0")}
  );
`;
export const BookCover = styled.div`
  position: relative;
  height: 23rem;
  width: 40rem;
  left: -52.5%;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  background: ${(props) => props.theme.secondaryBackground};
  transform-style: preserve-3d;
  transform-origin: 50% 60%;
  transition: transform 0.7s ease-in-out;
  z-index: 4;
  &:hover,
  &.double-tap {
    transform: rotateX(75deg) translateZ(3px) scale(0.75);
    ~ ${Preface} {
      transform: translateY(-9.8rem);
    }
  }
`;
export const BookTop = styled.img`
  width: 10.5rem;
  background-color: black;
  position: absolute;
  top: 3rem;
  left: 250px;
  z-index: 5;
  transform: translateZ(28.5px);
  border-radius: 1rem 1rem 0 0;
  object-fit: cover;
`;
export const BookSide = styled.img`
  position: absolute;
  border-radius: 4rem;
  top: 300px;
  left: 222px;
  transform: translateY(-15px) translateX(0px) translateZ(15px) rotateX(104deg);
`;
export const Title = styled.h2`
  font-family: "Quicksand", sans-serif;
`;
export const Author = styled.h4`
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  margin-left: 2rem;
`;
