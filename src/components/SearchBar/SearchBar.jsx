import React from "react";
import PropTypes from "prop-types";
import getData from "../../services/api";
import "./SearchBar.scss";

const SearchBar = ({
  setArticles,
  setIsLoading,
  searchValue,
  setSearchValue,
}) => {
  const resetInputField = (e) => {
    e.target.reset();
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchValue) return;

    setIsLoading(true);
    getData(searchValue)
      .then((obj) => {
        setArticles(obj.data.articles);
        setIsLoading(false);
        resetInputField(e);
      })
      .catch((err) => console.log(err)); // eslint-disable-line no-console
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
  setArticles: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default SearchBar;
