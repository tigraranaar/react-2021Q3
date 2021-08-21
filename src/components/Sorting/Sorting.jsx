import React from "react";
import PropTypes from "prop-types";
import "./Sorting.scss";

const Sorting = ({ setSortBy }) => (
  <div className="sorting">
    <h2 className="sorting__title">Sorting by</h2>
    <select
      className="sorting__select"
      onChange={(e) => {
        setSortBy(e.target.value);
      }}
    >
      <option value="publishedAt">Published At</option>
      <option value="popularity">Popularity</option>
      <option value="relevancy">Relevancy</option>
    </select>
  </div>
);

Sorting.propTypes = {
  setSortBy: PropTypes.func.isRequired,
};

export default Sorting;
