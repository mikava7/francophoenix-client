import { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { darkTheme } from "../../../Styles/theme";
import { useTranslation } from "react-i18next";
import { Link, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVerbDetails } from "../../../redux/slices/quizPictures/quizPictures";
import Loading from "../../loading/Loading";
import useListenWord from "../../../hooks/useListenWord";
import PresentTense from "../presentTense/PresentTense";
// import ListenImg from "../../../../public/icons/sound-50.png";
// import ListenImgGold from "../../../../public/icons/sound-64-gold.png";
import Listen from "../../Listen";
import { ListenIcon } from "../../../Styles/globalStyles";
import {
  SelectContainer,
  SelectStyled,
} from "../presentTense/VerbTenseExercise";
import ConjugationExercise from "./ConjugationExercise";
import VerbTenseList from "../../grammer/verbe Tenses/VerbTenseList";
import { camelCaseToOriginal } from "./tenseList";
import { fetchTenses } from "../../../redux/slices/verbeTenses/verbeTenses";
import { Button } from "../../../Styles/globalStyles";
const VerbConjugation = () => {
  const theme = useTheme();

  const { verb: verbFromParams } = useParams();
  const { handleListen, isActiveStates } = useListenWord();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const conjugated = queryParams.get("conjugated");

  const dispatch = useDispatch();
  const conjugationData =
    useSelector((state) => state.quizData.selectedVerbDetails) || [];

  const isLoading = useSelector((state) => state.quizData.isLoading);
  const error = useSelector((state) => state.quizData.error);
  const tenseList = useSelector((state) => state.verbTenses.tenses) || [];
  // console.log("selectedTense in VerbConjugation", tenseList);

  const [showExercise, setShowExercise] = useState(false);
  const [selectedTense, setSelectedTense] = useState(tenseList[0]);
  // console.log("selectedTense in VerbConjugation", selectedTense);

  useEffect(() => {
    dispatch(fetchTenses());
    // handleTenseChange();
  }, [dispatch]);
  useEffect(() => {
    let exercise = null;

    if (conjugationData && typeof conjugationData.exercise === "object") {
      exercise = conjugationData.exercise.tenses[selectedTense];
    } else if (
      conjugationData &&
      typeof conjugationData.exercise === "string"
    ) {
      exercise = conjugationData.exercise;
    } else {
      // Handle other cases or provide a default value for exercise
    }
  }, [dispatch]);

  // console.log("exercise", conjugationData);
  const [selectedTenseData, setSelectedTenseData] = useState([]);

  const toggleExercise = () => {
    setShowExercise((prevState) => !prevState);
    setSelectedTenseData(exercise);

    setSelectedTense(tenseList[0]);
  };
  const handleTenseChange = (event) => {
    const selectedTenseName = event.target.value;
    // console.log("selectedTenseName", selectedTenseName);
    const selectedTenseObject = tenseList.find(
      (tense) => tense.name === selectedTenseName
    );
    // console.log("selectedTenseObject", selectedTenseObject);

    setSelectedTense(selectedTenseObject);

    if (selectedTenseName && exercise) {
      setSelectedTenseData(
        conjugationData?.exercise?.tenses[selectedTenseName.name] || []
      );
    }
  };

  useEffect(() => {
    dispatch(fetchVerbDetails(verbFromParams));

    // console.log("fetched");
  }, [dispatch]);

  const { verb, verbEng, verbGeo, forms } = conjugationData;
  console.log("forms", forms);

  const frenchConjugations = {};

  for (const tenseKey in forms) {
    const tense = forms[tenseKey];

    if (Array.isArray(tense)) {
      frenchConjugations[tenseKey] = tense.map((item) => {
        return { french: item.french };
      });
    }
  }

  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  if (isLoading) {
    return <Loading />;
  }
  return (
    <VerbContainer>
      <VerbHeader>
        <h1>{verb?.charAt(0).toUpperCase() + verb?.slice(1)}</h1>
        <h3>{isGeorgian ? verbGeo : verbEng}</h3>
      </VerbHeader>

      <StyledSelect onChange={handleTenseChange} value={selectedTense?.name}>
        {tenseList.map((tense) => (
          <StyledOption key={tense.id} value={tense.name}>
            {tense.name}
          </StyledOption>
        ))}
      </StyledSelect>
      <h1>{t("Aperçu des temps verbaux")}</h1>
      <VerbTenseList selectedtense={selectedTense} />

      <TenseList>
        <h1>{t("Conjugaison")}</h1>
        {forms &&
          forms[camelCaseToOriginal[selectedTense?.name]]?.map(
            (tenseItem, index) => (
              <TenseContent key={index}>
                <li>
                  {/* Display the conjugation data here */}
                  <FirstLanguageBox
                    highlight={tenseItem?.french.includes(conjugated)}
                  >
                    <FirstLanguage>{tenseItem?.french}</FirstLanguage>
                    <ListenIcon
                      onClick={handleListen(tenseItem?.french)}
                      isActive={isActiveStates[index]}
                    >
                      <Listen />
                    </ListenIcon>
                  </FirstLanguageBox>
                  <SecondLanguage>
                    {isGeorgian ? tenseItem?.georgian : tenseItem?.english}
                  </SecondLanguage>
                </li>
              </TenseContent>
            )
          )}
      </TenseList>

      <ConjugationExercise frenchConjugations={frenchConjugations} />
      <>
        <SelectContainer>
          <label>{t("Sélectionnez un temps")}:</label>
          <SelectStyled onChange={handleTenseChange} value={selectedTense}>
            {/* {tenseList &&
              tenseList.map((tenseName) => (
                <option key={tenseName} value={tenseName}>
                  {tenseName}
                </option>
              ))} */}
          </SelectStyled>
        </SelectContainer>
        <PresentTense
          presentTenseVerbe={selectedTenseData}
          tense={selectedTense}
        />
      </>
    </VerbContainer>
  );
};
export default VerbConjugation;
const VerbContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  /* outline: 1px solid yellow; */
  height: auto;
`;

const VerbHeader = styled.div`
  margin-bottom: 1rem;
  /* background-color: ${(props) => props.theme.tertiaryBackground}; */
  h1 {
    text-align: center;
    &:before {
      content: ${(props) =>
        props.theme.background === "#000000" ? '"🔸"' : '"🔹"'};
    }
  }
`;

const StyledLink = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: #258ff383;
  transition: all 0.3s ease; /* Add a transition here */

  &:hover {
    transform: scale(1.03);
    color: #258ff3;
  }
`;

const TenseListItem = styled.div`
  margin-bottom: 1rem;
  outline: 2px solid ${(props) => props.theme.secondaryText};
  background-color: ${(props) => props.theme.secondaryBackground};
  margin: 1rem;
  width: 100%;
  h2 {
    background-color: ${(props) => props.theme.primaryBackground};
    padding: 1rem;
  }
`;
const TenseList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TenseContent = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
  }

  li {
    border-bottom: 1px solid #ccc;
    padding: 1rem;
    margin: 0.1rem 0;
  }
`;

const FirstLanguage = styled.p`
  margin-bottom: 0.2rem;
  &:before {
    content: ${(props) =>
      props.theme.background === "#000000" ? '"🔸"' : '"🔹"'};
    margin-right: 1rem;
  }
`;

const SecondLanguage = styled.span`
  color: ${(props) => props.theme.secondaryText};
  margin-left: 5rem;
`;

const FirstLanguageBox = styled.div`
  background: ${(props) =>
    props.highlight ? props.theme.highlight2 : "transparent"};
  border: 1px solid ${(props) => props.theme.highlight1};
  padding: 1rem;
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExerciseTag = styled.p`
  color: ${(props) => props.theme.secondaryText};
  transition: all 0.3s ease; /* Add a transition here */
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.primaryText};
  }
`;

const StyledSelect = styled.select`
  padding: 0.5rem;
  font-size: 16px;
  border: 2px solid ${(props) => props.theme.secondaryText};
  border-radius: 5px;
  background-color: ${(props) => props.theme.primaryBackground};
  color: ${(props) => props.theme.primaryText};
  width: 300px;
  margin: auto;
  margin-bottom: 1rem;
  outline: none;
`;

const StyledOption = styled.option`
  background-color: ${(props) => props.theme.primaryBackground};
  color: ${(props) => props.theme.primaryText};
`;
