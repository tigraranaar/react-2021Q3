import React from "react";
import PropTypes from "prop-types";
import getData from "../../services/api";
import "./Options.scss";

const Options = ({ setArticles, setIsLoading, searchValue, setSortBy }) => {
  const handleChange = (e) => {
    setSortBy(e.target.value);

    setIsLoading(true);
    getData(searchValue, e.target.value)
      .then((obj) => {
        setArticles(obj.data.articles);
        setIsLoading(false);
      })
      .catch((err) => console.log(err)); // eslint-disable-line no-console
  };

  return (
    <div className="options">
      <div className="options__sorting sorting">
        <h2 className="sorting__title">Sorting by</h2>
        <select className="sorting__select" onChange={handleChange}>
          <option value="popularity">Popularity</option>
          <option value="relevancy">Relevancy</option>
          <option value="publishedAt">PublishedAt</option>
        </select>
      </div>
    </div>
  );
};

Options.propTypes = {
  setArticles: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired,
};

export default Options;
