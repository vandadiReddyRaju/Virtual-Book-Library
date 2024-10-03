import React from 'react';

import "./search.css"

const SearchBar = ({ setSearchTerm }) => {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by title, author, or genre"
      onChange={handleInputChange}
      className="search-input"
    />
  );
};

export default SearchBar;
