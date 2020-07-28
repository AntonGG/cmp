import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AppBar from "./containers/AppBar/AppBar";
import ROUTES, { RenderRoutes } from "./routes";
import "./App.sass";
import Footer from "./components/Footer/Footer";
import "./fonts/GothamPro/stylesheet.css";
import { setInput } from "./actions/Auth";

export class App extends Component {
  componentDidMount() {
    if (!this.props.isAuth) {
      if (localStorage.getItem("token")) {
        this.props.onIsAuth();
      }
    }
  }
  render() {
    return (
      <div>
        <AppBar />
        <div className="body">
          <RenderRoutes routes={ROUTES} />
        </div>
        <Footer />
      </div>
    );
  }
}
function displayRouteMenu(routes) {
  /**
   * Render a single route as a list item link to the config's pathname
   */
  function singleRoute(route) {
    return (
      <li key={route.key}>
        <Link to={route.path}>
          {route.key} ({route.path})
        </Link>
      </li>
    );
  }

  // loop through the array of routes and generate an unordered list
  return (
    <ul>
      {routes.map((route) => {
        // if this route has sub-routes, then show the ROOT as a list item and recursively render a nested list of route links
        if (route.routes) {
          return (
            <React.Fragment key={route.key}>
              {singleRoute(route)}
              {displayRouteMenu(route.routes)}
            </React.Fragment>
          );
        }

        // no nested routes, so just render a single route
        return singleRoute(route);
      })}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.App.isAuth,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onIsAuth: () => {
      dispatch(setInput({ isAuth: true }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
