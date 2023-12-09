import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

//Keyframes for the loading indicator animation
const rotate = keyframes`
to{
        transform:rotate(360deg);
}
`;

//Keyframes for the timer dots animation
const dotBlink = keyframes`
        0%,20%,40%,60%,80%,100%{
                opacity:0.3;
        }
        10%,30%,50%,70%,90%{
                opacity: 1;
        }
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid ${(props) => props.theme.primaryText};
  border-top: 4px solid ${(props) => props.theme.secondaryBackground};
  animation: ${rotate} 1s linear infinite;
`;

const TimerDots = styled.div`
  display: flex;
  margin-top: 10px;
  span {
    width: 8px;
    height: 8px;
    margin: 0 2px;
    background-color: ${(props) => props.theme.primaryText};
    border-radius: 50%;
    display: inline-block;
    animation: ${dotBlink} 1.5s infinite;
  }
`;

const LoadingSpinner = ({ isVisible, duration = 3 }) => {
  const [dots, setDots] = useState(3);

  useEffect(() => {
    let timer;

    if (isVisible) {
      timer = setInterval(() => {
        setDots((prevDots) => (prevDots > 0 ? prevDots - 1 : 0));
      }, (duration * 1000) / 3);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isVisible, duration]);

  return isVisible ? (
    <SpinnerContainer>
      <Spinner />
      <TimerDots>
        {[...Array(dots)].map((_, index) => (
          <span key={index} />
        ))}
      </TimerDots>
    </SpinnerContainer>
  ) : null;
};

export default LoadingSpinner;
