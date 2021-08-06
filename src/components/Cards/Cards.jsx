import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import ImageBox from "../ImageBox/ImageBox";
import TextBox from "../TextBox/TextBox";
import "./Cards.scss";

const Cards = ({ title, img, price, description, alt }) => (
  <div className="card">
    <div className="card__imagebox">
      <ImageBox className="image card__image" src={img} alt={alt} />
    </div>
    <TextBox title={title} subtitle={`$${price}`} description={description} />
    <Button className="btn card__button" label="Go to property" />
  </div>
);

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Cards;
