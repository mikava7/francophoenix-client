import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const TenseDescription = ({ tenseData }) => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      {tenseData.data.map((tense, index) => (
        <TenseCard key={index}>
          <TenseTitle>{tense.french}</TenseTitle>
          <TenseDescriptionText>
            {i18n.language === "ka" ? tense.georgian : tense.english}
          </TenseDescriptionText>
          <ul>
            {tense.examples.map((example, exampleIndex) => (
              <ExampleItem key={exampleIndex}>
                <ExampleText>{example.frenchExamp}</ExampleText>
                <ExampleTextSecond>
                  {i18n.language === "ka"
                    ? example.georgianExamp
                    : example.englishExamp}
                </ExampleTextSecond>
              </ExampleItem>
            ))}
          </ul>
        </TenseCard>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const TenseCard = styled.div`
  background-color: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.primaryText};

  padding: 20px;
  border-radius: 5px;
  width: 90%;
  margin: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const TenseTitle = styled.p`
  font-size: 20px;
  margin: 0;
`;

const TenseDescriptionText = styled.p`
  font-size: 16px;
  text-align: left;
`;

const ExampleItem = styled.li`
  margin-top: 10px;
`;

const ExampleText = styled.p`
  font-size: 14px;
  margin: 5px 0;
  font-weight: bold;
  text-align: left;
  &::before {
    content: "🔸";
  }
`;
const ExampleTextSecond = styled(ExampleText)`
  font-size: 12px;
  font-weight: normal;
  &::before {
    content: "🔹";
  }
`;
export default TenseDescription;
