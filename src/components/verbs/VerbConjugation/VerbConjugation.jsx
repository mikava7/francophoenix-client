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
import { tenseList } from "./tenseList";
import {
  SelectContainer,
  SelectStyled,
} from "../presentTense/VerbTenseExercise";
import ConjugationExercise from "./ConjugationExercise";
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
  const [showExercise, setShowExercise] = useState(false);
  const [selectedTense, setSelectedTense] = useState("present");

  let exercise = null;

  if (conjugationData && typeof conjugationData.exercise === "object") {
    exercise = conjugationData.exercise.tenses[selectedTense];
  } else if (conjugationData && typeof conjugationData.exercise === "string") {
    exercise = conjugationData.exercise;
  } else {
    // Handle other cases or provide a default value for exercise
  }

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
    setSelectedTense(selectedTenseName);

    if (selectedTenseName && exercise) {
      setSelectedTenseData(
        conjugationData?.exercise?.tenses[selectedTenseName] || []
      );
    }
  };
  useEffect(() => {
    dispatch(fetchVerbDetails(verbFromParams));

    // console.log("fetched");
  }, [dispatch]);

  const { verb, verbEng, verbGeo, forms } = conjugationData;
  // console.log("forms:", forms);

  const frenchConjugations = {};

  for (const tenseKey in forms) {
    const tense = forms[tenseKey];
    // console.log("tense:", tense);

    if (Array.isArray(tense)) {
      frenchConjugations[tenseKey] = tense.map((item) => {
        return { french: item.french };
      });
    }
  }

  // console.log("French Conjugations:", frenchConjugations);

  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  if (isLoading) {
    return <Loading />;
  }
  return (
    <VerbContainer>
      <ConjugationExercise frenchConjugations={frenchConjugations} />
      <StyledLink to="/verbs/verb-tense-list">
        {t("Présentation des temps des verbes")}
      </StyledLink>

      {exercise && typeof exercise !== "string" && (
        <ExerciseTag onClick={toggleExercise}>
          {t("Afficher l'exercice")}
        </ExerciseTag>
      )}
      {selectedTenseData && selectedTenseData?.length > 0 && showExercise && (
        <>
          <SelectContainer>
            <label>{t("Sélectionnez un temps")}:</label>
            <SelectStyled onChange={handleTenseChange} value={selectedTense}>
              {tenseList &&
                tenseList.map((tenseName) => (
                  <option key={tenseName} value={tenseName}>
                    {tenseName}
                  </option>
                ))}
            </SelectStyled>
          </SelectContainer>
          <PresentTense
            presentTenseVerbe={selectedTenseData}
            tense={selectedTense}
          />
        </>
      )}
      <VerbHeader>
        <h1>{verb?.charAt(0).toUpperCase() + verb?.slice(1)}</h1>
        <h3>{isGeorgian ? verbGeo : verbEng}</h3>
      </VerbHeader>

      <TenseList>
        {forms &&
          Object?.entries(forms).map(([tense, tenseData]) => (
            <TenseListItem key={tense}>
              <h2>
                {tense
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </h2>

              <TenseContent>
                <ul>
                  {tenseData?.map((tenseItem, index) => (
                    <li key={index}>
                      <FirstLanguageBox
                        highlight={tenseItem?.french.includes(conjugated)}
                      >
                        <FirstLanguage>{tenseItem?.french}</FirstLanguage>{" "}
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
                      {/* You can also add the Georgian translation here if needed */}
                    </li>
                  ))}
                </ul>
              </TenseContent>
            </TenseListItem>
          ))}
      </TenseList>
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

const TenseList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-between;
  width: 100%;
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

const TenseContent = styled.div`
  /* margin: 1rem; */
  ul {
    list-style: none;
    li {
      width: 90%;
      margin-bottom: 1rem;
      border-bottom: 1px solid ${(props) => props.theme.primaryText};
    }
  }
`;
const FirstLanguage = styled.p`
  margin-bottom: 1rem;
  &:before {
    content: ${(props) =>
      props.theme.background === "#000000" ? '"🔸"' : '"🔹"'};
  }
`;
const SecondLanguage = styled.span`
  margin-left: 2rem;
  color: ${(props) => props.theme.secondaryText};
  padding: 1rem;
`;
const FirstLanguageBox = styled.div`
  background: ${(props) =>
    props.highlight ? props.theme.highlight2 : "transparent"};

  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${(props) => props.theme.highlight1};
  padding-top: 0.4rem;
`;

const ExerciseTag = styled.p`
  color: ${(props) => props.theme.secondaryText};
  transition: all 0.3s ease; /* Add a transition here */
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.primaryText};
  }
`;
