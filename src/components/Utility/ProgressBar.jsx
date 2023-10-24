import React from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #ccc;
  height: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const ProgressFill = styled.div`
  height: 100%;
  border-radius: 10px;
  background-color: #007bff; // You can set your desired color here
  width: ${(props) => props.progress}%;
`;

const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <ProgressFill progress={progress} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
