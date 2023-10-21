import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchVerbList,
  getVerbExercises,
} from "../../../redux/slices/verbeTenses/verbExerciseSlice";
import PresentTense from "./PresentTense";
import styled from "styled-components";
import Loading from "../../loading/Loading";
import { useTranslation } from "react-i18next";
const VerbTenseExercise = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [selectedVerb, setSelectedVerb] = useState("être");
  const [selectedTense, setSelectedTense] = useState("present");
  const [selectedTenseData, setSelectedTenseData] = useState([]);

  const listOfVerb =
    useSelector((state) => state.verbExercise.listOfVerb) || [];
  const exercises = useSelector((state) => state.verbExercise.verbEecercise);
  const loading = useSelector((state) => state.verbExercise.loading);

  useEffect(() => {
    dispatch(fetchVerbList());
  }, [dispatch]);

  const handleTenseChange = (event) => {
    const selectedTenseName = event.target.value;

    setSelectedTense(selectedTenseName);

    if (selectedTenseName && exercises && exercises.tenses) {
      setSelectedTenseData(exercises.tenses[selectedTenseName] || []);
    }
  };

  const handleVerbChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedVerb(selectedValue);
    setSelectedTense("present");
    handleFetchExercises(selectedValue);
  };

  const handleFetchExercises = (id) => {
    dispatch(getVerbExercises(id));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
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
          {exercises &&
            exercises.tenses &&
            Object.keys(exercises?.tenses).map((tenseName) => (
              <option key={tenseName} value={tenseName}>
                {tenseName}
              </option>
            ))}
        </SelectStyled>
      </SelectContainer>

      {selectedTenseData?.length > 0 && (
        <PresentTense presentTenseVerbe={selectedTenseData} />
      )}
    </Container>
  );
};

export default VerbTenseExercise;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SelectContainer = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${(props) => props.theme.tertiaryBackground};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  label {
    font-size: 18px;
  }
`;

export const SelectStyled = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: #333;
  transition: border 0.3s, background-color 0.3s;
  width: 100%;
  max-width: 300px; /* Adjust the width as needed */
  cursor: pointer;

  &:focus {
    outline: none;
    border: 1px solid #007bff;
    background-color: #fff;
  }
`;
