import styled from "styled-components";

const VerbHeaderSection = ({ verb, verbGeo, verbEng, isGeorgian }) => {
  return (
    <VerbHeader>
      <h1>{verb?.charAt(0).toUpperCase() + verb?.slice(1)}</h1>
      <h3>{isGeorgian ? verbGeo : verbEng}</h3>
    </VerbHeader>
  );
};
export default VerbHeaderSection;
const VerbHeader = styled.div`
  margin-bottom: 1rem;
  /* background-color: ${(props) => props.theme.tertiaryBackground}; */
  h1 {
    text-align: center;
    &:before {
      content: ${(props) =>
        props.theme.background === "#000000" ? '"🔸"' : '"🔹"'};
    }
  }
`;
