import React from "react";
import styled from "styled-components";

const ChapterPagination = ({
  selectedChapter,
  totalChapters,
  onPrevious,
  onNext,
}) => {
  return (
    <PaginationContainer>
      {/* Previous chapter button */}
      <PaginationButton onClick={onPrevious} disabled={selectedChapter === 0}>
        Previous chapter
      </PaginationButton>

      {/* Next chapter button */}
      <PaginationButton
        onClick={onNext}
        disabled={selectedChapter === totalChapters - 1}
      >
        Next chapter
      </PaginationButton>
    </PaginationContainer>
  );
};

export default ChapterPagination;
const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
