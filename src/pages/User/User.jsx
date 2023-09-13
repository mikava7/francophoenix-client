import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/slices/auth/authSlice";
import styled from "styled-components";
import userIcon from "../../icons/user-50.png";
import { StyledLink, Button } from "../../Styles/globalStyles";
import Loading from "../../components/loading/Loading";
import { useTranslation } from "react-i18next";
const User = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const auth = useSelector((state) => state.auth.auth) || {};
  const username = auth.user?.username; // Use optional chaining to handle potential undefined values
  const id = auth.user?._id; // Use optional chaining to handle potential undefined values

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logoutUser(id));
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <UserContainer onClick={toggleDropdown}>
      <UserName>{/* Display user's name */}</UserName>
      <UserAvatar>
        {/* Display user avatar icon here */}
        <img src={userIcon} alt="User Icon" />
        {isAuthenticated ? username : t("Pas connecté")}
      </UserAvatar>

      <DropdownContent>
        {/* Show the dropdown when the user is authenticated */}
        {isAuthenticated && (
          <DropdownButton onClick={toggleDropdown}>
            &#9660; {/* Downward-pointing arrow */}
          </DropdownButton>
        )}
        {isDropdownOpen && (
          <DropdownList>
            {/* Display different links based on authentication status */}
            {isAuthenticated ? (
              <>
                <DropdownItem>
                  <StyledProfileLink to="/">
                    {t("Profil")}
                    <UserAvatar>
                      {/* Display user avatar icon here */}
                      <img src={userIcon} alt="User Icon" />
                    </UserAvatar>
                  </StyledProfileLink>
                </DropdownItem>
                <DropdownItem>
                  <Button onClick={handleLogout}> {t("Se déconnecter")}</Button>
                </DropdownItem>
              </>
            ) : (
              <>
                <DropdownItem>
                  <StyledLink to="/register">{t("Inscription")}</StyledLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledLink to="/login">{t("Connexion")}</StyledLink>
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

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem 0.8rem;
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 10px;
    background: white;
    padding: 0.4rem;
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
`;

const DropdownContent = styled.div`
  position: relative;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 30px;
  right: 50%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;
const StyledProfileLink = styled(StyledLink)`
  display: flex;
  background-color: #e0fcdb;
  gap: 2rem;
  cursor: pointer;
`;
