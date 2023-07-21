import { useState } from "react";
import listen from "../assets/icons8-sound-50.png";
import { ListenIcon } from "../Styles/globalStyles";

const Listen = () => {
  const [isActive, setIsActive] = useState(false);

  const handleListen = () => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 3000);
  };

  return (
    <ListenIcon isActive={isActive}>
      <img src={listen} alt="listen" onClick={handleListen} />
    </ListenIcon>
  );
};

export default Listen;
