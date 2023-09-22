import React from "react";
import styled from "styled-components";
import LogoutIcon from "../../assets/icons/logout-50.png";
import { useTranslation } from "react-i18next";
const Logout = ({ handleLogout }) => {
  const { t } = useTranslation();
  return (
    <LogoutBox onClick={handleLogout}>
      <button>
        {t("Se déconnecter")}
        <img src={LogoutIcon} alt="LogoutIcon" />
      </button>
    </LogoutBox>
  );
};

export default Logout;
const LogoutBox = styled.div`
  button {
    background-color: ${(props) => props.theme.primaryBackground};
    color: ${(props) => props.theme.primaryText};
    border: none;
    padding: 6px 10px;
    cursor: pointer;
    border-radius: 4px;

    cursor: pointer;
    border-radius: 4px;
    &:hover {
      outline: none;
      transform: scale(1.1);
    }
    img {
      max-width: 1rem;
      max-height: 1rem;
    }
  }
`;
