import { useState } from "react";
import Movie from "./Movie";

const Trending = () => {
  const [isDay, setIsDay] = useState(true);

  function getTodayTrending() {
    setIsDay(true);
  }

  function getWeekTrending() {
    setIsDay(false);
  }

  return (
    <div>
      <h1>Trending</h1>

      {/* Button Toggle */}
      <div className="button-container">
        <button
          onClick={getTodayTrending}
          className="button-con"
          style={{
            backgroundColor: isDay ? "navy" : "gray",
            color: "white",
          }}
        >
          Today
        </button>
        <button
          onClick={getWeekTrending}
          className="button-con"
          style={{
            backgroundColor: !isDay ? "navy" : "gray",
            color: "white",
          }}
        >
          This Week
        </button>
      </div>

      {/* Movies */}
      <div>{isDay ? <Movie filter="day" /> : <Movie filter="week" />}</div>
    </div>
  );
};

export default Trending;
