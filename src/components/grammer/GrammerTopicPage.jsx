import { useState, useEffect } from "react";
import { fetchGrammer } from "../../redux/slices/grammer/grammerSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/Loading";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronIcon, AccordionContent } from "../../Styles/globalStyles";
const GrammerTopicPage = () => {
  const { BasicGrammerTopicId } = useParams();

  const { i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  const dispatch = useDispatch();
  const selectedGrammerTopic =
    useSelector((state) =>
      state.grammer.grammer.find((topic) => topic._id === BasicGrammerTopicId)
    ) || [];
  const isLoading = useSelector((state) => state.grammer.isLoading);
  const error = useSelector((state) => state.grammer.error);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [expandedIndex2, setExpandedIndex2] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const toggleAccordion2 = (index) => {
    setExpandedIndex2((prevIndex) => (prevIndex === index ? null : index));
  };
  useEffect(() => {
    dispatch(fetchGrammer());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  const {
    title: { titleFr, titleEn, titleGeo },
    description: { descriptionFr, descriptionEng, descriptionGeo },
    example: { exampleFr, exampleEn, exampleGeo },
  } = selectedGrammerTopic;
  const secondLanguageTitle = isGeorgian ? titleGeo : titleEn;
  const secondLanguageDescription = isGeorgian
    ? descriptionGeo
    : descriptionEng;

  const secondLanguageExample = isGeorgian ? exampleGeo : exampleEn;

  return (
    <GrammerTopicPageContainer>
      <TitleContainer>
        <h2>{titleFr}</h2>

        <span>{secondLanguageTitle}</span>
      </TitleContainer>
      <DescriptionContainer>
        <h2>Description</h2>
        {descriptionFr.length > 0 &&
          descriptionFr.map((description, index) => (
            <DescriptionBox>
              <ChevronBox>
                <span>{description}</span>
                <ChevronIcon
                  onClick={() => toggleAccordion(index)}
                  isExpanded={index === expandedIndex}
                >
                  &#9662;
                </ChevronIcon>
              </ChevronBox>
              <AccordionContent
                backgroundColor={"grey"}
                padding={"0.3rem 0"}
                isExpanded={index === expandedIndex}
              >
                {secondLanguageDescription[index]}
              </AccordionContent>
            </DescriptionBox>
          ))}
      </DescriptionContainer>
      <ExampleContainer>
        <h2>Example</h2>
        {exampleFr.length > 0 &&
          exampleFr.map((example, index) => (
            <ExampleBox>
              <ChevronBox>
                <div dangerouslySetInnerHTML={{ __html: example }} />

                <ChevronIcon
                  onClick={() => toggleAccordion2(index)}
                  isExpanded={index === expandedIndex2}
                >
                  &#9662;
                </ChevronIcon>
              </ChevronBox>
              <AccordionContent
                backgroundColor={"grey"}
                isExpanded={index === expandedIndex2}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: secondLanguageExample[index],
                  }}
                />
              </AccordionContent>
            </ExampleBox>
          ))}
      </ExampleContainer>
    </GrammerTopicPageContainer>
  );
};

export default GrammerTopicPage;
const GrammerTopicPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.secondaryBackground};
  @media (max-width: 920px) {
    min-width: 550px;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    min-width: 500px;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
    min-width: 400px;
  }
`;
const TitleContainer = styled.div``;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  max-width: 100%;
  font-size: 1.3rem;
  border-bottom: 3px solid black;

  cursor: pointer;
  margin-bottom: 2rem;
`;
const DescriptionBox = styled.div`
  border-bottom: 3px solid black;
  border-right: 3px solid black;
  margin: 0.3rem;
  min-width: 550px;

  span {
    padding: 0.5rem 1rem;
  }
  @media (max-width: 920px) {
    min-width: 500px;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    min-width: 480px;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
    min-width: 370px;
  }
`;
const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column; /* Set flex direction to column */

  justify-content: space-between;
  padding: 1rem;
  max-width: 100%;
  font-size: 1.3rem;

  cursor: pointer;
`;
const ExampleBox = styled.div`
  margin: 0.3rem;
  min-width: 550px;
  span {
    padding: 0.5rem 1rem;
  }
  @media (max-width: 920px) {
    min-width: 500px;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    min-width: 480px;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
    min-width: 370px;
  }
`;
const ChevronBox = styled.div`
  display: flex;
  justify-content: space-between;

  &:last-child {
    margin-left: auto;
  }
`;
