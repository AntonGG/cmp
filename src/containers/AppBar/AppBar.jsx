import React, { Component } from "react";
import LeftMenu from "../../components/AppBar/LeftMenu/LeftMenu";
import logo from "../../images/AppBar/logo.png";
import "../../sass/appBar.sass";
import RightMenu from "../../components/AppBar/RightMenu/RightMenu";
import { connect } from "react-redux";

class AppBar extends Component {
  render() {
    return (
      <div className="app-bar">
        <div className="app-bar_left-container">
          <img className="app-bar_logo" src={logo} alt="Logo" />
          <LeftMenu />
        </div>
        <RightMenu isAuth={this.props.isAuth} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.User.isAuth,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSetInput: (payload) => {
//       dispatch(setInput(payload));
//     },
//   };
// };

export default connect(mapStateToProps, null)(AppBar);
