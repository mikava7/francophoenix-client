import { useState } from "react";
import styled from "styled-components";
import { Tooltip } from "react-tooltip";
import useListenWord from "../../../../hooks/useListenWord";
import Listen from "../../../Listen";
import { useDispatch, useSelector } from "react-redux";
import VerbComponent from "../../../verbs/VerbConjugation/VerbConjugation";
import { fetchVerbDetails } from "../../../../redux/slices/quizPictures/quizPictures";
import Loading from "../../../loading/Loading";
import { StyledLink } from "../../../../Styles/globalStyles";
import { Link } from "react-router-dom";
import AddToFlashcards from "../../../Utility/AddToFlashcards";
import { mapSearchResults } from "../../../Utility/utils";
import { useTranslation } from "react-i18next";
const TooltipComponent = ({ tooltipContent, index, conjugated, id }) => {
  const { t, i18n } = useTranslation();
  const { definition, english, georgian, french } = tooltipContent;
  console.log({ definition, english, georgian, french });
  const { handleListen, isActiveStates } = useListenWord();
  const [showWord, setShowWord] = useState(false);

  const handleShowWord = () => {
    setShowWord(!showWord);
  };

  return (
    <TooltipComponentContainer data-tip={french} onClick={french}>
      <TopPart>
        <Icon onClick={handleListen(french)}>
          <Listen isActive={isActiveStates[index]} />
        </Icon>
        <StyledTooltip to={`/verbs/${french}?conjugated=${conjugated}`}>
          <French>{french}</French>
        </StyledTooltip>
      </TopPart>
      <SecondLanguage>
        {i18n.language === "ka" ? georgian : english}
      </SecondLanguage>

      {/* <Tooltip place="top" effect="solid" /> */}
      <FlashCardBox>
        <span>Learn</span>
        <AddToFlashcards
          word={tooltipContent}
          secondLanguage={"secondLanguage"}
          definition={"definition"}
        />
      </FlashCardBox>
      {showWord && (
        <VerbComponentBox>
          <VerbComponent />
        </VerbComponentBox>
      )}
    </TooltipComponentContainer>
  );
};

export default TooltipComponent;
const TooltipComponentContainer = styled.span`
  max-width: 100%;

  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  background-color: ${(props) => props.theme.primaryText};
  /* border: 2px solid red; */
  border-radius: 8px;
  padding-right: 1rem;
  height: 8rem;

  /* border: 1px solid red; */
`;
const TopPart = styled.span`
  /* margin-top: 1rem; */
  padding: 0.2rem 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  /* outline: 1px solid red; */
`;
const French = styled.span`
  font-size: ${(props) => props.theme.smallMedium};
  font-weight: bold;
  /* margin-left: 1rem; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SecondLanguage = styled(French)`
  color: ${(props) => props.theme.primaryBackground};
`;

const Icon = styled.span`
  margin-left: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FlashCardBox = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  font-size: 0.8rem;
  color: red;
  /* outline: 1px solid red; */
`;
const VerbComponentBox = styled.div`
  position: absolute;
  top: -1000%;
  left: 40%;
  width: 350px;
  height: 400px;
  overflow-y: scroll;
  /* background-color: red; */

  z-index: 999;
`;
const StyledTooltip = styled(Link)`
  text-decoration: none;
  /* margin-top: 1rem; */
  width: 100%;
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  color: ${(props) => props.theme.primaryBackground};
`;
