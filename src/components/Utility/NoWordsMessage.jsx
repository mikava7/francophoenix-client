import React from "react";
import styled from "styled-components";

const NoWordsMessage = () => {
  return (
    <MessageContainer>
      <MessageText>There are no words yet.</MessageText>
    </MessageContainer>
  );
};

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #f7f7f7;
  border-radius: 8px;
  margin: 20px 0;
`;

const MessageText = styled.p`
  font-size: 18px;
  color: #333;
`;

export default NoWordsMessage;
