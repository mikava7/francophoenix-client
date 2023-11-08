import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVerbs } from "../../redux/slices/verbeTenses/verbeTenses";
import {
  fetchVerbList,
  getVerbExercises,
} from "../../redux/slices/verbeTenses/verbExerciseSlice";
import Loading from "../loading/Loading";
import styled from "styled-components"; // Import styled-components
import { convertTensesToSentences } from "../Utility/utils";
import {
  SelectContainer,
  SelectStyled,
} from "../verbs/presentTense/VerbTenseExercise";
import { useTranslation } from "react-i18next";
import SentenceBuilderEx from "./SentenceBuilderEx";
import { shuffleArray } from "../Utility/utils";
const VerbSelect = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const listOfVerb =
    useSelector((state) => state.verbExercise.listOfVerb) || [];

  const verbEecercise = useSelector(
    (state) => state.verbExercise.verbEecercise
  );

  const isLoading = useSelector((state) => state.isLoading);
  const [selectedVerb, setSelectedVerb] = useState("être");
  const [selectedTense, setSelectedTense] = useState("present");
  const [selectedTenseData, setSelectedTenseData] = useState([]);
  const [selectedTenseDatas, setSelectedTenseDatas] = useState([]);

  useEffect(() => {
    dispatch(fetchVerbList());
  }, []);

  const handleTenseChange = (event) => {
    const selectedTenseName = event.target.value;

    setSelectedTense(selectedTenseName);

    if (selectedTenseName && verbEecercise && verbEecercise.tenses) {
      setSelectedTenseData(verbEecercise.tenses[selectedTenseName] || []);
    }
  };

  const handleVerbChange = (event) => {
    const selectedVerbId = event.target.value;

    setSelectedVerb(selectedVerbId);
    const verbToRender = listOfVerb.find((id) => id._id === selectedVerbId);

    dispatch(getVerbExercises(verbToRender._id));
  };

  const sentences =
    verbEecercise && convertTensesToSentences(verbEecercise?.tenses?.present);

  let sentenceData = [
    {
      sentence: "",
      words: [],
    },
  ];

  const handleBuilderData = (sentences) => {
    if (!sentences || !sentences.length) {
      return [];
    }

    const words = sentences.map((sentence) => {
      const sentenceWord = sentence.split(" ");
      const shuffledWords = shuffleArray(sentenceWord);
      sentenceData = {
        sentence: sentence,
        words: sentenceWord,
      };

      return sentenceData;
    });
  };
  const data = handleBuilderData(sentences);
  console.log("sentences", sentences);
  console.log("sentenceData", sentenceData);

  console.log("data", data);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <VerbSelectContainer>
      <SelectContainer>
        <label>{t("Choisissez un verbe")}:</label>
        <SelectStyled onChange={handleVerbChange} value={selectedVerb}>
          {listOfVerb.map((verb) => {
            const { _id } = verb;
            return (
              <option key={_id} value={_id}>
                {verb.verb}
              </option>
            );
          })}
        </SelectStyled>
      </SelectContainer>
      <SelectContainer>
        <label>{t("Sélectionnez un temps")}:</label>
        <SelectStyled onChange={handleTenseChange} value={selectedTense}>
          {verbEecercise &&
            verbEecercise?.tenses &&
            Object?.keys(verbEecercise?.tenses).map((tenseName) => (
              <option key={tenseName} value={tenseName}>
                {tenseName}
              </option>
            ))}
        </SelectStyled>
      </SelectContainer>
      {/* <SentenceBuilderEx sentenceData={sentences} isActive={true} /> */}
    </VerbSelectContainer>
  );
};

export default VerbSelect;
const VerbSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
`;

const Label = styled.label`
  font-size: 18px;
`;

const Select = styled.select`
  font-size: 16px;
  padding: 10px;
  margin-top: 10px;
`;

const SelectedVerbContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;
