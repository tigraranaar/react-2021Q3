import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";

const Card = ({ item }) => (
  <ul className="cards__item">
    <li className="cards__field">
      <h5 className="cards__ftitle">Name: </h5>
      <span className="cards__value">{item.name}</span>
    </li>
    <li className="cards__field">
      <h5 className="cards__ftitle">Birth Date: </h5>
      <span className="cards__value">{item.birthDate}</span>
    </li>
    <li className="cards__field">
      <h5 className="cards__ftitle">Country: </h5>
      <span className="cards__value">{item.country}</span>
    </li>
    <li className="cards__field">
      <h5 className="cards__ftitle">Skills: </h5>
      <span className="cards__value">{item.selected.join(", ")}</span>
    </li>
    <li className="cards__field">
      <h5 className="cards__ftitle">Agreement: </h5>
      <span className="cards__value">{item.agreement}</span>
    </li>
  </ul>
);

Card.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    selected: PropTypes.arrayOf(PropTypes.string.isRequired),
    agreement: PropTypes.string.isRequired,
  }),
};

Card.defaultProps = {
  item: false,
};

export default Card;
