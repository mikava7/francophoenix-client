import React, { useState, useEffect } from "react";
import listen from "../assets/icons8-sound-50.png";
import styled from "styled-components";

const Listen = ({ isActiveIndex }) => {
  const [isActive, setIsActive] = useState(false);

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
      <img src={listen} alt="listen" />
    </ListenIcon>
  );
};

const ListenIcon = styled.div`
  display: flex;
  align-items: center;
  & > img {
    width: ${(props) => props.width || "1.2rem"};
    height: ${(props) => props.height || "1.2rem"};
    cursor: pointer;
    filter: ${(props) => (props.isActive ? "none" : "invert(50%)")};
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.isActive ? "scale(1.1)" : "scale(1)")};
  }
`;

export default Listen;
