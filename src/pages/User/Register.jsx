// Register.tsx

import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/slices/auth/userSlice";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import userIcon from "../../assets/user-50.png";
import passwordIcon from "../../assets/password-50.png";
import emailIcon from "../../assets/email-50.png";
import styled from "styled-components";
import Loading from "../../components/loading/Loading";
import ErrorMessage from "../../components/Utility/ErrorMessage";
import useScrollToTopOnRouteChange from "../../hooks/useScrollToTopOnRouteChange";
const Register = () => {
  useScrollToTopOnRouteChange();
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const isSuccess = useSelector((state) => state.user.isSuccess);
  const error = useSelector((state) => state.user.error);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("password before if", password);
    if (password === "" || password.length < 5) {
      console.log("password in if", password);
      // Display an error message to inform the user
      alert(t("Le mot de passe doit comporter au moins 5 caractères"));
      return; // Don't proceed with the registration if the password is invalid
    }
    // Create user data object
    const userData = {
      username,
      password,
      email,
    };

    // Dispatch the registerUser action
    dispatch(registerUser(userData));
  };

  const resetFields = () => {
    setEmail("");
    setPassword("");
  };
  useEffect(() => {
    // Reset fields when there is an error
    if (error) {
      resetFields();
      // Focus on the email input

      emailInputRef.current.focus();
    }
  }, [error]);
  // console.log("isSuccess in component", isSuccess);
  return (
    <FormContainer>
      {error && <ErrorMessage error={error} />}
      {passwordError && <ErrorMessage error={passwordError} />}

      {isSuccess ? (
        <>
          <p>
            Registration successful <Link to="/login">Login</Link>
          </p>
        </>
      ) : (
        <FormBox onSubmit={handleRegister}>
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
              ref={emailInputRef}
            />
            <img src={emailIcon} alt="emailIcon" />
          </InputField>
          <InputField>
            <input
              type="password"
              placeholder={t("Mot de passe")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={passwordInputRef}
            />
            <img src={passwordIcon} alt="passwordIcon" />
          </InputField>
          <FormButton type="submit">{t("Inscription")}</FormButton>
          <FormContainerApendix>
            {t("Avez-vous déjà un compte?")}
            <SignLink to="/login">{t("Connexion")}</SignLink>
          </FormContainerApendix>
        </FormBox>
      )}
    </FormContainer>
  );
};

export default Register;
export const FormContainer = styled.div`
  margin: 5rem auto;
  width: 18rem;
  padding: 0.2rem 1rem;
  background-color: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.primaryText};
  box-shadow: ${(props) => props.theme.formBoxShadow};

  text-align: center;

  h2 {
    font-size: 33px;
    font-weight: 600;
    margin-bottom: 35px;
    color: ${(props) => props.theme.primaryText};
    justify-self: center;
  }
  @media (max-width: 420px) {
    margin: 1rem auto;
  }
`;
export const FormBox = styled.form``;
export const FormButton = styled.button`
  margin: 15px 0;
  width: 100%;
  height: 4rem;
  font-size: 18px;
  line-height: 50px;
  font-weight: 600;
  background: ${(props) => props.theme.highlight4};
  border-radius: 25px;
  border: none;
  outline: none;
  cursor: pointer;
`;
export const InputField = styled.div`
  height: 3rem;

  width: 100%;
  display: flex;
  position: relative;
  &:nth-child(2) {
    /* outline: 2px solid blue; */
    margin-top: 2rem;
  }
  &:nth-child(3) {
    /* outline: 2px solid red; */
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  &:nth-child(4) {
    margin-bottom: 2rem;
  }
  input {
    height: 100%;
    width: 100%;
    padding-left: 3rem;
    outline: none;
    border: none;
    font-size: 18px;
    outline: 2px solid ${(props) => props.theme.highlight4};

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

export const FormContainerApendix = styled.div`
  margin: 10px 0;
  font-size: 1rem;
  color: ${(props) => props.theme.primaryText};
`;
export const SignLink = styled(Link)`
  text-decoration: none;
  padding-left: 0.5rem;

  font-weight: bold;
  font-style: italic;
  position: relative;
  color: ${(props) => props.theme.primaryText};
  text-decoration: none;
  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 10px;
    width: 50%;
    height: 2px;
    background-color: ${(props) => props.theme.primaryText};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: calc(100% - 2px); /* Expand width to 100% on hover */
  }
`;
export const PasswordLink = styled(SignLink)`
  font-weight: normal;
`;
