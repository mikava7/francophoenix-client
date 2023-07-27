import { useState } from "react";
import Listen from "../../../Listen";
import Favorite from "../../../Favorite";
import { styled } from "styled-components";
import { useTranslation } from "react-i18next";
const VocabularyAccordion = ({
  frenchWords,
  secondLanguage,
  frenchExamples,
  secondLanguageExamples,
}) => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <AccordionContaner>
      {frenchWords.map((word, index) => (
        <AccordionItem key={index}>
          <AccordionHeader>
            <FrenchWord>{word}</FrenchWord>

            <SecondLanguageWord>
              {secondLanguage[index] || ""}
            </SecondLanguageWord>
            <IconsWrapper>
              <Listen />
              <Favorite />
            </IconsWrapper>
            <Example>{t("Example")}</Example>
            <ChevronIcon
              onClick={() => toggleAccordion(index)}
              isExpanded={index === expandedIndex}
            >
              &#9662;
            </ChevronIcon>
          </AccordionHeader>
          <AccordionContent isExpanded={index === expandedIndex}>
            <FrenchExamples>{frenchExamples[index]}</FrenchExamples>
            <SecondLanguageExamples>
              Second Language Example: {secondLanguageExamples[index]}
            </SecondLanguageExamples>
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionContaner>
  );
};

export default VocabularyAccordion;

const AccordionContaner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  font-size: 1.4rem;
`;
const AccordionItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  border-radius: 12px;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-width: 100%;

  cursor: pointer;
  background-color: ${(props) =>
    props.isExpanded ? "#e6af68" : props.theme.colors.text2};
  color: ${(props) => props.theme.colors.text};
  &:hover {
    background-color: #e6af68;
  }
  @media (max-width: 920px) {
    font-size: 1.3rem;
    padding: 0.8rem;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.6rem;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
    padding: 0.6rem;
  }
`;
const FrenchWord = styled.div`
  font-weight: bold;
  width: 35%;
  margin-left: 1rem;
  @media (max-width: 920px) {
    width: 30%;
    margin-left: 0.8rem;
  }
  @media (max-width: 768px) {
    width: 30%;
    margin-left: 0.6rem;
  }

  @media (max-width: 500px) {
    width: 30%;
    margin-left: 0.4rem;
  }
`;
const SecondLanguageWord = styled.div`
  width: 35%;
  @media (max-width: 920px) {
    width: 30%;
    margin-left: 0.8rem;
  }
  @media (max-width: 768px) {
    width: 30%;
    margin-left: 0.6rem;
  }

  @media (max-width: 500px) {
    width: 25%;
    margin-left: 0.4rem;
  }
`;
const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 50px;
  max-width: 100px;
  text-align: center;
  pointer-events: ${(props) => (props.isExpanded ? "none" : "auto")};
`;

const AccordionContent = styled.div`
  width: 100%;
  margin: 0 auto;
  max-height: ${(props) => (props.isExpanded ? "1000px" : "0")};
  opacity: ${(props) => (props.isExpanded ? "1" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  background-color: #0055a4;
  color: #ffffff;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 97% 100%, 3% 100%);
`;

const Example = styled.span`
  margin: 0 0.5rem 0 1rem;
`;
const ChevronIcon = styled.div`
  transform: ${(props) =>
    props.isExpanded ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  margin: 0 0.5rem;
`;
const FrenchExamples = styled.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem 2rem;
  margin-top: 0.5rem;
  background-color: #0055a4;
  color: #ffffff;
`;
const SecondLanguageExamples = styled.div`
  text-align: center;
  font-size: 1rem;
  padding: 0.5rem 2rem;
`;
