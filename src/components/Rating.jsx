import RateButtons from "./RateButtons";
import "./Rating.css";
const Rating = ({ rating, setRating, onSubmit }) => {
  return (
    <div className="container">
      <div className="content">
        <img className="star-image" src="./images/icon-star.svg" alt="star" />
        <h2 className="rating-title">How did we do?</h2>
        <p className="text">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <RateButtons rating={rating} onRatingChange={setRating} />
        <button className="btn" type="submit" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Rating;
