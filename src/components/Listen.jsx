import { useState } from "react";
import listen from "../assets/icons8-sound-50.png";
import { ListenIcon } from "../Styles/globalStyles";

const Listen = ({ handleListen, isActive, word }) => {
  const speakWord = () => {
    responsiveVoice.speak(word, "French Female");
  };
  return (
    <ListenIcon onClick={() => speakWord()} isActive={isActive}>
      <img src={listen} alt="listen" onClick={handleListen} />
    </ListenIcon>
  );
};

export default Listen;
