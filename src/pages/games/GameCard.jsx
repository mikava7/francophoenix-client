import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { slideOut } from "../../Styles/frames";
import { Button, StyledLink } from "../../Styles/globalStyles";
const GameCard = ({ description, highlight, link }) => {
  return (
    <Card>
      <Description>
        {description}
        <StyledLink to={link}>
          <Button>Explore</Button>
        </StyledLink>
      </Description>
      <Highlight>
        <img src={highlight} alt="highlight" />
      </Highlight>
    </Card>
  );
};

const Description = styled.div`
  font-size: 1.4rem;
  width: 330px;
  padding: 0.5rem 1rem;
  outline: 2px solid ${(props) => props.theme.flagAddon};
  background-color: ${(props) => props.theme.flagFirst};
  color: ${(props) => props.theme.flagAddon};
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-weight: bold;
  animation: ${slideOut} 0.3s ease-in-out;
`;

const Card = styled.div`
  display: flex;
  position: relative;
  &:hover {
    ${Description} {
      display: block;
    }
  }
`;

const Highlight = styled.div`
  cursor: pointer;
  width: 360px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default GameCard;
