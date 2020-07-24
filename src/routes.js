import React from "react";
import { Redirect, Route, Switch } from "react-router";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import PersonalArea from "./components/PersonalArea/PersonalArea";

// генерирует Route компонент
const CreateRoute = (route) => {
  console.log(route);
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

export function RenderRoutes({ routes }) {
  console.log(routes);
  return (
    <Switch>
      {routes.map((route, i) => {
        console.log(route);
        return <CreateRoute key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}

const ROUTES = ({ isAuth }) => [
  { path: "/home", key: "ROOT", exact: true, component: () => <h1>HOME</h1> },
  {
    path: "/auth",
    key: "AUTH",
    component: RenderRoutes,
    routes: [
      {
        path: "/auth/signIn",
        key: "AUTH_SIGNIN",
        component: SignIn,
      },
      {
        path: "/auth/signUp",
        key: "AUTH_SIGNUP",
        component: SignUp,
      },
    ],
  },
  {
    path: "/lk",
    key: "LK",
    component: (props) => {
      console.log("ISAUTH: " + isAuth);
      if (!isAuth) {
        alert("You need to log in to access app routes");
        return <Redirect to={"/"} />;
      }
      return <RenderRoutes {...props} />;
    },
    routes: [
      {
        path: "/lk/balance",
        key: "LK_BALANCE",
        component: PersonalArea,
      },
    ],
  },
];

export default ROUTES;
