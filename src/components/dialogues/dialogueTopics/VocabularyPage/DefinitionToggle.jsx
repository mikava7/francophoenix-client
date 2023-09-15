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
        <ToggleButton
          showDefinition={showDefinition}
          // style={{ background: showDefinition ? "#FD5602" : "#ffffec" }}
          onClick={toggleDefinition}
        >
          {secondLangButtonName}
        </ToggleButton>
        <ToggleButtonFr
          // style={{ background: showDefinition ? "#ffffec" : "#60c5d9" }}
          showDefinition={showDefinition}
          onClick={toggleDefinition}
        >
          Fr
        </ToggleButtonFr>
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
  top: 2%;
  right: 1%;
  font-size: 1.4rem;

  button {
    border: none;
    font-size: 1.1rem;
    width: 2.6rem;
    height: 1.6rem;
    transition: background-color 0.5s ease;
    outline: 1px solid ${(props) => props.theme.secondaryText};
    /* background:  */
    color: ${(props) => props.theme.primaryText};
  }
`;
const SecondLangOrDef = styled.div`
  margin-left: 1rem;
  min-height: 3rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.secondaryText};
  font-size: ${(props) => props.theme.small};

  font-style: italic;
`;
const ToggleButton = styled.button`
  background-color: ${(props) =>
    props.showDefinition
      ? props.theme.highlight4
      : props.theme.primaryBackground};
  color: ${(props) =>
    props.showDefinition
      ? props.theme.primaryBackground
      : props.theme.primaryText};
`;
const ToggleButtonFr = styled(ToggleButton)`
  background-color: ${(props) =>
    props.showDefinition
      ? props.theme.primaryBackground
      : props.theme.highlight4};
  color: ${(props) => props.theme.primaryText};
`;
