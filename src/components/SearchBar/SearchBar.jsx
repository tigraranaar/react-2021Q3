import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./SearchBar.scss";

const SearchBar = () => (
  <form action="/" method="get" className="form">
    <Input placeholder="Enter your search term" className="input form__input" />
    <Button className="btn form__button" label="Search" />
  </form>
);

export default SearchBar;
