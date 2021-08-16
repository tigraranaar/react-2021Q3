import React from "react";
import PropTypes from "prop-types";

const Header = ({ title, subtitle }) => (
  <header className="header">
    <h1 className="header__title">{title}</h1>
    <h2 className="header__subtitle">{subtitle}</h2>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Header;
