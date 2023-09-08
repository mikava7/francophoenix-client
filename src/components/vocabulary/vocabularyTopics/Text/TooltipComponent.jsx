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
const TooltipComponent = ({ tooltipContent, index, conjugated, id }) => {
  // // console.log("tooltipContent", tooltipContent);

  const { handleListen, isActiveStates } = useListenWord();
  const [showWord, setShowWord] = useState(false);
  const handleShowWord = () => {
    setShowWord(!showWord);
  };

  return (
    <TooltipComponentContainer
      data-tip={tooltipContent}
      onClick={handleShowWord}
    >
      <StyledTooltip to={`/verbs/${tooltipContent}?conjugated=${conjugated}`}>
        {tooltipContent}
      </StyledTooltip>

      <Tooltip place="top" effect="solid" />
      <Icon onClick={handleListen(tooltipContent)}>
        <Listen isActive={isActiveStates[index]} />
      </Icon>
      {/* <FlashCardBox>
        <AddToFlashcards    word={tooltipContent}
            secondLanguage={"secondLanguage"}
            definition={"definition"}/>
      </FlashCardBox> */}
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
  width: 100%;
  height: 2.4rem;
  display: flex;
  text-align: center;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme.secondaryText};
  border-radius: 8px;
  padding-right: 1rem;
`;
const Icon = styled.span`
  margin-left: 0.4rem;
`;
const FlashCardBox = styled.span`
  width: 80%;
`;
const VerbComponentBox = styled.div`
  position: absolute;
  top: -1000%;
  left: 60%;
  width: 350px;
  height: 400px;
  overflow-y: scroll;
  background-color: white;
  border: 2px solid red;
  z-index: 999;
`;
const StyledTooltip = styled(Link)`
  text-decoration: none;
  width: 100%;
  color: ${(props) => props.theme.primaryBackground};
`;
