import React from "react";
import PropTypes from "prop-types";
import Input from "../Input/input";
import Button from "../Button/button";
import "./search_styles.scss";

const SearchBar = ({ className }) => (
  <form action="/" method="get" className={className}>
    <Input
      placeholder="Enter your search key word"
      className="input form__input"
    />
    <Button className="btn form__button" label="Search" />
  </form>
);

SearchBar.propTypes = {
  className: PropTypes.string.isRequired,
};

export default SearchBar;
