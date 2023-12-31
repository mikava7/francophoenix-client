import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/slices/auth/authSlice";
import styled, { keyframes } from "styled-components";
import userIcon from "../../icons/user-50.png";
import { StyledLink, Button } from "../../Styles/globalStyles";
import Loading from "../../components/loading/Loading";
import { useTranslation } from "react-i18next";
import Logout from "../../components/Utility/Logout";
const User = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const auth = useSelector((state) => state.auth.auth) || {};
  // console.log("auth", auth);
  const username = auth.user?.username; // Use optional chaining to handle potential undefined values
  const id = auth.user?._id; // Use optional chaining to handle potential undefined values

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logoutUser(id));
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <UserContainer onClick={toggleDropdown}>
      <UserAvatar>
        {/* Display user avatar icon here */}
        <UserIcon
          src={userIcon}
          alt="User Icon"
          isConnected={isAuthenticated}
        />
        <Dot isConnected={isAuthenticated} />
        <span>{isAuthenticated ? username : t("Pas connecté")}</span>
        <DropdownButton onClick={toggleDropdown}>
          &#9660; {/* Downward-pointing arrow */}
        </DropdownButton>
      </UserAvatar>

      <DropdownContent>
        {/* Show the dropdown when the user is authenticated */}

        {isDropdownOpen && (
          <DropdownList>
            {/* Display different links based on authentication status */}
            {isAuthenticated ? (
              <>
                <DropdownItem>
                  <StyledProfileLink to="/profile-page">
                    {t("Profil")}
                    <UserAvatar>
                      {/* Display user avatar icon here */}
                      <img src={userIcon} alt="User Icon" />
                    </UserAvatar>
                  </StyledProfileLink>
                </DropdownItem>
                <Logout handleLogout={handleLogout} />
              </>
            ) : (
              <>
                <DropdownItem>
                  <StyledLink to="/login">{t("Connexion")}</StyledLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledLink to="/register">{t("Inscription")}</StyledLink>
                </DropdownItem>
              </>
            )}
          </DropdownList>
        )}
      </DropdownContent>
    </UserContainer>
  );
};

export default User;
export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const pulsateAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const UserName = styled.div`
  font-weight: bold;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: ${(props) => props.theme.primaryText};
`;

export const DropdownContent = styled.div`
  position: relative;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 30px;
  right: 50%;
  background-color: ${(props) => props.theme.primaryBackground};
  /* color: ${(props) => props.theme.primaryBackground}; */

  border: 1px solid #ccc;
  border-radius: 5px;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.li`
  cursor: pointer;
  width: 100%;
  color: red;
`;
const StyledProfileLink = styled(StyledLink)`
  display: flex;

  gap: 2rem;
  cursor: pointer;
`;
export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  width: 140px;
  /* outline: 1px solid blue; */
  font-size: 0.8rem;
  background-color: ${(props) => props.theme.primaryBackground};
  padding: 0.1rem;
  @media (max-width: 520px) {
    width: 100px;

    > span {
      visibility: hidden;
      height: 0;
      width: 0;
    }
  }
`;

export const UserIcon = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 10px;
  background: white;
  outline: 1px solid ${(props) => (props.isConnected ? "green" : "red")};

  padding: 0.4rem;
  margin: 0.2rem;
`;

export const Dot = styled.div`
  position: absolute;
  bottom: 12%;
  left: 28%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: ${pulsateAnimation} 1s infinite;
  background-color: ${(props) => (props.isConnected ? "green" : "red")};
  @media (max-width: 520px) {
    left: 40%;
  }
`;
