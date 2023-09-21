import { useState, useEffect } from "react";
import { fetchGrammer } from "../../redux/slices/grammer/grammerSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/Loading";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BasicGrammerTopic from "./BasicGrammerTopic";
import { FlexContainer, StyledLink } from "../../Styles/globalStyles";
import VerbTenseList from "./verbe Tenses/VerbTenseList";
import SelectedTenseDetails from "./verbe Tenses/SelectedTenseDetails";
import ErrorMessage from "../Utility/ErrorMessage";
import useScrollToTopOnRouteChange from "../../hooks/useScrollToTopOnRouteChange";
const BasicGrammerLessons = () => {
  useScrollToTopOnRouteChange();
  const [selectedTenseId, setSelectedTenseId] = useState(null);

  const dispatch = useDispatch();
  const basicGrammerTopics =
    useSelector((state) => state.grammer.grammer) || [];
  console.log("basicGrammerTopics", basicGrammerTopics);
  const isLoading = useSelector((state) => state.grammer.isLoading);
  const error = useSelector((state) => state.grammer.error);

  const handleTenseClick = (tenseId) => {
    setSelectedTenseId(tenseId);
  };

  useEffect(() => {
    dispatch(fetchGrammer());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorMessage error={error} />;
  }
  return (
    <BasicGrammerLessonsContainer>
      {basicGrammerTopics &&
        basicGrammerTopics.map((topics) => {
          const { _id } = topics;
          return (
            <StyledLink key={_id} to={`/grammar-basic/${_id}`}>
              <BasicGrammerTopic topics={topics} />
            </StyledLink>
          );
        })}
      <div>
        {/* <VerbTenseList onTenseClick={handleTenseClick} />
        {selectedTenseId && (
          <SelectedTenseDetails selectedTenseId={selectedTenseId} />
        )} */}
      </div>{" "}
    </BasicGrammerLessonsContainer>
  );
};

export default BasicGrammerLessons;
const BasicGrammerLessonsContainer = styled.div`
  display: flex;
  /* overflow-x: hidden; */
  align-items: center;
  justify-content: center;
  /* margin: 0 1rem; */
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.primaryBackground};
  color: ${(props) => props.theme.primaryText};
  h1 {
    text-align: center;
  }
`;
