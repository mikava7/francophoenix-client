import { ThemeProvider, keyframes, css } from "styled-components";

export const slideRight = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const slideLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;
export const ani = keyframes`
  0% {
    width: 0%;
    height: 1px;
    left: 50%;
  }

  50% {
    width: 100%;
    height: 1px;
    left: 0;
  }

  100% {
    width: 100%;
    height: 100%;
    left: 0;
  }
`;

export const slideOut = keyframes`
0% {
  transform: translateY(100%);
  opacity: 0;
}
100% {
  transform: translateY(0);
  opacity: 1;
}
`;
