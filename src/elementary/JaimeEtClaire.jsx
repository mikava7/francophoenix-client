import { useState } from "react";
import Dialogues from "./Dialogue/Dialogues";
import NewPhrases from "./NewPhrases";
import DialogueExercise from "./Dialogue/DialogueExercise";
import SentenceBuilder from "./Dialogue/SentenceBuilder";
import { Continue, LessonContainer } from "./style-elementaryComponant";
import Grammer from "./Dialogue/Grammer";

const JaimeEtClaire = () => {
  const [lessonsCurrentIndex, setLessonsCurrentIndex] = useState(0);
  const [currentComponent, setCurrentCompoonent] = useState(0);

  const handleNext = () => {
    setCurrentCompoonent((prevIndex) => {
      if (prevIndex === components.length - 1) {
        setLessonsCurrentIndex((prevIndex) => prevIndex + 1); // Increase execution count
        return 0; // Reset to the first component
      } else {
        return prevIndex + 1;
      }
    });
  };

  const components = [
    <Grammer
      lessonsCurrentIndex={lessonsCurrentIndex}
      Continue={<Continue onClick={handleNext}>Continue</Continue>}
    />,
    <Dialogues
      lessonsCurrentIndex={lessonsCurrentIndex}
      Continue={<Continue onClick={handleNext}>Continue</Continue>}
    />,
    <DialogueExercise
      lessonsCurrentIndex={lessonsCurrentIndex}
      Continue={<Continue onClick={handleNext}>Continue</Continue>}
    />,
    <SentenceBuilder
      lessonsCurrentIndex={lessonsCurrentIndex}
      Continue={<Continue onClick={handleNext}>Continue</Continue>}
    />,
    <NewPhrases
      lessonsCurrentIndex={lessonsCurrentIndex}
      Continue={<Continue onClick={handleNext}>Continue</Continue>}
    />,
  ];
  return (
    <div>
      <LessonContainer>{components[currentComponent]}</LessonContainer>
    </div>
  );
};

export default JaimeEtClaire;
