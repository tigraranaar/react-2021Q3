import React from "react";
import PropTypes from "prop-types";
import "./TextBox.scss";

const TextBox = ({ title, subtitle, description }) => (
  <div className="textBox">
    <h2 className="textBox__title">{title}</h2>
    <h4 className="textBox__subtitle">{subtitle}</h4>
    <p className="textBox__description">{description}</p>
  </div>
);

TextBox.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TextBox;
