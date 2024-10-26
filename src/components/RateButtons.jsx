import { useState } from "react";
import "./RateButtons.css";

const RateButtons = ({ rating, onRatingChange }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };
  const handleMouseLeave = () => {
    setHoverIndex(null);
  };
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((value, index) => (
        <button
          key={value}
          type="button"
          className={`rate-btn ${rating === value ? "selected" : ""}
          ${hoverIndex === index ? "previous-hover" : ""}`}
          onClick={() => onRatingChange(value)}
          onMouseEnter={() => handleMouseEnter(index - 1)}
          onMouseLeave={handleMouseLeave}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default RateButtons;
