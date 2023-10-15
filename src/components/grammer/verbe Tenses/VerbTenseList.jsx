import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTenses } from "../../../redux/slices/verbeTenses/verbeTenses";
import Loading from "../../loading/Loading";
import styled from "styled-components";
import { Button } from "../../../Styles/globalStyles";
import { useTranslation } from "react-i18next";
import TenseDescription from "../../verbs/tenses/TenseDescription";

const VerbTenseList = () => {
  const dispatch = useDispatch();
  const tenses = useSelector((state) => state.verbTenses.tenses) || [];
  const isLoading = useSelector((state) => state.verbTenses.isLoading);
  const { t } = useTranslation();

  // State to keep track of the selected tense name
  const [selectedTenseId, setSelectedTenseId] = useState(null);

  useEffect(() => {
    dispatch(fetchTenses());
  }, [dispatch]);

  const tenseNames = tenses.map((tense) => tense.name);

  const handleTenseClick = (tenseId) => {
    setSelectedTenseId(tenseId);
  };
  const selectedTense = tenses.find((tense) => tense._id === selectedTenseId);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <TensesNameContainer>
      <h2>{t("Les temps")}</h2>
      <ul>
        {tenses.map((tense) => (
          <li key={tense._id}>
            <TenseButton onClick={() => handleTenseClick(tense._id)}>
              {tense.name}
            </TenseButton>
          </li>
        ))}
      </ul>
      {selectedTense && <TenseDescription tenseData={selectedTense} />}
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
