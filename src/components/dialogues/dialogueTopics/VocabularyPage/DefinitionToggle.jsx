import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const DefinitionToggle = ({
  definition,
  secondLanguage,
  index,
  secondLangButtonName,
  isMultipleDefinitions,
}) => {
  const [showDefinition, setShowDefinition] = useState(true);

  const toggleDefinition = () => {
    setShowDefinition(!showDefinition);
  };

  return (
    <DefinitionToggleContainer>
      <ButtonContainer>
        <button
          style={{ background: showDefinition ? "#FD5602" : "#ffffec" }}
          onClick={toggleDefinition}
        >
          {secondLangButtonName}
        </button>
        <button
          style={{ background: showDefinition ? "#ffffec" : "#FD5602" }}
          onClick={toggleDefinition}
        >
          Fr
        </button>
      </ButtonContainer>
      <SecondLangOrDef>
        {isMultipleDefinitions
          ? showDefinition
            ? secondLanguage[index]
            : definition[index]
          : showDefinition
          ? secondLanguage
          : definition}
      </SecondLangOrDef>
    </DefinitionToggleContainer>
  );
};

export default DefinitionToggle;
const DefinitionToggleContainer = styled.div`
  width: 100%;
`;
const ButtonContainer = styled.div`
  position: absolute;
  top: 10%;
  right: 2%;
  font-size: 1.4rem;

  button {
    border: none;
    font-size: 1.2rem;
    width: 3rem;
    height: 2rem;
    transition: background-color 0.5s ease;
    outline: 1px solid ${(props) => props.theme.secondaryText};
    /* background:  */
    color: ${(props) => props.theme.highlight};
  }
`;
const SecondLangOrDef = styled.div`
  margin-left: 1rem;
  min-height: 3rem;
  padding: 0.5rem;
  color: ${(props) => props.theme.secondaryText};
  font-style: italic;
`;
