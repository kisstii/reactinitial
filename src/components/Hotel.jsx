import { useState } from "react";
import Subscription from "./Subscription";

const Hotel = ({ hotel }) => {
  const [details, setDetails] = useState(false);
  const [subscribe, setSubscribe] = useState(true);
  const [moreInfo, setMoreInfo] = useState(false);

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
      {details && <button onClick={() => setMoreInfo((s) => !s)}>{`Request more info about ${hotel.name}`}</button>}
      {subscribe && moreInfo && <Subscription setSubscribe={setSubscribe} />}
    </div>
  );
};

export default Hotel;
