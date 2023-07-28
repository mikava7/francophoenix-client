import styled from "styled-components";

export const SentenceBasedExerciseContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  h2 {
    text-align: center;
  }
`;
export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(219, 255, 161);
  border-radius: 6px;
  padding: 2rem;
  padding-left: 3rem;
  gap: 1rem 2rem;
  background-color: grey;

  div {
    width: 50%;
    padding: 1rem;
    margin-bottom: 0.4rem;
    font-size: 1.2rem;

    border-radius: 12px;
    background-color: rgb(219, 255, 161);
  }
`;

export const OptionButton = styled.button`
  border-radius: 8px;
  font-size: 1.2rem;
  padding: 4px 6px;
  cursor: pointer;
  gap: 1rem;
  color: black;
  &:first-child {
    margin-right: 0.6rem;
    margin-left: 0.2rem;
  }
  &:hover {
    transform: scale(1.1);
    background-color: rgb(253, 253, 40);
    color: rgb(40, 175, 253);
  }
`;
export const SubmitButton = styled.button`
  margin-top: 1rem;
  margin: 0 auto;
  padding: 1rem;
  font-size: 1.1rem;
  width: 8rem;
  background-color: rgb(253, 253, 40);
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  &:hover {
    background-color: rgb(107, 253, 40);
    color: ${(props) => props.theme.colors.text2};
  }
`;
export const Continue = styled.span`
  background-color: #70ff41;
  color: black;
  width: 20rem;
  font-weight: bold;

  margin: 0 auto;
  margin-top: 2rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 2rem;
  letter-spacing: 2px;
  cursor: pointer;
  &:hover {
    &:hover {
      background-color: rgb(107, 253, 40);
      color: ${(props) => props.theme.colors.text2};
    }
  }
`;
