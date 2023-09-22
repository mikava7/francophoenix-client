import React, { useState, useEffect } from "react";
// import listen from "../assets/icons8-sound-50.png";
import listenDark from "../assets/icons/sound-50_orange.png";
import listen from "../assets/icons/sound-sky_blue.png";

import { darkTheme } from "../Styles/theme";
import styled, { useTheme } from "styled-components";

const Listen = ({ isActiveIndex }) => {
  const [isActive, setIsActive] = useState(false);
  const theme = useTheme();

  const listenIcon = theme === darkTheme ? listen : listenDark;
  const handleListen = () => {
    if (isActiveIndex !== -1) {
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 2000);
    }
  };

  return (
    <ListenIcon isActive={isActive} onClick={handleListen}>
      <img src={listenIcon} alt="listen" />
    </ListenIcon>
  );
};

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

export default Listen;
