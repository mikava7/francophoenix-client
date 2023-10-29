import React from "react";
import styled from "styled-components";
import PresentTense from "../presentTense/PresentTense";
const TenseSelectionSection = ({
  tenseList,
  selectedTense,
  handleTenseChange,
  t,
}) => {
  return (
    <>
      <SelectContainer>
        <label>{t("Sélectionnez un temps")}:</label>
        <StyledSelect onChange={handleTenseChange} value={selectedTense?.name}>
          {tenseList.map((tense) => (
            <StyledOption key={tense.id} value={tense.name}>
              {tense.name}
            </StyledOption>
          ))}
        </StyledSelect>
      </SelectContainer>
    </>
  );
};

export default TenseSelectionSection;

const StyledSelect = styled.select`
  padding: 0.5rem;
  font-size: 16px;
  border: 2px solid ${(props) => props.theme.secondaryText};
  border-radius: 5px;
  background-color: ${(props) => props.theme.primaryBackground};
  color: ${(props) => props.theme.primaryText};
  width: 300px;
  margin: auto;
  margin-bottom: 1rem;
  outline: none;
`;

const StyledOption = styled.option`
  background-color: ${(props) => props.theme.primaryBackground};
  color: ${(props) => props.theme.primaryText};
`;

const SelectContainer = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${(props) => props.theme.tertiaryBackground};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  label {
    font-size: 18px;
  }
`;
