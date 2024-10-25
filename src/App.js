import { useState } from "react";
import "./App.css";
import Rating from "./components/Rating";
import ThankYouMsg from "./components/ThankYouMsg";

function App() {
  const [rating, setRating] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <Rating rating={rating} setRating={setRating} />
        <ThankYouMsg rating={rating} />
      </header>
    </div>
  );
}

export default App;
