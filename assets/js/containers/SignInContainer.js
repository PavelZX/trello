import { h, render, Component } from "preact";
import { connect } from "preact-redux";
import { signIn } from "../actions/signin";

import SignIn from "../components/SignIn/SignIn";

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.signIn
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signInRequest: userData => {
      dispatch(signIn(userData));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
