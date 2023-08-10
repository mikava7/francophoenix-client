import styled from "styled-components";

export const LessonContainer = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Continue = styled.button`
  background-color: #70ff41;
  color: black;
  width: 23rem;
  font-weight: bold;
  margin: 0 auto;
  padding: 1rem 2rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 2rem;
  letter-spacing: 2px;
`;

export const DialogueSection = styled.section`
  display: flex;
  justify-content: space-between;
  /* background-color: white; */
  flex-direction: column;
  width: 100%;
  /* height: 100vh; */
  margin: 0 auto;
`;

export const MessageContainer = styled.div`
  display: flex;
  margin: 0 3rem;
  justify-content: ${(props) =>
    props.index % 2 === 0 ? "flex-start" : "flex-end"};
  align-items: center;
`;

export const JaimeMessage = styled.li`
  display: flex;
  background-color: #3e3efa;
  color: white;
  padding: 1rem;
  border-radius: 3rem 0 2rem 0;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ClaireMessage = styled.li`
  display: flex;
  color: white;
  background-color: #4daffa;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0 3rem 0 2rem;
  align-items: center;
  justify-content: flex-end;
`;

export const SpeakerImage = styled.img`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  margin-right: 1rem;
  margin-left: 1rem;
`;

export const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MessageText = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const TranslationText = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
`;
export const ContinueButtonWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 3rem;
`;

//Dialogue Exercises

export const DialogueExerciseContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  text-align: center;
`;
export const DialogueExerciseBox = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 2rem;
  padding-left: 3rem;
  gap: 1rem 2rem;

  gap: 5rem;
  div {
    display: flex;

    p {
      background-color: #0c1c29;
      padding: 2rem;
      color: white;
      font-size: 1.6rem;
      border-radius: 1rem;
    }
  }
`;
const getOptionBackgroundColor = (props) => {
  if (props.showAnswers && props.answers === props.option) {
    if (props.questionCorrectAnswer && props.showAnswers) {
      return "green"; // selected wrong
    } else {
      return "red"; // selected correct
    }
  } else if (props.usersAnswer && props.answers === props.option) {
    return "violet"; // selected
  } else if (props.showAnswers && props.allAnswersCorrect) {
    return "green"; // all answers correct
  } else {
    return "white";
  }
};

export const DialogueOptionButton = styled.button`
  border-radius: 8px;
  font-size: 1.4rem;
  padding: 0.5rem;
  cursor: pointer;
  gap: 1rem;
  color: black;
  background-color: ${(props) => getOptionBackgroundColor(props)};

  &:first-child {
    margin-right: 0.6rem;
    margin-left: 0.2rem;
  }

  &:hover {
    transform: scale(1.1);
    color: rgb(40, 175, 253);
  }
`;
export const SubmitDialogue = styled.button`
  background-color: #70ff41;
  background-color: #41c3ff;
  color: black;
  width: 20rem;
  font-weight: bold;

  margin: 0 auto;
  padding: 1rem 2rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 2rem;
  letter-spacing: 2px;
`;
export const PlayButton = styled.div`
  width: 10rem;
  margin: 0 auto;
  padding: 1rem;
  background-color: #c3ffaf;
  border: 2px solid slateblue;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  span {
    font-size: 2rem;
    margin-left: 1rem;
  }
`;

// ============ Sentence Builder Component Styles ============

// ... Sentence Builder component Styles goes here ...

// =========================================================

export const BuildBoxContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;

  align-items: center;
  flex-direction: column;
  background-color: white;
`;
export const BuildBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TopBox = styled.div`
  border: 2px solid slateblue;
  margin: 0 auto;
  width: 30rem;
  height: 10rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  padding: 1rem;
  position: relative;
  display: flex; /* Use flexbox */
  flex-wrap: wrap; /* Allow flex items to wrap to the next line */
`;

export const TopWord = styled.span`
  text-align: center;
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 2rem;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 3rem;
`;
export const BottomBox = styled.div`
  background-color: #ffe1e1;

  margin: 0 auto;
  width: 30rem;
  height: 10rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  padding: 1rem;
  position: relative;
  display: flex; /* Use flexbox */
  flex-wrap: wrap; /* Allow flex items to wrap to the next line */
`;

export const BottomWord = styled.button`
  background-color: #ffe1e1;
  text-align: center;
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 2rem;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 3rem;
  border: none;
  display: ${(props) => (props.isSelected ? "none" : "block")};
`;
// ============ New Phrases Component Styles ============

// ... New Phrases component Styles goes here ...

// =========================================================

//
export const Phrasessection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
`;
export const PhrasesContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 35% 35%;
  justify-content: space-between;
  width: 100%;

  margin: 0 3rem;
`;
export const PhrasesBox = styled.div`
  display: flex;
  color: white;
  background-color: #0c1c29;
  padding: 1rem;
  margin: 1rem;
  border-radius: 30px;
  margin-right: 3rem;
  /* width: 30rem; */
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const OriginalPhrase = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  width: 100%;
  font-size: 1.6rem;
  font-weight: bold;
  border-radius: 30px;
  padding: 0 1rem;
  > :first-child {
    margin-right: 0.6rem;
  }
  > :last-child {
    margin-left: auto;
    margin-right: 2rem;
  }
`;

export const FavoriteBox = styled.div`
  display: flex;

  margin-right: auto;
  background-color: red;
  justify-content: flex-end;
`;
export const PhraseTranslation = styled.div`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
  margin-left: 3rem;
  width: 100%;
`;
