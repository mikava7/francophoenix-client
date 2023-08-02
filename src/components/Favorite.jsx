import { useState } from "react";
import star from "../assets/starFilled.png";
import { StarIcon } from "../Styles/globalStyles";

const Favorite = ({ isStarred, handleFavorite }) => {
  return (
    <StarIcon isStarred={isStarred}>
      <img src={star} alt="star" onClick={handleFavorite} />
    </StarIcon>
  );
};

export default Favorite;
