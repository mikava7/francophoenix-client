import React from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Content = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
const ComingSoonMessage = styled.p`
  font-size: 18px;
  font-style: italic;
`;
const IntermediatePage = () => {
  return (
    <PageWrapper>
      <Title>Intermediate Page</Title>
      <ComingSoonMessage>
        "Exciting things are on the horizon! We're working diligently to bring
        you the best learning experience for our Intermediate and Advanced
        courses. While the content is being carefully crafted, stay tuned and
        get ready to embark on an incredible language journey with us. We can't
        wait to share it all with you soon! Thank you for your patience and
        enthusiasm."
      </ComingSoonMessage>
      <Content>
        <p>
          Welcome to the Intermediate level! This level is designed for learners
          who have some basic knowledge of the language and want to improve
          their skills further.
        </p>
        <p>
          In this course, you will learn more complex grammar structures, expand
          your vocabulary, and practice reading and listening to
          intermediate-level texts and dialogues.
        </p>
        <p>
          By the end of this course, you will be able to engage in more
          meaningful conversations and understand intermediate-level content.
        </p>
      </Content>
    </PageWrapper>
  );
};

export default IntermediatePage;
