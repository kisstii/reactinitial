import React, { useState, useEffect } from "react";
import "./App.css";
import LoadingMask from "./components/LoadingMask";
import Hotel from "./components/Hotel";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("api/hotels")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setHotels(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <div className="App">
      <h1>Hotels</h1>
      {!isLoaded && <LoadingMask />}
      {!error ? hotels.map((hotel, index) => <Hotel key={index} hotel={hotel} />) : <h3>Error</h3>}
    </div>
  );
};

export default App;
