import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { LightButton } from "../../../../Styles/globalStyles";
import useScrollToTopOnRouteChange from "../../../../hooks/useScrollToTopOnRouteChange";
const QuizModal = ({
  onClose,
  isQuizFinished,
  isAllCorrect,
  Restart,
  incorrectlyAnsweredQuestions,
}) => {
  // console.log(Restart);
  const { t } = useTranslation();
  const scrollToTop = () => {
    onClose();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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
              <List>
                {incorrectlyAnsweredQuestions.map((word) => (
                  <li>{word.question}</li>
                ))}
              </List>
            </ModalText>
          )}
          <ButtonContainer>
            <LightButton onClick={scrollToTop}>
              {t("Réviser le vocabulaire")}
            </LightButton>

            <ModalButton onClick={onClose} isAllCorrect={isAllCorrect}>
              {isAllCorrect ? t("Fermer") : Restart}
            </ModalButton>
          </ButtonContainer>
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
  /* background: ${(props) => props.theme.tertiaryBackground} 0.5; */

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.primaryText};

  width: 280px;
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
  @media (max-width: 361px) {
    width: 200px;
    align-self: center;
  }
`;

export const ModalText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.primaryText};
`;

const ModalButton = styled.div`
  cursor: pointer;
  padding: 1rem;
  width: 12rem;
  text-align: center;
  font-size: ${(props) => props.theme.large};
  border-radius: 8px;
  font-weight: bold;
  background-color: ${(props) =>
    props.isAllCorrect ? props.theme.primaryText : "transparent"};
  color: ${(props) => props.theme.primaryBackground};
  &:hover {
    background-color: ${(props) =>
      props.isAllCorrect ? "white" : "transparent"};
    color: ${(props) => (props.isAllCorrect ? "#0055a4" : "#white")};
    border: ${(props) => (props.isAllCorrect ? "2px solid #0055a4" : "")};
  }
`;

const ButtonContainer = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 1rem;
`;
const List = styled.div`
  width: 90%;
  height: 12rem;
  border: 1px solid ${(props) => props.theme.primaryText};
  background-color: ${(props) => props.theme.tertiaryBackground};
  margin: 0 auto;
  border-radius: 4px;
  overflow-x: scroll;
  padding: 0.4rem;
  margin-top: 1rem;
  li {
    padding: 0.4rem;
  }
`;
