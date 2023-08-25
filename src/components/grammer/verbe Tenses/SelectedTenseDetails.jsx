import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSelectedTense } from "../../../redux/slices/verbeTenses/verbeTenses";
import Loading from "../../loading/Loading";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const SelectedTenseDetails = ({ selectedTenseId }) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  const selectedTenseCache = useSelector(
    (state) => state.verbTenses.selectedTenseCache
  );

  const selectedTense =
    useSelector((state) => state.verbTenses.selectedTense) || {};
  const isLoading = useSelector((state) => state.verbTenses.isLoading);

  useEffect(() => {
    if (!selectedTenseId || selectedTenseCache[selectedTenseId]) {
      return; // No need to fetch if already cached or no tense selected
    }
    dispatch(fetchSelectedTense(selectedTenseId));
  }, [dispatch, selectedTenseId, selectedTenseCache]);

  if (isLoading) {
    return <Loading />;
  }

  const cachedTenseData = selectedTenseCache[selectedTenseId]; // Fetch cached data
  if (!cachedTenseData) {
    return null; // Render nothing if no cached data for the selectedTenseId
  }

  const tenseNames = Object.keys(cachedTenseData);
  return (
    <SelectedTenseDetailsContainer>
      {tenseNames.map((tenseName) => {
        const tenseData = cachedTenseData[tenseName];
        return (
          Array.isArray(tenseData) && (
            <SelectedTenseBox key={tenseName}>
              <h1>{tenseData.name}</h1>
              {tenseData.map((details, index) => (
                <div key={index}>
                  <Details>{details.french}</Details>
                  {isGeorgian ? (
                    <DetailsSecond>{details.georgian}</DetailsSecond>
                  ) : (
                    details.english && (
                      <DetailsSecond>{details.english}</DetailsSecond>
                    )
                  )}
                  <ul>
                    {details.examples.map((example, exampleIndex) => (
                      <Example key={exampleIndex}>
                        {example.frenchExamp}
                        <ExampleSecond>
                          {isGeorgian
                            ? example.georgianExamp
                            : example.englishExamp}
                        </ExampleSecond>
                      </Example>
                    ))}
                  </ul>
                </div>
              ))}
            </SelectedTenseBox>
          )
        );
      })}
    </SelectedTenseDetailsContainer>
  );
};

export default SelectedTenseDetails;
const SelectedTenseDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  font-size: 1.4rem;
  background-color: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.primaryText};
`;
const SelectedTenseBox = styled.div`
  padding: 1rem;
  font-size: 1.4rem;

  border: 2px solid grey;
`;
const Details = styled.p`
  padding: 0.4rem;

  &:before {
    content: ${(props) =>
      props.theme.background === "#000000" ? '"🔹"' : '"🔸"'};
  }
`;
const DetailsSecond = styled(Details)`
  font-size: 1.1rem;
  color: ${(props) => props.theme.secondaryText};
  text-indent: 3rem;
  &:before {
    content: "- ";
  }
`;
const Example = styled.li`
  font-style: italic;
  padding: 0.4rem;
  font-size: 1.2rem;
`;
const ExampleSecond = styled(Example)`
  font-size: 1rem;
  list-style: none;
  color: ${(props) => props.theme.secondaryText};
  &:before {
    content: "- ";
  }
`;
