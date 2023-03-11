import React from "react";

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button onClick={dec} className="btn btn-primary btn-large">
        Dec
      </button>
      <button onClick={inc} className="btn btn-primary btn-large">
        Inc
      </button>
      <button onClick={rnd} className="btn btn-primary btn-large">
        Rnd
      </button>
    </div>
  );
};

export default Counter;
