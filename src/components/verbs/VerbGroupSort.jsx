import React from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
  margin: 10px;
`;

const SelectLabel = styled.label`
  font-size: 16px;
  margin-right: 10px;
`;

const SelectDropdown = styled.select`
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const VerbGroupSort = ({ onFilterChange, selectedGroup, verbGroup }) => {
  const handleFilterSelect = (e) => {
    const selectedGroup = e.target.value;
    onFilterChange(selectedGroup);
  };

  return (
    <SelectContainer>
      <SelectLabel htmlFor="groupFilter">Filter by group</SelectLabel>
      <SelectDropdown
        id="groupFilter"
        onChange={handleFilterSelect}
        value={selectedGroup}
      >
        {verbGroup.map((group) => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
      </SelectDropdown>
    </SelectContainer>
  );
};

export default VerbGroupSort;
