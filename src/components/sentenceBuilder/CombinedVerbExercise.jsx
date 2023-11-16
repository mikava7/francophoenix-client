import React, { useState } from "react";
import VerbSelect from "./VerbSelect";
import SelectedTenseExercise from "../verbs/presentTense/SelectedTenseExercise";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const CombinedVerbExercise = () => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState("separateVerbs");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <Container>
      <OptionLabel>{t("Choisis une option:")}</OptionLabel>
      <OptionContainer>
        <OptionButton
          onClick={() => handleOptionChange("separateVerbs")}
          active={selectedOption === "separateVerbs"}
        >
          {t("Verbes séparés")}
        </OptionButton>
        <OptionButton
          onClick={() => handleOptionChange("mixedVerbs")}
          active={selectedOption === "mixedVerbs"}
        >
          {t("Verbes mélangés")}
        </OptionButton>
      </OptionContainer>

      {selectedOption === "separateVerbs" ? (
        <VerbSelect />
      ) : (
        <SelectedTenseExercise />
      )}
    </Container>
  );
};

export default CombinedVerbExercise;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Add any additional styling you need */
`;

const OptionContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const OptionLabel = styled.label`
  font-size: 18px;
`;

const OptionButton = styled.button`
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ active, theme }) =>
    active ? theme.primaryText : theme.secondaryText};
  color: ${({ active, theme }) =>
    active ? theme.secondaryBackground : theme.primaryText};

  &:hover {
    background-color: ${({ theme }) => theme.primaryText};
    color: ${({ theme }) => theme.primaryBackground};

  }
`;
