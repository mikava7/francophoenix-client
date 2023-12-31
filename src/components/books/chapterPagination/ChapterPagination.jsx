import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ChapterPagination = ({
  selectedChapter,
  totalChapters,
  onPrevious,
  onNext,
}) => {
  const { t } = useTranslation();
  return (
    <PaginationContainer>
      <PaginationButton onClick={onPrevious} disabled={selectedChapter === 0}>
        {t("Chapitre précédent")}
      </PaginationButton>

      <PaginationButton
        onClick={onNext}
        disabled={selectedChapter === totalChapters - 1}
      >
        {t("Chapitre suivant")}
      </PaginationButton>
    </PaginationContainer>
  );
};

export default ChapterPagination;
const PaginationContainer = styled.div`
  display: flex;
  /* outline: 1px solid red; */
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  gap: 1rem;
  max-width: 90%;
`;

const PaginationButton = styled.button`
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  background-color: ${(props) => props.theme.highlight4};
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:disabled {
    background-color: #ccc;
    color: ${(props) => props.theme.tertiaryText};

    cursor: not-allowed;
  }
`;
