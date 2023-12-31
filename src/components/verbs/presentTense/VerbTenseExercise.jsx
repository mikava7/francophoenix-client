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
  const [currentTenseIndex, setCurrentTenseIndex] = useState(0);
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
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SelectContainer = styled.div`
  margin: 0.1rem 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background: ${(props) => props.theme.tertiaryBackground}; */
  padding: 0.1rem 0.4rem;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  width: 290px;

  label {
    font-size: 17px;
  }
`;

export const SelectStyled = styled.select`
  padding: 10px;
  font-size: 16px;
  /* border: 1px solid red; */
  border-radius: 5px;
  background-color: ${({ theme }) => theme.tertiaryBackground};
  color: #333;
  transition: border 0.3s, background-color 0.3s;
  width: 240px;
  margin: 0 auto;
  cursor: pointer;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.highlight4};
    background-color: #fff;
  }
  &:active {
    background-color: #fff;
  }
`;
