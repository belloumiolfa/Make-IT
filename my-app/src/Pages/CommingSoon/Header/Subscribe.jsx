import React, { useEffect, useState } from 'react';

function Subscribe() {
  // Declare a new state variable, which we'll call "count"
  const [subscribes, setSubscribes] = useState([]);
  const [email, setEmail] = useState();

  // handle click event of the button to add subscribe
  const addSubscribe = (event, email) => {
    event.preventDefault();
    email && setSubscribes(prevItems => [...prevItems, email]);
    /**
     * add subscribes t the database
     */

    console.log(subscribes);
  };
  const handleChange = event => {
    setEmail(event.target.value);
  };

  return (
    <div className="subscribe">
      <h4>Being the first to know always feels great...</h4>
      <form>
        <div className="subscribe-form">
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <input type="submit" onClick={event => addSubscribe(event, email)} />
        </div>
        <div className="mt-2">
          <div className="loading">Loading</div>
          <div className="error-message"></div>
          <div className="sent-message">
            Your notification request was sent. Thank you!
          </div>
        </div>
      </form>
    </div>
  );
}
export default Subscribe;
