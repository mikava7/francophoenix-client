import React from "react";
import styled from "styled-components";
import Listen from "../../Listen";
import { ListenIcon } from "../../../Styles/globalStyles";
import useListenWord from "../../../hooks/useListenWord";

const CurrentTenseConjugation = ({
  camelCaseToOriginal,
  forms,
  conjugated,
  isGeorgian,
  t,
  tenseName,
}) => {
  const { handleListen, isActiveStates } = useListenWord();
  return (
    <TenseList>
      <h1>{t("Conjugaison")}</h1>
      {forms &&
        forms[camelCaseToOriginal[tenseName]]?.map((tenseItem, index) => (
          <TenseContent key={index}>
            <li>
              {/* Display the conjugation data here */}
              <FirstLanguageBox
                highlight={tenseItem?.french.includes(conjugated)}
              >
                <FirstLanguage>{tenseItem?.french}</FirstLanguage>
                <ListenIcon
                  onClick={handleListen(tenseItem?.french)}
                  isActive={isActiveStates[index]}
                >
                  <Listen />
                </ListenIcon>
              </FirstLanguageBox>
              <SecondLanguage>
                {isGeorgian ? tenseItem?.georgian : tenseItem?.english}
              </SecondLanguage>
            </li>
          </TenseContent>
        ))}
    </TenseList>
  );
};

export default CurrentTenseConjugation;
const TenseList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin: 0 0.4rem;
  max-width: 90%;
`;

const TenseContent = styled.div`
  display: flex;
  flex-direction: column;
  ul {
    list-style: none;
  }

  li {
    background: ${(props) => props.theme.secondaryBackground};
    border-radius: 0.5rem;

    border-bottom: 1px solid #ccc;
    padding: 1rem;
    /* margin: 0.3rem 1rem; */
    width: 99%;
    @media (min-width: 757px) {
      width: 80%;
      /* margin: 0.3rem 1rem; */
      /* color: red; */
    }
  }
`;

const FirstLanguage = styled.p`
  margin-bottom: 0.2rem;
  &:before {
    content: ${(props) =>
      props.theme.background === "#000000" ? '"🔸"' : '"🔹"'};
    margin-right: 1rem;
  }
`;

const SecondLanguage = styled.span`
  color: ${(props) => props.theme.secondaryText};
  margin-left: 5rem;
`;

const FirstLanguageBox = styled.div`
  background: ${(props) =>
    props.highlight ? props.theme.highlight2 : "transparent"};
  /* border: 1px solid ${(props) => props.theme.highlight1}; */

  padding: 1rem;
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
