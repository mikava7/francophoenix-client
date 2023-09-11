// Register.tsx

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/slices/auth/userSlice";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import userIcon from "../../assets/user-50.png";
import passwordIcon from "../../assets/password-50.png";
import emailIcon from "../../assets/email-50.png";
import styled from "styled-components";
const Register = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const isSuccess = useSelector((state) => state.user.isSuccess);
  const error = useSelector((state) => state.user.error);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Create user data object
    const userData = {
      username,
      password,
      email,
    };

    // Dispatch the registerUser action
    dispatch(registerUser(userData));
  };

  return (
    <FormContainer>
      {/* {error && <p>{error}</p>} */}
      <form onSubmit={handleRegister}>
        {isSuccess ? (
          <p>
            Registration successful <Link to="/login">Login</Link>
          </p>
        ) : (
          <>
            {" "}
            <h2>{t("Inscription")}</h2>
            <InputField>
              <input
                type="text"
                placeholder={t("Pseudonyme")}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <img src={userIcon} alt="userIcon" />
            </InputField>
            <InputField>
              <input
                type="email"
                placeholder={t("E-mail")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <img src={emailIcon} alt="emailIcon" />
            </InputField>
            <InputField>
              <input
                type="password"
                placeholder={t("Mot de passe")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img src={passwordIcon} alt="passwordIcon" />
            </InputField>
            <FormButton type="submit" disabled={isLoading}>
              {isLoading ? `${t("Chargement")}...` : t("Inscription")}
            </FormButton>
            <FormContainerApendix>
              {t("Avez-vous déjà un compte?")}
              <SignLink to="/login">{t("Connexion")}</SignLink>
            </FormContainerApendix>
          </>
        )}
      </form>
    </FormContainer>
  );
};

export default Register;
export const FormButton = styled.button`
  margin: 15px 0;
  width: 100%;
  height: 50px;
  font-size: 18px;
  line-height: 50px;
  font-weight: 600;
  background: #dde1e7;
  border-radius: 25px;
  border: none;
  outline: none;
  cursor: pointer;
`;
export const InputField = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  position: relative;
  &:nth-child(2) {
    margin-top: 20px;
  }
  &:nth-child(3) {
    margin-top: 20px;
  }
  input {
    height: 100%;
    width: 100%;
    padding-left: 3rem;
    outline: none;
    border: none;
    font-size: 18px;
    border-radius: 25px;

    &:focus {
    }
    &::placeholder {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 4rem;
      pointer-events: none;
      font-size: 1rem;
    }
  }

  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #595959;
    width: 1.3rem;
    padding-left: 1.2rem;
    line-height: 30px;
  }
`;
export const FormContainer = styled.div`
  margin: 0 auto;
  width: 18rem;
  padding: 0.2rem 1rem;

  text-align: center;

  h2 {
    font-size: 33px;
    font-weight: 600;
    margin-bottom: 35px;
    color: #595959;
    justify-self: center;
  }
`;
export const FormContainerApendix = styled.div`
  margin: 10px 0;
  font-size: 1rem;
`;
export const SignLink = styled(Link)`
  text-decoration: none;
  padding-left: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;
