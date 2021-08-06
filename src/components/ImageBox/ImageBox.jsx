import React from "react";
import PropTypes from "prop-types";
import "./ImageBox.scss";

const ImageBox = ({ src, alt, className }) => (
  <img className={className} src={src} alt={alt} />
);

ImageBox.propTypes = {
  className: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageBox;
