import React from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #ccc;
  height: 4px;
  border-radius: 5px;
  margin-bottom: 5px;
  margin-top: 5px;
  display: flex;
  align-items: center; // Center vertically
`;

const ProgressFill = styled.div`
  height: 100%;
  border-radius: 10px;
  background-color: #007bff; // You can set your desired color here
  width: ${(props) => props.progress}%;
`;

const PercentSign = styled.div`
  margin-left: auto;
  font-size: 14px;
`;

const ProgressBar = ({ progress }) => {
  console.log("progress", progress);
  return (
    <ProgressBarContainer>
      <ProgressFill progress={progress} />
      <PercentSign>%</PercentSign>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
