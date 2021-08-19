import React from "react";
import PropTypes from "prop-types";
import "./Options.scss";

const Options = ({ setSortBy }) => {
  const handleChange = (e) => {
    setSortBy(e.target.value);
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
  setSortBy: PropTypes.func.isRequired,
};

export default Options;
