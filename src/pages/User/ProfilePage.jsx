import { useState, useEffect } from "react";
import styled from "styled-components";
import editIconBlue from "../../assets/icons/edit-32_blue.png";
import editIconOrange from "../../assets/icons/edit-32_orange.png";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { FetchupdateUser } from "../../redux/slices/auth/userSlice";
const ProfilePage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
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
    console.log({ id, newUsername });
    dispatch(FetchupdateUser({ id, newUsername }));
    setNewUsername("");
    setIsEditing(false);
  };
  //   console.log("auth", auth);
  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileName>
          <h3>{t("Nom")}</h3>
          <p>
            {isEditing ? (
              <input
                type="text"
                placeholder="New userName"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            ) : updatedUser ? (
              updatedUser.username // Render updated username if available
            ) : (
              username
            )}
            {isEditing ? (
              <button onClick={handleEdit}>save</button>
            ) : (
              <EditIcon
                src={editIconBlue}
                alt="Edit Icon"
                onClick={() => setIsEditing(true)}
              />
            )}
          </p>
        </ProfileName>
        {/* <ProfileEmail>{email}</ProfileEmail> */}
        {t("Statut")}
        <ProfileStatus>{role}</ProfileStatus>
      </ProfileHeader>
      <FlashcardLink to="/flashcards">Flashcard Words</FlashcardLink>
    </ProfileContainer>
  );
};

export default ProfilePage;

const ProfileContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileName = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  margin-bottom: 10px;
  p {
    display: flex;
    /* gap: 1rem; */
    /* align-items: center; */
  }
`;

const EditIcon = styled.img`
  width: 1rem;
  cursor: pointer;
`;

const ProfileEmail = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProfileStatus = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const FlashcardLink = styled.a`
  display: block;
  text-align: center;
  background-color: #007bff;
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
