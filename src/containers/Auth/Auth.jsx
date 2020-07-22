import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../actions/Auth";

export class Auth extends Component {
  signIn(email, password) {
    onSign;
  }
  signUp() {}
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onSignIn: (email, password) => {
    dispatch(signIn());
  },
  onSignUp: (email, password) => {
    dispatch(signU());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
