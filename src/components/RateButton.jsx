import "./RateButton.css";
const RateButton = ({ rating, onRatingChange }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <button
          key={value}
          type="button"
          className={`rate-btn ${rating === value ? "selected" : ""}`}
          onClick={() => onRatingChange(value)}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default RateButton;
