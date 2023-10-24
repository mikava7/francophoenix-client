import React, { useState, useEffect } from "react";
import { getAllVerbs } from "../../redux/slices/verbeTenses/verbeTenses";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/Loading";
import styled from "styled-components";
import VerbGroupSort from "./VerbGroupSort";
import SearchVerb from "./SearchVerb";
import { Link } from "react-router-dom";
import SearchIcon from "../../assets/icons/search-50.png";
import ClearIcon from "../../assets/icons/cross-24.png";
import ProgressBar from "../Utility/ProgressBar";
import { fetchUserProgress } from "../../redux/slices/userProgress/userProgressSlice";
const Verbs = () => {
  const dispatch = useDispatch();
  const verbs = useSelector((state) => state.verbTenses.verbs);
  const isLoading = useSelector((state) => state.isLoading);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("all");
  const [filteredVerbs, setFilteredVerbs] = useState([]);
  const auth = useSelector((state) => state?.auth?.auth?.user) || {};
  const userProgressData =
    useSelector((state) => state.userProgress.userProgressData) || {};
  const userId = auth._id;
  const verbsProgress = userProgressData?.userProgress?.verbs;
  const verbsWithProgress =
    verbsProgress &&
    verbsProgress?.map((verb) => ({
      verb: verb.verb,
      percentage: verb.totalPercentage,
    }));
  console.log("userProgressData", userProgressData);
  console.log("verbsProgress", verbsProgress);
  console.log("verbsWithProgress", verbsWithProgress);

  useEffect(() => {
    dispatch(getAllVerbs());
  }, []);
  useEffect(() => {
    if (userId) {
      dispatch(fetchUserProgress(userId));
    }
  }, [userId]);
  useEffect(() => {
    if (verbs.length > 0) {
      setFilteredVerbs(verbs);
    }
  }, [verbs]);

  if (isLoading) {
    return <Loading />;
  }

  useEffect(() => {
    // Create a new filtered list when either the category or search term changes
    const categoryFilteredVerbs =
      selectedGroup === "all"
        ? verbs
        : verbs.filter((verb) => verb.verbGroup === selectedGroup);
    const filteredVerbList = categoryFilteredVerbs.map((verb) => verb.verb);
    const combinedFilteredVerbs = categoryFilteredVerbs.filter((verb) =>
      verb.verb.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredVerbs(combinedFilteredVerbs);
  }, [selectedGroup, searchTerm, verbs]);

  const handleFilterChange = (selectedGroup) => {
    setSelectedGroup(selectedGroup);
  };

  const verbGroup = [
    "all",
    ...new Set(verbs.map((group) => group.verbGroup)),
  ].filter((group) => group !== "");

  return (
    <VerbsContainer>
      <SearchContainer>
        <VerbGroupSort
          verbGroup={verbGroup}
          onFilterChange={handleFilterChange}
        />
        <VerbCount>{filteredVerbs.length}</VerbCount>
        <InputContainer>
          <ClearSearch
            onClick={() => setSearchTerm("")}
            src={ClearIcon}
            alt="ClearIcon"
          />
          <SearchInput
            type="text"
            placeholder="Search verbs .."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputContainer>
      </SearchContainer>
      {filteredVerbs && filteredVerbs?.length > 0 ? (
        <VerbsContainer>
          {filteredVerbs?.map((verbObj) => {
            const { _id, verb, primary } = verbObj;

            // Find the verb in verbsWithProgress array
            const progressData =
              verbsWithProgress &&
              verbsWithProgress?.find((item) => item.verb === verb);
            const progress = progressData ? progressData.percentage : 0.1;

            return primary ? (
              <PrimaryVerbBox key={_id}>
                <StyledLink to={`/verbs/${verb}`}>{verb}</StyledLink>
                <ProgressBar progress={progress} />
              </PrimaryVerbBox>
            ) : (
              <VerbBox key={_id}>
                <StyledLink to={`/verbs/${verb}`}>{verb}</StyledLink>
                <ProgressBar progress={progress} />
              </VerbBox>
            );
          })}
        </VerbsContainer>
      ) : (
        <NoVerbsFoundMessage>No verbs found.</NoVerbsFoundMessage>
      )}
    </VerbsContainer>
  );
};

export default Verbs;

const VerbsContainer = styled.div`
  display: flex;
  align-items: center;

  flex-wrap: wrap;
`;
const VerbCount = styled.span`
  padding: 0.5rem;
  outline: 3px solid ${(props) => props.theme.primaryText};
  border: 2px solid ${(props) => props.theme.highlight4};
  background: ${(props) => props.theme.primaryText};
  color: ${(props) => props.theme.primaryBackground};
  border-radius: 50%;
  margin: 0 1rem;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.primaryBackground};
    color: ${(props) => props.theme.primaryText};
    border: 2px solid ${(props) => props.theme.primaryText};
    outline: 3px solid ${(props) => props.theme.highlight4};
  }
`;
const VerbBox = styled.span`
  padding: 0.2rem 0.4rem;
  margin: 0.4rem;
  border-radius: 0.4rem;
  outline: 1px solid ${(props) => props.theme.highlight4};
  background: ${(props) => props.theme.secondaryBackground};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;
const PrimaryVerbBox = styled(VerbBox)`
  font-size: 1.2rem;
  padding: 0.4rem 0.8rem;
  background: ${(props) => props.theme.highlight4};
  outline: 1px solid ${(props) => props.theme.secondaryBackground};
  line-height: 1;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.primaryText};
`;
const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const SearchInput = styled.input`
  padding: 8px;
  border: none;
  flex: 1;
  /* width: 200px; */
  font-size: 1.2rem;
  outline: none;
  border-radius: 1rem;
`;
const NoVerbsFoundMessage = styled.p`
  display: flex;
  font-size: 16px;
  color: #999;
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 4px;
  height: 2.5rem;
  width: 180px;
  margin-right: 2rem;
  /* width: 80%; */
  box-shadow: 0 2px 4px rgba(155, 161, 119, 0.637);
  border-radius: 50px;
  border: 1px solid #302828;
  border-bottom: 2px solid grey;
  border-right: 2px solid grey;
  background-color: ${(props) => props.theme.text};

  &:hover,
  &.active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);

    border-bottom: 2px solid #0a0909;
    border-right: 2px solid #0a0909;
  }
`;
const ClearSearch = styled.img`
  background-color: transparent;
  border: none;
  width: 1.4rem;
  height: 1.4rem;
  margin-left: 0.6rem;

  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;
