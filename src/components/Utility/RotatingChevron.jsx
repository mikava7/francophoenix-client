import styled, { useTheme } from "styled-components";
import ChevronDown from "../../../public/icons/chevron-down-24.png";
import ChevronDownGold from "../../../public/icons/chevron-down-gold.png";
import { darkTheme } from "../../Styles/theme";
const RotatingChevron = ({ isActive, onClick }) => {
  const theme = useTheme();
  const chevron = theme === darkTheme ? ChevronDownGold : ChevronDown;
  return (
    <ChevronImage
      src={chevron}
      alt="chevron"
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
