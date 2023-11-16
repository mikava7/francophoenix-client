import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Loading from "../../loading/Loading";
import { fetchVerbList } from "../../../redux/slices/verbeTenses/verbExerciseSlice";
import styled from "styled-components";
import { tenseList } from "../VerbConjugation/tenseList";
import instance from "../../../redux/api/axiosInstance";
import SentenceBuilderEx from "../../sentenceBuilder/SentenceBuilderEx";
import { shuffleArray, convertTensesToSentences } from "../../Utility/utils";
const SelectedTenseExercise = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const listOfVerb =
    useSelector((state) => state.verbExercise.listOfVerb) || [];
  const loading = useSelector((state) => state.verbExercise.loading);

  const [selectedVerbs, setSelectedVerbs] = useState([
    "être",
    "avoir",
    "faire",
    "aller",
    "dire",
  ]);

  const [exerciseLength, setExerciseLength] = useState(1);
  const [selectedTense, setSelectedTense] = useState("present");
  const [selectedTenseData, setSelectedTenseData] = useState([]);
  const [sentenceData, setsentenceData] = useState([]);
  const [showExercise, setShowExercise] = useState(false);
  //
  const handleVerbs = (e) => {
    const verb = e.target.value;

    setSelectedVerbs((prevSelectedVerbs) => {
      if (!prevSelectedVerbs.includes(verb)) {
        return [...prevSelectedVerbs, verb];
      } else {
        return prevSelectedVerbs.filter(
          (selectedVerb) => selectedVerb !== verb
        );
      }
    });
  };

  const handleTenseChange = (event) => {
    const selectedTenseName = event.target.value;
    setSelectedTense(selectedTenseName);
  };

  const handleSubmit = async () => {
    try {
      // Check if selectedVerbs is an array
      if (!Array.isArray(selectedVerbs)) {
        // console.error("Selected verbs must be an array");
        return;
      }

      // Make a POST request to your backend endpoint
      const response = await instance.get("/verbs/check-your-knowledge", {
        params: {
          selectedTense,
          sentencesLength: exerciseLength,
          selectedVerbs,
        },
      });

      setSelectedTenseData(response.data.exercises);

      // console.log("selectedTenseData:", selectedTenseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    // Perform the transformation once selectedTenseData is updated
    if (selectedTenseData && selectedTenseData.length > 0) {
      const flattenedSentences = selectedTenseData.flatMap((exercise) =>
        exercise.sentences.map((sentence) => {
          // Replace "____" with the correct answer
          const sentenceWithAnswer = convertTensesToSentences([sentence])[0];

          const sentenceWithoutPeriods = sentenceWithAnswer.replace(/\./g, "");

          // Split the sentence into an array of words
          const shuffledWords = sentenceWithoutPeriods.split(" ");
          shuffleArray(shuffledWords);

          return {
            id: sentence.id,
            sentence: sentenceWithAnswer,
            words: shuffledWords,
          };
        })
      );

      setsentenceData(flattenedSentences);

      // Now you can use flattenedSentences as needed
    }
  }, [selectedTenseData]);

  // console.log("selectedTenseData:", selectedTenseData);

  useEffect(() => {
    dispatch(fetchVerbList());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Container>
        <Title>{t("Select Verb Tenses")}</Title>
        <ButtonContainer>
          <SelectAll
            onClick={() =>
              setSelectedVerbs(listOfVerb.map((verb) => verb.verb))
            }
          >
            {t("Tout sélectionner")}
          </SelectAll>

          <ClearAll onClick={() => setSelectedVerbs([])}>
            {t("Supprimer les sélections")}
          </ClearAll>
        </ButtonContainer>
        <CheckboxContainer>
          {listOfVerb.map((verb) => (
            <VerbItem
              key={verb.verb}
              selected={selectedVerbs.includes(verb.verb)}
            >
              <label>
                <Checkbox
                  type="checkbox"
                  value={verb.verb}
                  onChange={handleVerbs}
                  checked={selectedVerbs.includes(verb.verb)}
                />
                {verb.verb}
              </label>
            </VerbItem>
          ))}
        </CheckboxContainer>

        <DropdownContainer>
          <Label>{t("Sélectionnez un temps")}:</Label>
          <SelectStyled onChange={handleTenseChange} value={selectedTense}>
            {tenseList.map((tense) => (
              <option key={tense.name} value={tense.name}>
                {tense.name}
              </option>
            ))}
          </SelectStyled>
        </DropdownContainer>

        <InputContainer>
          <Label>
            {t("Choisissez le nombre de phrases pour chaque verbe")}
          </Label>
          <NumberInput
            type="number"
            min="1"
            value={exerciseLength}
            onChange={(e) => setExerciseLength(e.target.value)}
          />
        </InputContainer>
        <SubmitButton onClick={handleSubmit}>{t("Choisir")}</SubmitButton>
      </Container>

      <div>
        {sentenceData.length > 0 && (
          <SentenceBuilderEx isActive={true} sentenceData={sentenceData} />
        )}
      </div>
    </>
  );
};

export default SelectedTenseExercise;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #ddd;
  background-color: ${({ theme }) => theme.secondaryBackground};
  width: 370px;

  border-radius: 0.4rem;
  margin: 1rem auto;
  @media (max-width: 540px) {
    width: 270px;
  }
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid ${({ theme }) => theme.tertiaryBackground};
  padding-bottom: 0.4rem;
`;

const VerbItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0.4rem;
  background-color: ${({ theme }) => theme.tertiaryBackground};
  padding: 0.2rem;
  cursor: pointer;
  transition: background-color 0.3s;

  background-color: ${(props) =>
    props.selected ? props.theme.highlight4 : "none"};
  color: ${(props) => (props.selected ? props.theme.primayText : "none")};
  border-radius: 4px;
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const DropdownContainer = styled.div`
  margin: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.tertiaryBackground};
  padding: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const SelectStyled = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: #333;
  transition: border 0.3s, background-color 0.3s;
  width: 100%;
  margin-top: 5px;
  cursor: pointer;

  &:focus {
    outline: none;
    border: 1px solid #007bff;
    background-color: #fff;
  }
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const NumberInput = styled.input`
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  border-radius: 0.2rem;
  border: 1px solid #ddd;
  /* width: 80%; */
  margin-top: 5px;
`;
const SubmitButton = styled.button`
  padding: 0.4rem;
  font-size: 1rem;
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.secondaryText};
  color: ${({ theme }) => theme.secondaryBackground};
  margin-left: auto;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.primaryText};
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;
const SelectAll = styled(SubmitButton)``;

const ClearAll = styled(SubmitButton)``;
