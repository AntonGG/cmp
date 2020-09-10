import React, { Component } from "react";
import LeftMenu from "../../components/AppBar/LeftMenu/LeftMenu";
import logo from "../../images/AppBar/logo.png";
import "../../sass/appBar.sass";
import RightMenu from "../../components/AppBar/RightMenu/RightMenu";
import { connect } from "react-redux";
import { logout } from "../../actions/Auth";
import "../../sass/collapsible.sass"

class AppBar extends Component {
  constructor(props) {
    super(props)
    this.collapsible = React.createRef()
  }
  toggleMenu() {
    this.collapsible.current.classList.toggle("collapsible-visible")
  }
  render() {
    return (
      <div className="app-bar">
        <header>
           <img className="app-bar_logo" src={logo} alt="Logo" />
           <button className="hide-md menu-button" onClick={()=>{this.toggleMenu()}}>
             <span className="menu-button-img"></span>
           </button>
        </header>
        <div class="collapsible collapsible-smaller-md app-bar__menu-container" ref={this.collapsible}>
            <LeftMenu />
            <RightMenu
              isAuth={this.props.isAuth}
              onLogout={() => this.props.onLogout(this.props.history)}
              history={this.props.history}
            />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.App.isAuth,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: (history) => {
      dispatch(logout(history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
