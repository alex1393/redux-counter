import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";

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

const mapStateToProps = (state) => {
  return { counter: state };
};
const mapDispatchToProps = (dispatch) => {
  const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
  return {
    inc,
    dec,
    rnd: () => {
      const randomValue = Math.floor(Math.random() * 5);
      rnd(randomValue);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
