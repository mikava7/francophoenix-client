import { useState, useEffect } from "react";
import { fetchGrammer } from "../../redux/slices/grammer/grammerSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/Loading";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BasicGrammerTopic from "./BasicGrammerTopic";
import { StyledLink } from "../../Styles/globalStyles";
const BasicGrammerLessons = () => {
  const dispatch = useDispatch();
  const basicGrammerTopics =
    useSelector((state) => state.grammer.grammer) || [];
  const isLoading = useSelector((state) => state.grammer.isLoading);
  const error = useSelector((state) => state.grammer.error);

  console.log(basicGrammerTopics);

  useEffect(() => {
    dispatch(fetchGrammer());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <div>
      <h1>BasicGrammerLessons </h1>
      {basicGrammerTopics &&
        basicGrammerTopics.map((topics) => {
          const { _id } = topics;
          return (
            <StyledLink key={_id} to={`/grammer/${_id}`}>
              <BasicGrammerTopic topics={topics} />
            </StyledLink>
          );
        })}
    </div>
  );
};

export default BasicGrammerLessons;
