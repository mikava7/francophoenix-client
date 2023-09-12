// Login.tsx

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slices/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";
import {
  FormContainer,
  InputField,
  FormButton,
  FormContainerApendix,
  SignLink,
} from "./Register";
import userIcon from "../../assets/user-50.png";
import passwordIcon from "../../assets/password-50.png";
import emailIcon from "../../assets/email-50.png";

import { useTranslation } from "react-i18next";
import useScrollToTopOnRouteChange from "../../hooks/useScrollToTopOnRouteChange";
const Login = () => {
  useScrollToTopOnRouteChange();
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const error = useSelector((state) => state.auth.error);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Create user data object
    const userData = {
      email,
      password,
    };

    try {
      // Dispatch the loginUser action
      await dispatch(loginUser(userData));
      navigate("/"); // Navigate to the desired page
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <FormContainer>
      <h2>{t("Connexion")}</h2>
      {/* {error && <p>{error}</p>} */}
      <form onSubmit={handleLogin}>
        <InputField>
          <input
            type="email"
            placeholder={t("E-mail")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor=""></label>
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
        <ForgotPassword>
          <PasswordLink to="/">{t("Mot de passe oublié?")}</PasswordLink>
        </ForgotPassword>
        <FormButton type="submit" disabled={isLoading}>
          {isLoading ? `${t("Chargement")}...` : t("Connexion")}
        </FormButton>
        <FormContainerApendix>
          {" "}
          {t("pas de compte?")}
          <SignLink to="/register">{t("Inscrivez-vous")} </SignLink>
        </FormContainerApendix>
        {isAuthenticated && <p>Login successful</p>}
      </form>
    </FormContainer>
  );
};

const ForgotPassword = styled.div`
  text-align: left;
  margin: 1rem 0 10px 5px;
`;
const PasswordLink = styled(Link)`
  font-size: 1rem;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default Login;
