import React from "react";
import styled from "styled-components";

const ErrorMessage = ({ error }) => {
  return (
    <ErrorContainer>
      <ErrorText>{error.message}</ErrorText>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #fdecea; /* Use a suitable background color for error */
  border-radius: 8px;
  margin: 20px 0;
`;

const ErrorText = styled.p`
  font-size: 18px;
  color: #c62828; /* Use a suitable text color for error */
`;

export default ErrorMessage;
