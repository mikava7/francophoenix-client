import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const ChooseLevel = ({ onChange, selectedLevel }) => {
  const { t } = useTranslation();
  const levels = ["Tous", "A1", "A2", "B1", "B2", "C1"];

  return (
    <ChooseLevelContainer>
      <Label htmlFor="levelDropdown">{t("Choisir le niveau")}:</Label>
      <Select id="levelDropdown" value={selectedLevel} onChange={onChange}>
        {levels.map((level) => (
          <Option key={level} value={level}>
            {t(level)}
          </Option>
        ))}
      </Select>
    </ChooseLevelContainer>
  );
};

export default ChooseLevel;
const ChooseLevelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 92%;
  /* gap: 1rem; */
  /* margin: 0 1rem; */

  /* outline: 1px solid black; */
`;
const Label = styled.label`
  text-align: center;
  width: auto;

  padding: 0.25rem 0.5rem;
  /* font-size: 1.2rem; */
  /* outline: 1px solid blue; */
`;
const Select = styled.select`
  width: 100%;
  min-width: 5rem;
  max-width: 10rem;
  border: 1px solid ${(props) => props.theme.secondaryText};
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  /* outline: 1px solid red; */

  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
`;
const Option = styled.option`
  font-size: 22px;
  color: #000;
  max-height: 245px;
  margin: 0;
  padding: 0;

  padding: 16px 30px 18px;
  margin: 0;
  border-bottom: 1px solid #e5e5e5;
  -webkit-transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  -o-transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  line-height: 20px;
`;
