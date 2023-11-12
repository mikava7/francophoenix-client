import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Loading from "../../loading/Loading";
import { fetchVerbList } from "../../../redux/slices/verbeTenses/verbExerciseSlice";
import styled from "styled-components";
import { tenseList } from "../VerbConjugation/tenseList";
import instance from "../../../redux/api/axiosInstance";

const SelectedTenseExercise = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const listOfVerb =
    useSelector((state) => state.verbExercise.listOfVerb) || [];
  const loading = useSelector((state) => state.verbExercise.loading);

  const [selectedVerbs, setSelectedVerbs] = useState(["avoir"]);
  //   console.log("selectedVerbs", selectedVerbs);
  //   console.log("listOfVerb", listOfVerb);

  const [exerciseLength, setExerciseLength] = useState(1);
  const [selectedTense, setSelectedTense] = useState("present");

  const handleVerbs = (e) => {
    const verb = e.target.value;

    setSelectedVerbs((prevSelectedVerbs) => {
      if (!prevSelectedVerbs.includes(verb)) {
        return [...prevSelectedVerbs, verb];
      } else {
        return prevSelectedVerbs.filter((verb) => verb !== verb);
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
        console.error("Selected verbs must be an array");
        return;
      }
      console.log("Request data:", {
        selectedTense,
        sentencesLength: exerciseLength,
        selectedVerbs,
      });
      // Make a POST request to your backend endpoint
      const response = await instance.get("/verbs/check-your-knowledge", {
        params: {
          selectedTense,
          sentencesLength: exerciseLength,
          selectedVerbs,
        },
      });

      // Handle the response as needed
      console.log("Backend response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    dispatch(fetchVerbList());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Title>{t("Select Verb Tenses")}</Title>
      <CheckboxContainer>
        {listOfVerb.map((verb) => (
          <VerbItem
            key={verb.verb}
            selected={selectedVerbs.includes(verb.verb)}
          >
            <Checkbox
              type="checkbox"
              value={verb.verb}
              onChange={handleVerbs}
              checked={selectedVerbs.includes(verb.verb)}
            />
            {verb.verb}
          </VerbItem>
        ))}
      </CheckboxContainer>

      <DropdownContainer>
        <Label>{t("Select a tense")}:</Label>
        <SelectStyled onChange={handleTenseChange} value={selectedTense}>
          {tenseList.map((tense) => (
            <option key={tense.name} value={tense.name}>
              {tense.name}
            </option>
          ))}
        </SelectStyled>
      </DropdownContainer>

      <InputContainer>
        <Label>{t("Choose the number of sentences")}</Label>
        <NumberInput
          type="number"
          min="1"
          value={exerciseLength}
          onChange={(e) => setExerciseLength(e.target.value)}
        />
      </InputContainer>
      <Button onClick={handleSubmit}>Submit</Button>
    </Container>
  );
};

export default SelectedTenseExercise;

const Container = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 300px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const VerbItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  ${(props) =>
    props.selected &&
    `
    background-color: #007bff;
    color: #fff;
  `}
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const DropdownContainer = styled.div`
  margin-bottom: 20px;
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
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 100%;
  margin-top: 5px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
