import React from "react";
import { legumes } from "../../data/test/legumes";
import styled from "styled-components";
import Listen from "../Listen";
const LegumesTTS = () => {
  // Function to speak the selected French word
  const speakWord = (word) => {
    responsiveVoice.speak(word, "French Female");
  };

  return (
    <div>
      {legumes.map((legume) => {
        const { french, georgian, english, imageURL } = legume;
        return (
          <LegumeCard key={french}>
            <h2 onClick={() => speakWord(french)}>{french}</h2>
            <div onClick={() => speakWord(french)}>
              <Listen />
            </div>
            <h3>{georgian}</h3>
            <div>
              <img src={imageURL} alt={french} />
            </div>
          </LegumeCard>
        );
      })}
    </div>
  );
};

export default LegumesTTS;

const LegumeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  margin: 0 auto;
  margin-bottom: 2rem;
  border: 2px solid grey;
  border-radius: 8px;

  img {
    max-width: 80%;
  }

  h2 {
    cursor: pointer;
  }
`;
