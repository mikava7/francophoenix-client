import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fdf3f2;
`;
const Icon = styled.div`
  transform-origin: top;
  transition: transform 0.7s ease-in-out;
`;
const Info = styled.div`
  font-family: "Quicksand", sans-serif;
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  font-size: 26px;
  margin-top: 10px;
  color: #807b7b;
`;

const MobileLayout = styled.div`
  width: 325px;
  height: 670px;
  margin: 30px 0;
  border-radius: 25px;
  perspective: 500px;
  overflow: hidden;
  color: var(--font-color);
  background-color: #fdeae6;
  box-shadow: 36px 36px 50px 15px #eed7d1d1; /* Your mobile layout styles here */
`;

const NotificationHeader = styled.div`
  position: fixed;
  top: 5px;
  width: 100%;
  padding: 5px 15px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  z-index: 6;
`;

const Time = styled.div`
  /* Your time styles here */
`;

const Necessities = styled.div`
  /* Your necessities styles here */
`;

const Actions = styled.div`
  position: fixed;
  top: 37px;
  width: 100%;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  z-index: 6;
`;
const Preface = styled.div`
  height: 500px;
  padding: 50px;
  transition: transform 0.7s ease-in-out; //cubic-bezier(1,.98,.82,.98);
  background: white;
`;
const BookCover = styled.div`
  position: relative;
  height: 500px;
  width: 650px;
  left: -52.5%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #eed7d1;
  transform-style: preserve-3d;
  transform-origin: 50% 40%;
  transition: transform 0.7s ease-in-out;
  z-index: 4;
  &:hover {
    transform: rotateX(75deg) translateZ(3px) scale(0.75);
    ~ ${Preface} {
      transform: translateY(-302px);
    }

    ~ ${Icon} {
      transform: rotateX(180deg);
    }
  }
`;

const BookTop = styled.img`
  width: 170px;
  position: absolute;
  top: 180px;
  left: 250px;
  z-index: 5;
  transform: translateZ(28.5px);
`;

const BookSide = styled.img`
  position: absolute;
  top: 430px;
  left: 222px;
  transform: translateY(-15px) translateX(0px) translateZ(15px) rotateX(104deg);
`;

const Content = styled.div`
  /* Your content styles here */
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-family: "Quicksand", sans-serif;
  font-size: 26px;
  margin-bottom: 10px;
`;

const Author = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  margin-bottom: 20px;
`;

const Body = styled.div`
  /* Your body styles here */
`;

const BookDisplay = ({ title, author, description }) => {
  return (
    <Container>
      <Info>Mobile - Try tapping</Info>
      <MobileLayout>
        <NotificationHeader>
          <Necessities>
            <i className="fas fa-signal"></i>
            <i className="fas fa-wifi"></i>
            <i className="fas fa-battery-full"></i>
          </Necessities>
        </NotificationHeader>
        <Actions>
          <i className="fas fa-chevron-left"></i>
          <i className="fas fa-bookmark"></i>
        </Actions>
        <BookCover>
          <BookTop
            src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-top.svg"
            alt="book-top"
          />
          <BookSide
            src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg"
            alt="book-side"
          />
        </BookCover>
        <Preface>
          <Content>
            <Header>
              <Title>{title}</Title>
              <Icon>
                <i className="fas fa-chevron-down"></i>
              </Icon>
            </Header>
            <Author>by {author}</Author>
            <Body>
              <p>{description}</p>
            </Body>
          </Content>
        </Preface>
      </MobileLayout>
    </Container>
  );
};

export default BookDisplay;
