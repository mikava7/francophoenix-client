import React from "react";
import styled from "styled-components";

const ContentComingSoon = () => {
  return (
    <Container>
      <Message>Content coming soon...</Message>
    </Container>
  );
};

export default ContentComingSoon;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

const Message = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.theme.primaryText};
`;
