import React from "react";
import PropTypes from "prop-types";
import "./Heading.scss";

const Heading = ({ title }) => <h3 className="heading">{title}</h3>;

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;
