import React, { useState, useEffect } from "react";
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
import { SignLink, FormContainerApendix } from "../../../pages/User/Register";
import ConjugationExercise from "./ConjugationExercise";
import VerbTenseList from "../../grammer/verbe Tenses/VerbTenseList";
import { camelCaseToOriginal } from "./tenseList";
import { fetchTenses } from "../../../redux/slices/verbeTenses/verbeTenses";
import { Button } from "../../../Styles/globalStyles";
import VerbHeaderSection from "./VerbHeaderSection";
import TenseSelectionSection from "./TenseSelectionSection";
import CurrentTenseConjugation from "./CurrentTenseConjugation";
import LinkWithPreviousPath from "../../Utility/LinkWithPreviousPath";
const VerbConjugation = () => {
  const { verb: verbFromParams } = useParams();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const conjugated = queryParams.get("conjugated");

  const dispatch = useDispatch();
  const auth = useSelector((state) => state?.auth?.auth?.user) || {};
  const userId = auth?._id;
  const conjugationData =
    useSelector((state) => state.quizData.selectedVerbDetails) || [];
  // console.log("conjugationData", conjugationData);
  const isLoading = useSelector((state) => state.quizData.isLoading);
  const error = useSelector((state) => state.quizData.error);
  const tenseList = useSelector((state) => state.verbTenses.tenses) || [];
  // console.log("selectedTense in VerbConjugation", tenseList);

  const [showExercise, setShowExercise] = useState(false);
  const [currentSection, setCurrentSection] = useState(1);

  const [selectedTense, setSelectedTense] = useState(null);

  const [tenseIndex, setTenseIndex] = useState(0);
  const [selectedTenseData, setSelectedTenseData] = useState([]);

  useEffect(() => {
    dispatch(fetchTenses());
    // handleTenseChange();
  }, [dispatch]);

  useEffect(() => {
    setSelectedTense(tenseList[tenseIndex]);
  }, [tenseList]);
  // console.log("selectedTense in ", selectedTense);

  useEffect(() => {
    setSelectedTenseData(
      conjugationData?.exercise?.tenses[
        camelCaseToOriginal[selectedTense?.name]
      ] || []
    );
  }, [tenseIndex]);
  const handleNextSection = () => {
    if (currentSection < 3) {
      setCurrentSection(currentSection + 1);
      setSelectedTenseData(
        conjugationData?.exercise?.tenses[
          camelCaseToOriginal[selectedTense?.name]
        ] || []
      );
      // Use the updated tenseIndex to get the selected tense
      // console.log("Selected Tense in handleNextSection:", nextTense.name);
    } else if (currentSection === 3) {
      // console.log("currentSection", currentSection);
      setTenseIndex((prevIndex) => (prevIndex + 1) % tenseList?.length);

      const nextTense = tenseList[tenseIndex];
      setSelectedTense(nextTense);

      // Now, trigger handleTenseChange with the new tense name
      handleTenseChange(null, nextTense.name);
      setCurrentSection(1);
    } else {
      setCurrentSection(1);
    }
  };

  let exercise = null;
  useEffect(() => {
    if (conjugationData && typeof conjugationData.exercise === "object") {
      exercise = conjugationData.exercise.tenses[getSelectedTenseKey()];
    } else if (
      conjugationData &&
      typeof conjugationData.exercise === "string"
    ) {
      exercise = conjugationData.exercise;
    } else {
      // Handle other cases or provide a default value for exercise
    }
  }, [tenseIndex]);
  // console.log("exercise", exercise);
  // console.log("selectedTense", selectedTense);

  const toggleExercise = () => {
    setShowExercise((prevState) => !prevState);
    setSelectedTenseData(exercise);

    setSelectedTense(tenseList[0]);
  };

  const handleTenseChange = (event, nextTenseName) => {
    let selectedTenseName;
    let selectedTenseObject;
    // console.log("nextTenseName", nextTenseName);
    if (nextTenseName) {
      selectedTenseObject = tenseList.find(
        (tense) => tense.name === nextTenseName
      );
    } else {
      selectedTenseName = event.target.value;
      selectedTenseObject = tenseList.find(
        (tense) => tense.name === selectedTenseName
      );
    }

    setSelectedTense(selectedTenseObject);
  };

  // console.log("selectedTenseData", selectedTenseData);

  console.log("selectedTenseData", selectedTenseData);
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
    // console.log("selectedTense in getSelectedTenseKey", selectedTense);
    return camelCaseToOriginal[selectedTense?.name];
  };

  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  // console.log("selectedTenseData in parent", selectedTenseData);
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
            selectedTense={selectedTense}
            tenseList={tenseList}
            tenseIndex={tenseIndex}
            t={t}
          />

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
      {userId ? (
        <React.Fragment>
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
        </React.Fragment>
      ) : (
        <AuthLinks>
          <h1>{t("Pour pouvoir utiliser l'exercice")} </h1>
          <div>
            {t("Pas de compte?")}
            <SignLink to="/register">{t("Inscrivez-vous")} </SignLink>
            {t("Avez-vous déjà un compte?")}
            <LinkWithPreviousPath to="/login">
              {t("Connexion")}
            </LinkWithPreviousPath>
          </div>
        </AuthLinks>
      )}

      <Button onClick={handleNextSection}>{t("Suivante")}</Button>
    </VerbContainer>
  );
};
export default VerbConjugation;
const VerbContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 100%;
  /* outline: 1px solid yellow; */
  height: auto;
`;
const Section1 = styled.div`
  max-width: 100%;

  /* outline: 1px solid red; */
`;

const Section2 = styled.div`
  /* outline: 1px solid blue; */
  max-width: 100%;
`;

const Section3 = styled.div`
  /* outline: 1px solid green; */
  max-width: 100%;
`;

const TenseOverview = styled.div`
  display: flex;
  flex-direction: column;
`;
const AuthLinks = styled.div`
  /* width: 90%; */
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: column;
    outline: 1px solid red;
  }
`;
