import React, { useState } from "react";
import LoadingMask from "./LoadingMask";

const Subscription = ({ setSubscribe }) => {
  const [valid, setValid] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [result, setResult] = useState(false);

  function validation(e) {
    setEmailValue(e.target.value);
    if (e.target.value.includes(".") && e.target.value.includes("@")) {
      setValid(true);
    } else {
      setValid(false);
    }
  }

  function submitted(e) {
    e.preventDefault();

    const data = { email: emailValue };

    setShowForm(false);

    fetch("api/hotels/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setResult("Subscribed");
      })
      .catch((error) => {
        setResult("Error");
      })
      .finally(() =>
        setTimeout(() => {
          setSubscribe(false);
        }, 5000)
      );
  }

  const form = (
    <form onSubmit={submitted}>
      <input type="email" id="email" name="email" onInput={validation} />
      {valid ? <button>Subscribe</button> : <button disabled>Subscribe</button>}
    </form>
  );

  return (
    <div>
      {result ? (
        <h2>{result}</h2>
      ) : (
        <div>
          <h2>Subscribe</h2>
          {showForm ? form : <LoadingMask />}
        </div>
      )}
    </div>
  );
};

export default Subscription;
