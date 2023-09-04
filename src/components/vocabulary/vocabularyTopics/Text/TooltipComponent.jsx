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
const TooltipComponent = ({ tooltipContent, index, conjugated, id }) => {
  // console.log("tooltipContent", tooltipContent);
  console.log("conjugated in TooltipComponent", conjugated);

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
      <StyledLink to={`/verbs/${tooltipContent}?conjugated=${conjugated}`}>
        {tooltipContent}
      </StyledLink>

      <Tooltip place="top" effect="solid" />
      <Icon onClick={handleListen(tooltipContent)}>
        <Listen isActive={isActiveStates[index]} />
      </Icon>
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
  height: 1.8rem;
  display: flex;
  text-align: center;
  align-items: center;
  position: relative;
`;
const Icon = styled.span`
  margin-left: 0.4rem;
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