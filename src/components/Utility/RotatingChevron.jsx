import styled from "styled-components";
import ChevronDown from "../../../public/icons/chevron-down-24.png";
const RotatingChevron = ({ isActive, onClick }) => {
  console.log({ isActive, onClick });
  return (
    <ChevronImage
      src={ChevronDown}
      alt="ChevronDown"
      rotation={isActive ? 180 : 0}
      onClick={onClick}
    />
  );
};
const ChevronImage = styled.img`
  width: 24px;
  height: 24px;
  transition: transform 0.5s ease;
  margin-left: 1rem;
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
  cursor: pointer;
`;
export default RotatingChevron;
