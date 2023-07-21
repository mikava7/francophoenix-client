import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import ElementaryCard from "./ElementaryCard";
// import IntermediateCard from "./IntermediateCard";
// import AdvancedCard from "./AdvancedCard";
import Course from "./Course";
import courseData from "../courseData";
const CoursesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Courses = () => {
  return (
    <CoursesWrapper>
      {courseData.map((course, index) => (
        <Link key={index} to={`/${course.difficulty.toLowerCase()}`}>
          {/* Use Link to create the link for each course */}
          <Course
            title={course.title}
            duration={course.duration}
            difficulty={course.difficulty}
            vocabularyCount={course.vocabularyCount}
          />
        </Link>
      ))}
    </CoursesWrapper>
  );
};

export default Courses;
