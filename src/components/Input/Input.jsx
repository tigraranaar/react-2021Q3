import React from "react";
import PropTypes from "prop-types";
import "./Input.scss";

const Input = ({ placeholder, className }) => (
  <input type="text" placeholder={placeholder} className={className} />
);

Input.propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
