import React, { useState } from "react";
import styled from "styled-components";

const WordTooltip = ({ content, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleToggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <TooltipContainer
      onMouseEnter={handleToggleTooltip}
      onMouseLeave={handleToggleTooltip}
    >
      {showTooltip && (
        <ContentAndIconWrapper>
          <TooltipContent>{content}</TooltipContent>
        </ContentAndIconWrapper>
      )}
    </TooltipContainer>
  );
};

export default WordTooltip;

const TooltipContainer = styled.div`
  display: inline;
  position: relative;
`;

const ContentAndIconWrapper = styled.div`
  display: flex;
  position: absolute;
  top: -90%;
  left: 100%;
  transform: translate(-30%, -50%);
  align-items: center;
  justify-content: center;

  height: 3rem;
  background-color: #fffd70;
  outline: 2px solid #f89411;

  border-radius: 4px;
  font-size: 1.1rem;
`;

const TooltipContent = styled.div`
  display: inline-block;
  color: black;
  max-width: 100%;
  height: 2rem;
  border-radius: 4px;
  margin-right: 1rem;
  visibility: visible;
  opacity: 1;
  text-indent: 5px;
  transition: opacity 0.3s ease;
  min-width: 200px;
  max-width: 350px;
`;
