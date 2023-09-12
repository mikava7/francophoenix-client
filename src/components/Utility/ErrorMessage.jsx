import React from "react";
import styled from "styled-components";

const ErrorMessage = ({ error }) => {
  // console.log("error in errorMessage", error);
  return (
    <ErrorContainer>
      <ErrorText style={{ whiteSpace: "pre-line" }}>{error}</ErrorText>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-radius: 8px;
  margin: 20px 0;
  background-color: ${(props) => props.theme.secondaryBackground};
`;

const ErrorText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #c62828; /* Use a suitable text color for error */
`;

export default ErrorMessage;
