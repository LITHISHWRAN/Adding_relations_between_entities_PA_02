import  { useState } from "react";
import PropTypes from "prop-types";
import '../App.css'

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating < 1 || rating > 5) return;
    onRatingSubmit(productId, rating);
    setRating(0);
  };

  return (
    <div className="box">
      <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleRatingClick(star)}
          onMouseEnter={() => setHoveredRating(star)}
          onMouseLeave={() => setHoveredRating(0)}
          style={{ cursor: "pointer", color: star <= (hoveredRating || rating) ? "gold" : "gray" }}
        >
          ★
        </span>
      ))}
      <button onClick={handleSubmit} className="button">Submit Rating</button>
      </div>
      </div>
    
  );
};

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default RatingWidget;