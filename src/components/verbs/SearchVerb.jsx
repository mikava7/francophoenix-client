import React, { useState } from "react";

const SearchVerb = ({}) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <input
      type="text"
      placeholder="Search verbs .."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchVerb;
