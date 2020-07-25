import React from "react";
import { Redirect, Route, Switch } from "react-router";
import SignIn from "./containers/Auth/SignIn";
import SignUp from "./containers/Auth/SignUp";
import PersonalArea from "./components/PersonalArea/PersonalArea";
import NotFound from "./components/NotFound/NotFound";

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
      <Route component={() => NotFound()} />
    </Switch>
  );
}

const ROUTES = ({ isAuth }) => [
  {
    path: "/",
    key: "ROOT_1",
    exact: true,
    component: () => <Redirect to={"/auth/signIn"} />,
  },
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
