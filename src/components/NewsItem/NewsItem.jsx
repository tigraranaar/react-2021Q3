import React from "react";
import PropTypes from "prop-types";
import "./NewsItem.scss";
import { Link } from "react-router-dom";

const placeholder = "https://via.placeholder.com/150";

const NewsItem = ({ title, url, urlToImage, description, searchValue }) => (
  <div className="newsItem">
    <img
      src={urlToImage}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = placeholder;
      }}
      alt={title}
      className="newsItem__image"
    />
    <div className="newsItem__textbox">
      <h3 className="newsItem__title">
        <a href={url}>{title}</a>
      </h3>
      <p className="newsItem__description">{description}</p>
      <p>
        <Link to={`/details/${searchValue}/${encodeURIComponent(title)}`}>
          Show details
        </Link>
      </p>
    </div>
  </div>
);

NewsItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string,
  description: PropTypes.string,
  searchValue: PropTypes.string.isRequired,
};

NewsItem.defaultProps = {
  title: "News Title",
  url: "https://newsapi.org",
  urlToImage: placeholder,
  description: "Description text",
};

export default NewsItem;
