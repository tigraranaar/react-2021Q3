import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SearchBar.scss";

const SearchBar = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const resetInputField = (e) => {
    e.target.reset();
    setSearchValue("");
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchValue) return;

    search(searchValue);
    resetInputField(e);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="searchBar">
        <input
          type="text"
          placeholder="Enter your search term"
          className="searchBar__input"
          onChange={handleChange}
        />
        <button type="submit" className="searchBar__button">
          Search
        </button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchBar;
