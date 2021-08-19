import React from "react";
import PropTypes from "prop-types";
import "./NewsItem.scss";

const placeholder = "https://via.placeholder.com/150";

const NewsItem = ({ title, url, urlToImage, description }) => (
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
    </div>
  </div>
);

NewsItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string,
  description: PropTypes.string,
};

NewsItem.defaultProps = {
  title: "News Title",
  url: "https://newsapi.org",
  urlToImage: placeholder,
  description: "Description text",
};

export default NewsItem;
