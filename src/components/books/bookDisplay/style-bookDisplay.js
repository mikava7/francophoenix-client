import styled from "styled-components";

export const BookCardLayout = styled.div`
  width: 20.3rem;
  height: 41.9rem;
  margin: 1.9rem 0;
  border-radius: 1.6rem;
  perspective: 31.3rem;
  overflow: hidden;
  color: var(--font-color);
  background-color: #fdeae6;
  box-shadow: 2.3rem 2.3rem 3.1rem 0.9rem #eed7d1d1;
`;
export const Actions = styled.div`
  position: fixed;
  top: 2rem;
  right: -15rem;
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
  height: 41.9rem;
  padding: 3rem;
  transition: transform 0.7s ease-in-out;
  background: white;
`;
export const BookCover = styled.div`
  position: relative;
  height: 31rem;
  width: 40rem;
  left: -52.5%;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  background-color: #eed7d1;
  transform-style: preserve-3d;
  transform-origin: 50% 40%;
  transition: transform 0.7s ease-in-out;
  z-index: 4;
  &:hover {
    transform: rotateX(75deg) translateZ(3px) scale(0.75);
    ~ ${Preface} {
      transform: translateY(-19rem);
    }
  }
`;
export const BookTop = styled.img`
  width: 10.5rem;
  position: absolute;
  top: 180px;
  left: 250px;
  z-index: 5;
  transform: translateZ(28.5px);
  border-radius: 1rem;
  object-fit: cover;
`;
export const BookSide = styled.img`
  position: absolute;
  border-radius: 4rem;
  top: 430px;
  left: 222px;
  transform: translateY(-15px) translateX(0px) translateZ(15px) rotateX(104deg);
`;
export const Title = styled.div`
  font-family: "Quicksand", sans-serif;
  font-size: 26px;
  margin-bottom: 10px;
`;
export const Author = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  margin-bottom: 20px;
`;
