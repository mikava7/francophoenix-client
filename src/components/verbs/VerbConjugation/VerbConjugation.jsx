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
import VerbHeaderSection from "./VerbHeaderSection";
import TenseSelectionSection from "./TenseSelectionSection";
import CurrentTenseConjugation from "./CurrentTenseConjugation";
const VerbConjugation = () => {
  const { verb: verbFromParams } = useParams();

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
  const [currentSection, setCurrentSection] = useState(1);

  const [selectedTense, setSelectedTense] = useState(tenseList[0]);
  const [tenseIndex, setTenseIndex] = useState(0);

  // console.log("selectedTense in VerbConjugation", selectedTense);

  const handleNextSection = () => {
    if (currentSection < 3) {
      setCurrentSection(currentSection + 1);
    } else {
      // If we reach the end (Section 3), reset to Section 1
      setCurrentSection(1);
      // Optionally, you can update the selected tense here if needed
      setTenseIndex((prevIndex) => (prevIndex + 1) % tenseList?.length);
      setSelectedTense(tenseList[tenseIndex]);
    }
  };

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

  const [selectedTenseData, setSelectedTenseData] = useState([]);

  const toggleExercise = () => {
    setShowExercise((prevState) => !prevState);
    setSelectedTenseData(exercise);

    setSelectedTense(tenseList[0]);
  };
  const handleTenseChange = (event) => {
    const selectedTenseName = event.target.value;
    // console.log("selectedTenseName222222", selectedTenseName);
    const selectedTenseObject = tenseList.find(
      (tense) => tense.name === selectedTenseName
    );
    // console.log("selectedTenseObject", selectedTenseObject);

    setSelectedTense(selectedTenseObject);

    if (selectedTenseName) {
      setSelectedTenseData(
        conjugationData?.exercise?.tenses[getSelectedTenseKey()] || []
      );
    }
  };

  useEffect(() => {
    if (selectedTense) {
      setSelectedTenseData(
        conjugationData?.exercise?.tenses[getSelectedTenseKey()] || []
      );
    }
  }, []);
  // console.log("selectedTenseData", selectedTenseData);

  // console.log("selectedTenseData", selectedTenseData);
  // console.log("conjugationData", conjugationData);

  useEffect(() => {
    dispatch(fetchVerbDetails(verbFromParams));

    // console.log("fetched");
  }, [dispatch]);

  const { verb, verbEng, verbGeo, forms } = conjugationData;
  // console.log("forms", forms);

  const frenchConjugations = {};

  for (const tenseKey in forms) {
    const tense = forms[tenseKey];

    if (Array.isArray(tense)) {
      frenchConjugations[tenseKey] = tense.map((item) => {
        return { french: item.french };
      });
    }
  }
  const getSelectedTenseKey = () => {
    return camelCaseToOriginal[selectedTense?.name];
  };

  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  console.log("selectedTenseData in parent", selectedTenseData);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <VerbContainer>
      <VerbHeaderSection
        verb={verb}
        verbGeo={verbGeo}
        verbEng={verbEng}
        isGeorgian={isGeorgian}
      />
      {currentSection === 1 && (
        <Section1>
          <TenseSelectionSection
            handleTenseChange={handleTenseChange}
            tenseName={selectedTense?.name}
            tenseList={tenseList}
            t={t}
          />

          {/* <StyledSelect onChange={handleTenseChange} value={selectedTense?.name}>
        {tenseList.map((tense) => (
          <StyledOption key={tense.id} value={tense.name}>
            {tense.name}
          </StyledOption>
        ))}
      </StyledSelect> */}

          <TenseOverview>
            <h1>{t("Aperçu des temps verbaux")}</h1>
            <VerbTenseList selectedtense={selectedTense} />
          </TenseOverview>

          <CurrentTenseConjugation
            t={t}
            forms={forms}
            tenseName={selectedTense?.name}
            camelCaseToOriginal={camelCaseToOriginal}
            conjugated={conjugated}
            isGeorgian={isGeorgian}
          />
        </Section1>
      )}
      {currentSection === 2 && (
        <Section2>
          <ConjugationExercise
            frenchConjugations={frenchConjugations[getSelectedTenseKey()]}
            tense={selectedTense?.name}
          />
        </Section2>
      )}
      {currentSection === 3 && (
        <Section3>
          <PresentTense
            presentTenseVerbe={selectedTenseData}
            tense={selectedTense?.name}
          />
        </Section3>
      )}
      <Button onClick={handleNextSection}>Next</Button>
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
const Section1 = styled.div`
  outline: 1px solid red;
`;

const Section2 = styled.div`
  outline: 1px solid blue;
`;

const Section3 = styled.div`
  outline: 1px solid green;
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

const TenseOverview = styled.div`
  display: flex;
  flex-direction: column;
`;
