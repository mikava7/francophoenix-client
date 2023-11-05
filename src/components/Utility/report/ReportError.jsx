import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "../../../redux/api/axiosInstance";
import { useTranslation } from "react-i18next";

const ReportError = ({ contentId }) => {
  const { t } = useTranslation();
  const [showText, setShowText] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", text: "" });
  const [responseMessage, setResponseMessage] = useState("");

  const auth = useSelector((state) => state?.auth?.auth?.user) || {};
  const userId = auth?._id;
  const currentURL = window.location.href;

  const toggleShowText = () => {
    setShowText(!showText);
    setShowForm(false);
  };

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };
  const submitReport = async () => {
    try {
      const response = await axios.post("/report", {
        name: formData.name,
        text: formData.text,
        userId: userId ? userId : "Not Logged in",
        url: currentURL,
        contentId,
      });
      setResponseMessage(response.data.message);
      setShowText(false);
      setShowForm(false);

      //       console.log("response.data", response.data);
    } catch (error) {
      console.error("Error submitting the report", error);
      setResponseMessage("Failed to submit the report");
    }
  };

  return (
    <Container>
      <QuestionIcon size={20} color="blue" onClick={toggleShowText} />
      {showText && (
        <QuestionText>
          {t("Vous souhaitez signaler un problème ?")}
          <button onClick={toggleShowForm}>{t("Oui")}</button>
        </QuestionText>
      )}
      {showForm && (
        <Form>
          <Input
            type="text"
            placeholder={t("Entrez votre nom ou email ici")}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextArea
            placeholder={t("Entrez votre message ici")}
            value={formData.text}
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
          />
          <SubmitButton type="button" onClick={submitReport}>
            {t("Soumettre")}
          </SubmitButton>
        </Form>
      )}
      {responseMessage && <QuestionText>{responseMessage}</QuestionText>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const QuestionIcon = styled(FaQuestionCircle)`
  cursor: pointer;
`;

const QuestionText = styled.div`
  text-align: center;
  margin: 10px;
  background: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.primaryText};
  font-size: 14px;

  button {
    background: ${(props) => props.theme.highlight4};
    color: ${(props) => props.theme.primaryText};
    border: none;
    padding: 5px 10px;
    margin-left: 0.4rem;
    cursor: pointer;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background: ${(props) => props.theme.highlight3};
  color: ${(props) => props.theme.primaryText};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

export default ReportError;
