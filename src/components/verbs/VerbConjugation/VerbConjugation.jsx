import React, { useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVerbDetails } from "../../../redux/slices/quizPictures/quizPictures";
import Loading from "../../loading/Loading";
const VerbConjugation = () => {
  const { verb } = useParams();
  console.log("tooltipContent in VerbConjugation", verb);
  const dispatch = useDispatch();
  const conjugationData =
    useSelector((state) => state.quizData.selectedVerbDetails) || [];
  const isLoading = useSelector((state) => state.quizData.isLoading);
  const error = useSelector((state) => state.quizData.error);
  useEffect(() => {
    dispatch(fetchVerbDetails(verb));
  }, []);
  if (!conjugationData) {
    // Data hasn't arrived yet, return a loading state or something else
    return <p>Loading...</p>;
  }
  const { verbs, definition, forms } = conjugationData;
  const { i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";

  if (isLoading) {
    return <Loading />;
  }
  return (
    <VerbContainer>
      <VerbHeader>
        <h1>verb{verbs}</h1>
        <h3>{definition}</h3>
      </VerbHeader>

      <TenseList>
        {forms &&
          Object?.entries(forms).map(([tense, tenseData]) => (
            <TenseListItem key={tense}>
              <h2>{tense}</h2>
              <TenseContent>
                <ul>
                  {tenseData?.map((tenseItem, index) => (
                    <li key={index}>
                      {tenseItem?.french}
                      <SecondLanguage>{tenseItem?.english}</SecondLanguage>
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
  padding: 1rem;
  width: 300px;
  height: auto;
`;

const VerbHeader = styled.div`
  margin-bottom: 1rem;
`;

const TenseList = styled.div`
  display: flex;
  flex-direction: column;
`;

const TenseListItem = styled.div`
  margin-bottom: 1rem;
`;

const TenseContent = styled.div``;

const SecondLanguage = styled.span`
  margin-left: 0.5rem;
  color: ${(props) => props.theme.secondaryText};
`;
