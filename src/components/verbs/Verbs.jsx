import React, { useState, useEffect } from "react";
import { getAllVerbs } from "../../redux/slices/verbeTenses/verbeTenses";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/Loading";
import styled from "styled-components";
import VerbGroupSort from "./VerbGroupSort";
import { Link } from "react-router-dom";
const Verbs = () => {
  const dispatch = useDispatch();
  const verbs = useSelector((state) => state.verbTenses.verbs);
  const isLoading = useSelector((state) => state.isLoading);
  const [filteredVerbs, setFilteredVerbs] = useState([]); // Initialize filteredVerbs as an empty array

  useEffect(() => {
    dispatch(getAllVerbs());
  }, []);

  useEffect(() => {
    if (verbs.length > 0) {
      // Check if verbs have been loaded, and if so, set filteredVerbs
      setFilteredVerbs(verbs);
    }
  }, [verbs]); // Update filteredVerbs whenever verbs change

  if (isLoading) {
    return <Loading />;
  }

  const handleFilterChange = (selectedGroup) => {
    if (selectedGroup === "all") {
      setFilteredVerbs(verbs); // Show all verbs
    } else {
      const filtered = verbs.filter((verb) => verb.verbGroup === selectedGroup);
      setFilteredVerbs(filtered); // Filter and update the displayed verbs
    }
  };

  const verbGroup = [
    "all",
    ...new Set(verbs.map((group) => group.verbGroup)),
  ].filter((group) => group !== "");

  return (
    <VerbsContainer>
      <VerbGroupSort
        verbGroup={verbGroup}
        onFilterChange={handleFilterChange}
      />
      {filteredVerbs.length > 0 && ( // Check if filteredVerbs exist and have verbs
        <VerbsContainer>
          {filteredVerbs.map((verbObj) => {
            const { _id, verb, primary } = verbObj;
            return primary ? (
              <PrimaryVerbBox key={_id}>
                <StyledLink to={`/verbs/${verb}`}>{verb}</StyledLink>
              </PrimaryVerbBox>
            ) : (
              <VerbBox key={_id}>
                <StyledLink to={`/verbs/${verb}`}>{verb}</StyledLink>
              </VerbBox>
            );
          })}
        </VerbsContainer>
      )}
    </VerbsContainer>
  );
};

// ... (the rest of your styled components and VerbGroupSort component remain the same)

export default Verbs;
const VerbsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const VerbBox = styled.span`
  padding: 0.2rem 0.4rem;
  margin: 0.4rem;
  border-radius: 0.4rem;
  outline: 1px solid ${(props) => props.theme.highlight4};
  background: ${(props) => props.theme.secondaryBackground};
  cursor: pointer;
  transition: all 0.3s ease; /* Added a transition for smoother hover effect */
  height: 1.4rem;

  &:hover {
    transform: scale(1.05); /* Simplified the transform */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Added a subtle box shadow */
  }
`;
const PrimaryVerbBox = styled(VerbBox)`
  font-size: 1.2rem;
  padding: 0.4rem 0.8rem;
  background: ${(props) => props.theme.highlight4};
  outline: 1px solid ${(props) => props.theme.secondaryBackground};
  line-height: 1;
  /* height: 1.6rem; */
  text
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.primaryText};
`;
