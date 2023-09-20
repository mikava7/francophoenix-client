import React from "react";
import styled from "styled-components";

const Course = ({
  title,
  duration,
  difficulty,
  vocabularyCount,
  description,
  image,
  phrase,
}) => {
  return (
    <CardWrapper>
      <TopPart>
        <Image src={image} alt={title} />
        <p>{phrase}</p>
      </TopPart>

      <h3>{title}</h3>
      <Duration>
        Duration:
        <span>{duration}</span>
      </Duration>
      <Difficulty>
        Difficulty:
        <span>{difficulty}</span>
      </Difficulty>
      <Vocabulary>
        Vocabulary Count:
        <span>{vocabularyCount}</span>
      </Vocabulary>
      <Description>Description:{description}</Description>
      {/* Add any other course-related information here */}
    </CardWrapper>
  );
};

export default Course;
const CardWrapper = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  min-width: 260px;
  max-width: 520px;
  height: 1000px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1.5;
  &:hover {
    transform: translateY(-1%) translateX(1%);
    transition: transform 0.3s ease;
  }
  p {
    font-size: 1.2rem;
  }
`;
const TopPart = styled.div`
  display: flex;
  position: relative;
  height: 320px;

  p {
    line-height: 1.2;

    position: absolute;
    bottom: 0;
    text-align: center;
    padding: 0 3.2rem;
    color: black;
    background: #ffdbff;
    font-size: 1.8rem;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Duration = styled.p`
  padding: 0 1rem;

  span {
    font-size: 1.5rem;
    margin-left: 0.5rem;
    color: blue;
  }
`;
const Difficulty = styled.p`
  padding: 0 1rem;
  span {
    font-size: 1.5rem;
    margin-left: 0.5rem;
    color: #0d4d15;
  }
`;
const Vocabulary = styled.p`
  padding: 0 1rem;

  span {
    font-size: 1.5rem;
    margin-left: 0.5rem;
    color: #ff9e1f;
  }
`;
const Description = styled.p`
  padding: 0 1rem;

  span {
    font-size: 1.5rem;
    margin-left: 0.5rem;
    padding: 1rem;
    color: #ff9e1f;
  }
`;
