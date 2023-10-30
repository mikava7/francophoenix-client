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
  /* align-items: center; */
  /* flex-direction: column; */
`;

const ProgressFill = styled.div`
  height: 100%;
  border-radius: 10px;
  margin-bottom: 12px;
  /* outline: 5px solid red; */
  background-color: #007bff; // You can set your desired color here
  width: ${(props) => props.progress}%;
`;

const PercentSign = styled.div`
  margin: auto;
  margin-top: 12px;

  font-size: 12px;
`;

const ProgressBar = ({ progress }) => {
  console.log("progress", progress);
  const realProgress = progress > 0.1 ? progress : 0;
  return (
    <ProgressBarContainer>
      <ProgressFill progress={realProgress} />
      <PercentSign>{realProgress}%</PercentSign>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
