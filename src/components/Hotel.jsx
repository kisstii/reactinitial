import { useState } from "react";

const Hotel = ({ hotel }) => {
  const [details, setDetails] = useState(false);
  return (
    <div>
      <h4>{hotel.name}</h4>
      {details ? (
        <button
          onClick={() => {
            setDetails(false);
          }}
        >
          Show less
        </button>
      ) : (
        <button
          onClick={() => {
            setDetails(true);
          }}
        >
          Show more
        </button>
      )}
      <p>{details && `${hotel.city} (${hotel.stars})`}</p>
      {details && <button>{`Request more info about ${hotel.name}`}</button>}
    </div>
  );
};

export default Hotel;
