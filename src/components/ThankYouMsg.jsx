import "./ThankYouMsg.css";
const ThankYouMsg = ({ rating }) => {
  return (
    <div className="container">
      <div className="content">
        <img
          className="thank-you-image"
          src="/images/illustration-thank-you.svg"
          alt=""
        />
        <div className="selected">You selected {rating} out of 5</div>
        <h2 className="thank-you-title">Thank you!</h2>
        <p className="text">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default ThankYouMsg;
