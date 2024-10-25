import "./RateButton.css";
const RateButton = ({}) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <button key={value} type="button" className={`rate-btn`}>
          {value}
        </button>
      ))}
    </div>
  );
};

export default RateButton;
