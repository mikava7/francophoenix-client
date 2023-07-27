import styled from "styled-components";
import { useTranslation } from "react-i18next";

const QuizModal = ({ onClose, isQuizFinished, isAllCorrect, Restart }) => {
  const { t } = useTranslation();
  return (
    <ModalWrapper>
      {isQuizFinished && (
        <ModalContent>
          {isAllCorrect ? (
            <ModalText>
              {t("Félicitations! Vous avez répondu correctement à tous.")}
            </ModalText>
          ) : (
            <ModalText>
              {t("Toutes les réponses ne sont pas correctes. Réessayer!")}
            </ModalText>
          )}
          <ModalButton onClick={onClose} isAllCorrect={isAllCorrect}>
            {isAllCorrect ? t("Fermer") : Restart}
          </ModalButton>
        </ModalContent>
      )}
    </ModalWrapper>
  );
};

export default QuizModal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 250px;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 0 8px 2px #0889f385;
  ::before {
    content: "";
    position: absolute;
    bottom: -20px;
    right: calc(50% - 20px);
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #fff;
    filter: drop-shadow(0.5px 4px 2px #0889f385);
  }
`;

const ModalText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: black;
`;

const ModalButton = styled.button`
  padding: 1rem;
  text-align: center;
  align-self: center;
  width: 12rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #ffffff;
  cursor: pointer;
  background-color: ${(props) =>
    props.isAllCorrect ? "#0055a4" : "transparent"};

  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 auto;
  &:hover {
    background-color: ${(props) =>
      props.isAllCorrect ? "white" : "transparent"};
    color: ${(props) => (props.isAllCorrect ? "#0055a4" : "#white")};
    border: ${(props) => (props.isAllCorrect ? "2px solid #0055a4" : "")};
  }
`;
