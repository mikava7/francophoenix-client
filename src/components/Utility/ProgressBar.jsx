import React from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #ccc;
  height: 4px;
  border-radius: 5px;
  margin-bottom: 8px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ProgressFill = styled.div`
  height: 100%;
  border-radius: 10px;
  margin-bottom: 12px;
  height: 4px;

  background-color: ${(props) => {
    console.log(props);
  }};
  background-color: ${(props) => (props.progress ? "red" : "transparent")};

  width: ${(props) => props.progress}%;
`;

const PercentSign = styled.div`
  margin: auto;
  font-size: 12px;
`;

const ProgressBar = ({ progress }) => {
  // console.log("progress", progress);
  const realProgress = progress > 0.1 ? progress : 0;
  return (
    <ProgressBarContainer>
      <ProgressBar progress={progress} />
      <PercentSign>{realProgress}%</PercentSign>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
