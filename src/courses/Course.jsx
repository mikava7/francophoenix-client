import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Course = ({ title, duration, difficulty, vocabularyCount }) => {
  return (
    <CardWrapper>
      <h3>{title}</h3>
      <p>Duration: {duration}</p>
      <p>Difficulty: {difficulty}</p>
      <p>Vocabulary Count: {vocabularyCount}</p>
      {/* Add any other course-related information here */}
    </CardWrapper>
  );
};

export default Course;
