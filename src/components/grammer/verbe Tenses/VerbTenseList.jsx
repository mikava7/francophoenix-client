import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTenseNames } from "../../../redux/slices/verbeTenses/verbeTenses";
import Loading from "../../loading/Loading";
import styled from "styled-components";
import { Button } from "../../../Styles/globalStyles";
import { useTranslation } from "react-i18next";
const VerbTenseList = ({ onTenseClick }) => {
  const dispatch = useDispatch();
  const tenseNames = useSelector((state) => state.verbTenses.tenseNames) || [];
  const isLoading = useSelector((state) => state.verbTenses.isLoading);
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(fetchTenseNames());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <TensesNameContainer>
      <h2>{t("Les temps")}</h2>
      <ul>
        {tenseNames.map((tense) => (
          <li key={tense._id}>
            <TenseButton onClick={() => onTenseClick(tense._id)}>
              {tense.tense}
            </TenseButton>
          </li>
        ))}
      </ul>
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
