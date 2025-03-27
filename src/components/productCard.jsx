/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import RatingWidget from "../components/RatingWidget";
import '../App.css'

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div>
      <img src={product.image} alt={product.name} width="150" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Average Rating: {product.avgRating}</p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default ProductCard;