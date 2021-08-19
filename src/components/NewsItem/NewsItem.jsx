import React from "react";
import PropTypes from "prop-types";
import "./NewsItem.scss";

const NewsItem = ({ title, url, urlToImage, description }) => (
  <div className="newsItem">
    <img src={urlToImage} alt={title} className="newsItem__image" />
    <div className="newsItem__textbox">
      <h3 className="newsItem__title">
        <a href={url}>{title}</a>
      </h3>
      <p className="newsItem__description">{description}</p>
    </div>
  </div>
);

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default NewsItem;
