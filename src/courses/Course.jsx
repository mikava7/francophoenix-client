import React from "react";
import styled from "styled-components";

const Course = ({
  title,
  duration,
  difficulty,
  vocabularyCount,
  description,
}) => {
  return (
    <CardWrapper>
      <h3>{title}</h3>
      <Duration>
        Duration:
        <span>{duration}</span>
      </Duration>
      <p>Difficulty: {difficulty}</p>
      <p>Vocabulary Count: {vocabularyCount}</p>
      <p>Description:{description}</p>
      {/* Add any other course-related information here */}
    </CardWrapper>
  );
};

export default Course;
const CardWrapper = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1.5;
  p {
    font-size: 1.2rem;
  }
`;
const Duration = styled.p`
  span {
    font-size: 1.5rem;
    margin-left: 0.5rem;
    color: blue;
    &:hover {
      transform: scale(1.6);
    }
  }
`;
