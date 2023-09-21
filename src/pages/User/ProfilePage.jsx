import { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import editIconBlue from "../../assets/icons/edit-32_blue.png";
import editIconOrange from "../../assets/icons/edit-32_orange.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { FetchupdateUser } from "../../redux/slices/auth/userSlice";
import { darkTheme } from "../../Styles/theme";
const ProfilePage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const theme = useTheme();
  const editIcon = theme === darkTheme ? editIconBlue : editIconOrange;
  const [newUsername, setNewUsername] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const auth = useSelector((state) => state.auth.auth) || {};
  const username = auth.user?.username; // Use optional chaining to handle potential undefined values
  const role = auth.user?.role; // Use optional chaining to handle potential undefined values
  const id = auth.user?._id; // Use optional chaining to handle potential undefined values
  const user = useSelector((state) => state.user.user);
  const updatedUser = user.updatedUser;

  useEffect(() => {
    if (user) {
      setNewUsername(user.username);
    }
  }, [user]);
  const handleEdit = () => {
    const trimmedNewUsername = newUsername.trim();
    if (trimmedNewUsername.length < 3) {
      // Display an error message to inform the user
      alert(t("Pseudonyme doit comporter au moins 3 caractères"));
      return;
    }

    console.log({ id, newUsername: trimmedNewUsername });
    dispatch(FetchupdateUser({ id, newUsername: trimmedNewUsername }));
    setNewUsername("");
    setIsEditing(false);
  };
  //   console.log("auth", auth);
  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileName>
          <h5>{t("Nom")}</h5>
          <p>
            {isEditing ? (
              <StyledInput
                type="text"
                placeholder="New username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            ) : updatedUser ? (
              updatedUser.username
            ) : (
              username
            )}
            {isEditing ? (
              <button onClick={handleEdit}>save</button>
            ) : (
              <EditIcon
                src={editIcon}
                alt="Edit Icon"
                onClick={() => setIsEditing(true)}
              />
            )}
          </p>
        </ProfileName>
        {/* <ProfileEmail>{email}</ProfileEmail> */}

        <ProfileStatus>
          {" "}
          <span>{t("Statut")}:</span>
          <span>{role}</span>
        </ProfileStatus>
      </ProfileHeader>
      <FlashcardLink to="/vocabulary/flashcards">
        {t("Entraîneur de cartes mémoire")}
      </FlashcardLink>
    </ProfileContainer>
  );
};

export default ProfilePage;

const ProfileContainer = styled.div`
  background-color: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.primaryText};
  margin: 2rem;
  padding: 20px;
  width: 350px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(20, 12, 12, 0.2);
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileName = styled.h2`
  display: flex;

  gap: 1rem;
  margin-bottom: 10px;
  h5 {
    display: flex;
    align-items: center;
    text-align: center;

    font-size: 1rem;
    margin: 0;
    &::after {
      content: ":";
    }
  }
  p {
    display: flex;
  }
`;

const EditIcon = styled.img`
  width: 1rem;
  height: 1rem;

  cursor: pointer;
`;

const ProfileEmail = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProfileStatus = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  gap: 1rem;
  span {
    margin-left: 0.5rem;
    &:last-child {
      font-weight: bold;
    }
  }
`;

const FlashcardLink = styled(Link)`
  display: block;
  text-align: center;
  background-color: #007bff;
  cursor: pointer;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
const StyledInput = styled.input``;
