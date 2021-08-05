import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/button";
import ImageBox from "../ImageBox/imageBox";
import "./cards_styles.scss";

const Cards = ({ title, img, price, description }) => (
  <div className="card">
    <div className="card__imagebox">
      <ImageBox className="image card__image" src={img} />
    </div>
    <div className="card__info">
      <h2 className="card__title">{title}</h2>
      <p className="card__price">${price}</p>
      <p className="card__description">{description}</p>
    </div>

    <Button className="btn card__button" label="Go to property" />
  </div>
);

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Cards;
