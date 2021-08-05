import React from "react";
import PropTypes from "prop-types";
import "./button_styles.scss";

const Button = ({ label, className }) => (
  <button type="submit" className={className}>
    {label}
  </button>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
