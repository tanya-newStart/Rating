import { useState } from "react";
import "./App.css";
import Rating from "./components/Rating";
import ThankYouMsg from "./components/ThankYouMsg";

function App() {
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating > 0) {
      setIsSubmitted(true);
    } else {
      alert("Please select a rating before submitting");
    }
  };

  return (
    <div className="App">
      <div className="App-content">
        {isSubmitted ? (
          <ThankYouMsg rating={rating} />
        ) : (
          <Rating
            rating={rating}
            setRating={setRating}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}

export default App;
