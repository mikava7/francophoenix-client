import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { darkTheme } from "../../../Styles/theme";
import { useTranslation } from "react-i18next";
import { Link, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVerbDetails } from "../../../redux/slices/quizPictures/quizPictures";
import Loading from "../../loading/Loading";
import useListenWord from "../../../hooks/useListenWord";
// import ListenImg from "../../../../public/icons/sound-50.png";
// import ListenImgGold from "../../../../public/icons/sound-64-gold.png";
import Listen from "../../Listen";
import { ListenIcon } from "../../../Styles/globalStyles";
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
  useEffect(() => {
    dispatch(fetchVerbDetails(verbFromParams));
  }, [dispatch]);
  // if (!conjugationData) {
  //   // Data hasn't arrived yet, return a loading state or something else
  //   return <p>Loading...</p>;
  // }
  const { verb, verbEng, verbGeo, forms } = conjugationData;
  const { i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  if (isLoading) {
    return <Loading />;
  }
  return (
    <VerbContainer>
      <p>
        <Link to="/verbs/verb-tense-list">verb tense</Link>
      </p>

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
