import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Pagination.scss";
import getData from "../../services/api";

const Pagination = ({
  postsOnPage,
  setPostsOnPage,
  setArticles,
  searchValue,
  sortBy,
  setIsLoading,
}) => {
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    getData(searchValue, sortBy, postsOnPage, activePage)
      .then((obj) => {
        setArticles(obj.data.articles);
        setIsLoading(false);
      })
      .catch((err) => console.log(err)); // eslint-disable-line no-console
  }, [activePage]);

  const pageLists = [];
  const maxArticlesLength = 100;
  const pagesCount = maxArticlesLength / postsOnPage;

  for (let i = 1; i <= pagesCount; i += 1) {
    pageLists.push(
      <li key={i.toString()}>
        <button
          type="button"
          value={i}
          onClick={(e) => {
            setActivePage(e.target.value);
          }}
        >
          {i}
        </button>
      </li>
    );
  }

  return (
    <div className="pagination">
      <h2 className="pagination__title">Posts on page</h2>
      <select
        className="pagination__select"
        onChange={(e) => {
          setPostsOnPage(e.target.value);
        }}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <ul className="pagination__pages">{pageLists}</ul>
    </div>
  );
};

Pagination.propTypes = {
  postsOnPage: PropTypes.string.isRequired,
  setArticles: PropTypes.func.isRequired,
  setPostsOnPage: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  setIsLoading: PropTypes.func.isRequired,
};

export default Pagination;
