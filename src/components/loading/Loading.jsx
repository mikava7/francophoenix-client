import React from "react";
import styled, { keyframes } from "styled-components";

const worm1Animation = keyframes`
  from {
    stroke-dashoffset: 0;
  }
  50% {
    animation-timing-function: steps(1);
    stroke-dashoffset: -358;
  }
  50.01% {
    animation-timing-function: linear;
    stroke-dashoffset: 358;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const worm2Animation = keyframes`
  from {
    stroke-dashoffset: 358;
  }
  50% {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: -358;
  }
`;

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  padding: 1.5em 0;
`;

const IpSvg = styled.svg`
  width: 16em;
  height: 8em;
`;

const IpTrack = styled.g`
  stroke: hsl(var(--hue), 90%, 90%);
  transition: stroke var(--trans-dur);
`;

const Worm1Path = styled.path`
  animation: ${worm1Animation} 2s linear infinite;
`;

const Worm2Path = styled.path`
  animation: ${worm2Animation} 2s linear infinite;
`;

const Loading = () => {
  return (
    <MainContainer>
      <IpSvg
        className="ip"
        viewBox="0 0 256 128"
        width="256px"
        height="128px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="33%" stopColor="#0055A4" />
            <stop offset="67%" stopColor="#EF4135" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
          <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="33%" stopColor="#EF4135" />
            <stop offset="67%" stopColor="#0055A4" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>

        <g fill="none" strokeLinecap="round" strokeWidth="16">
          <IpTrack className="ip__track" stroke="#ddd">
            <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56" />
            <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64" />
          </IpTrack>
          <g strokeDasharray="180 656">
            <Worm1Path
              className="ip__worm1"
              stroke="url(#grad1)"
              strokeDashoffset="0"
              d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"
            />
            <Worm2Path
              className="ip__worm2"
              stroke="url(#grad2)"
              strokeDashoffset="358"
              d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"
            />
          </g>
        </g>
      </IpSvg>
    </MainContainer>
  );
};

export default Loading;
