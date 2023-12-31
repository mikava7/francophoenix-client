import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ExploreLink } from "../wellcome/WellcomeCarousel";

import Course from "./Course";
import courseData from "../../courseData";
const Courses = () => {
  return (
    <CoursesWrapper>
      {courseData.map((course, index) => (
        <StyledLink key={index} to={`/${course.difficulty.toLowerCase()}`}>
          {/* Use Link to create the link for each course */}
          <Course
            image={course.imgUrl}
            phrase={course.phrase}
            title={course.title}
            duration={course.duration}
            difficulty={course.difficulty}
            vocabularyCount={course.vocabularyCount}
            description={course.description}
          />
        </StyledLink>
      ))}
    </CoursesWrapper>
  );
};

export default Courses;

const CoursesWrapper = styled.div`
  display: flex;
  margin: 0 1rem;
  margin-top: 3rem;
  align-items: center;
  justify-content: space-evenly;

  gap: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
