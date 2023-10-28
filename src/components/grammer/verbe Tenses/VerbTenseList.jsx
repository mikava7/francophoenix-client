import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTenses } from "../../../redux/slices/verbeTenses/verbeTenses";
import Loading from "../../loading/Loading";
import styled from "styled-components";
import { Button } from "../../../Styles/globalStyles";
import { useTranslation } from "react-i18next";
import TenseDescription from "../../verbs/tenses/TenseDescription";
import VerbConjugation from "../../verbs/VerbConjugation/VerbConjugation";
const VerbTenseList = ({ selectedtense }) => {
  // console.log("selectedtense in VerbTenseList", selectedtense);
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.verbTenses.isLoading);
  const { t } = useTranslation();

  // State to keep track of the selected tense name
  const [selectedTenseId, setSelectedTenseId] = useState(selectedtense?.id);

  useEffect(() => {
    dispatch(fetchTenses());
  }, [dispatch]);

  const handleTenseClick = (tenseId) => {
    setSelectedTenseId(tenseId);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <TensesNameContainer>
      {/* <h2>{t("Les temps")}</h2> */}

      {selectedtense && (
        <TenseDescription
          tenseData={selectedtense}
          selectedTense={selectedtense?.name}
        />
      )}
    </TensesNameContainer>
  );
};
export default VerbTenseList;

const TensesNameContainer = styled.div`
  flex-direction: column;
  display: flex;
  ul {
    list-style: none;
    display: inline-flex;
    flex-wrap: wrap;
    li {
      margin: 0.2rem;
      button {
        margin: 0.2rem;
      }
    }
  }
`;

const TenseButton = styled(Button)`
  width: auto;
`;
