import React, { useEffect } from "react";
import { beginnerVocabulary } from "../../data/beginnerVocabulary";
import Vocabulary from "./Vocabulary";
import { useDispatch, useSelector } from "react-redux";
import { fetchVocabullaryTopics } from "../../redux/slices/vocabularyTopics/vocabullaryTopicSlice";
import Loading from "../loading/Loading";
const Vocabularies = () => {
  const dispatch = useDispatch();

  const vocabullaryTopics =
    useSelector((state) => state.vocabullaryTopics.vocabullaryTopics) || [];
  const french =
    useSelector((state) => state.vocabullaryTopics.vocabullaryTopics.french) ||
    [];
  console.log(french);
  const isLoading = useSelector((state) => state.vocabullaryTopics.isLoading);
  useEffect(() => {
    dispatch(fetchVocabullaryTopics());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Vocabulary vocabullaryTopics={vocabullaryTopics} />
    </div>
  );
};

export default Vocabularies;
