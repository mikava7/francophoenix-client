// Login.tsx

import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { darkTheme } from "../../Styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slices/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";
import {
  FormContainer,
  InputField,
  FormButton,
  FormContainerApendix,
  SignLink,
  PasswordLink,
} from "./Register";
import userIcon from "../../assets/user-50.png";
import passwordIcon from "../../assets/password-50.png";
import emailIcon from "../../assets/email-50.png";
import facebookIconBlue from "../../icons/facebookIconBlue.png";

import facebookIconBlack from "../../icons/facebookIconBlack.png";

import googleIcon from "../../icons/google-logo-48.png";
import googeSingInDark from "../../icons/googleSignInDark.png";
import googeSingInLight from "../../icons/googleSignInLight.png";

import { useTranslation } from "react-i18next";
import useScrollToTopOnRouteChange from "../../hooks/useScrollToTopOnRouteChange";
import { useLocation } from "react-router-dom";

const Login = () => {
  useScrollToTopOnRouteChange();
  const theme = useTheme();
  const navigate = useNavigate();
  const previousPath = sessionStorage.getItem("previousPath");
  // console.log("previousPath", previousPath);
  const googeSingIn = theme === darkTheme ? googeSingInDark : googeSingInLight;
  const facebookIcon =
    theme === darkTheme ? facebookIconBlack : facebookIconBlue;
  const { t } = useTranslation();

  const dispatch = useDispatch();
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
      if (previousPath) {
        navigate(previousPath);
      } else {
        navigate("/");
      }
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
        {/* <SocialButtons>
          <Faceebook>
            <img src={facebookIcon} alt="facebookIcon" />
            <span>Connect with Facebook</span>
          </Faceebook>
          <Google>
            <img src={googeSingIn} alt="googleSignIn" />
          </Google>
        </SocialButtons> */}
        <FormContainerApendix>
          {" "}
          {t("Pas de compte?")}
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

const SocialButtons = styled.div``;
const Faceebook = styled.div`
  display: flex;
  align-items: center;
  border-radius: 25px;
  background-color: ${(props) => props.theme.facebookBack};
  color: ${(props) => props.theme.facebookText};
  outline: 5px solid rgb(166, 185, 226);
  /* border-radius: 2px; */
  width: 17.6rem;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 1rem;
  img {
    max-width: 2.8;
    max-height: 2.8rem;
    padding: 0.4rem;
    background-color: ${(props) => props.theme.facebookLogo};
    border-radius: 25px 0 0 25px;
  }
  span {
    display: flex;
    padding: 0.1rem;
    font-size: 1.08rem;
    font-weight: bold;
    margin-left: 0.4rem;
  }
`;

const Google = styled.div`
  margin-top: 1rem;
  width: 18rem;
  cursor: pointer;

  img {
    width: 18rem;
    border-radius: 25px;

    /* max-height: 100%; */
  }
`;
export default Login;
