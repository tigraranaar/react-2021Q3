import React from "react";
import PropTypes from "prop-types";
import "./imageBox_styles.scss";

const ImageBox = ({ src, className }) => (
  <img className={className} src={src} alt="food" />
);

ImageBox.propTypes = {
  className: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default ImageBox;
