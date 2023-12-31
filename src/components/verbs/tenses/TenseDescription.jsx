import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const TenseDescription = ({ tenseData, selectedTense }) => {
  const { t, i18n } = useTranslation();
  // console.log(selectedTense);
  return (
    <TenseContainer>
      {tenseData &&
        tenseData?.data &&
        tenseData?.data?.map((tense, index) => (
          <TenseCard key={index}>
            <TenseTitle>
              <b>{selectedTense}</b>
              {tense.french}
            </TenseTitle>
            <TenseDescriptionText>
              {i18n.language === "ka" ? tense.georgian : tense.english}
            </TenseDescriptionText>
            {/* <ul>
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
          </ul> */}
          </TenseCard>
        ))}
    </TenseContainer>
  );
};

export const TenseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 95%;
  overflow-y: hidden;
  /* margin: 0 1rem; */
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
  font-size: ${(props) => props.theme.small};
  margin: 0;
  @media (min-width: 541px) {
    font-size: ${(props) => props.theme.mediumSmall};
  }
  b {
    margin-right: 0.4rem;
    &:after {
      content: ":";
    }
  }
`;

const TenseDescriptionText = styled.p`
  text-indent: 20px;
  margin-top: 0.4rem;
  padding-top: 0.4rem;

  border-top: 1px solid ${(props) => props.theme.tertiaryBackground};
  font-size: ${(props) => props.theme.extraSmall};
  text-align: left;
  @media (min-width: 541px) {
    font-size: ${(props) => props.theme.small};
  }
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
