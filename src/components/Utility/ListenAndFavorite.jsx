import React from "react";
import styled from "styled-components";
import Listen from "../Listen";
import Favorite from "../Favorite";
const ListenAndFavorite = () => {
  return (
    <ListenAndFavoriteContainer>
      <Listen />
      <Favorite />
    </ListenAndFavoriteContainer>
  );
};

export default ListenAndFavorite;
const ListenAndFavoriteContainer = styled.span`
  display: flex;
  max-width: 50px;
`;
