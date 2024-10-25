import RateButton from "../components/RateButton";
const Rating = () => {
  return (
    <div>
      <img src="./images/icon-star.svg" alt="star" />
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RateButton />
      <button type="submit">Submit</button>
    </div>
  );
};

export default Rating;
