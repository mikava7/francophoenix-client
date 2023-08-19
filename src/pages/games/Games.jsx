import React from "react";
import GameCard from "./GameCard";
import styled from "styled-components";

const gameCardData = [
  {
    description:
      "Test your vocabulary knowledge with QuizPictures. Identify correct words based on images and improve your language skills.",
    highlight: "/images/screenShots/games/pictureQuiz.png",
    link: "/quiz-pictures",
  },
  {
    description:
      "SentenceBuilderEx is a game that helps you practice building sentences. Select words to construct accurate sentences and enhance your language abilities.",
    highlight: "/images/screenShots/games/sentenceBuilder.png",
    link: "/sentence-builder-Ex",
  },
  {
    description:
      "exercise-article is a game that helps you practice french articles.",
    highlight: "/images/screenShots/games/LeLa.png",
    link: "/vocabulary-topics/exercise-article",
  },
];

const Games = () => {
  return (
    <CardContainer>
      {gameCardData.map((data) => {
        const { description, highlight, link } = data;
        return (
          <GameCard
            link={link}
            description={description}
            highlight={highlight}
          />
        );
      })}
    </CardContainer>
  );
};

export default Games;
const CardContainer = styled.div`
  display: flex;
  /* flex-direction: row; */
  margin: 1rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.flagAddon};

  border: 1px solid #ccc;
  flex-wrap: wrap;
  width: 100vw;
  height: 100%;
  justify-content: space-evenly;
  margin-bottom: 1rem;
`;
