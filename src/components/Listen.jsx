import { useState } from "react";
import listen from "../assets/icons8-sound-50.png";
import { ListenIcon } from "../Styles/globalStyles";

const Listen = ({ handleListen, isActive }) => {
  return (
    <ListenIcon isActive={isActive}>
      <img src={listen} alt="listen" onClick={handleListen} />
    </ListenIcon>
  );
};

export default Listen;
