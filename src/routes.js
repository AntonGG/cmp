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

// генерирует публичный свитч
export const RenderPublicRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <CreateRoute key={route.key} {...route} />;
      })}
      {/* <Route component={() => <h1>Not Found Public!</h1>} /> */}
    </Switch>
  );
};

//генерирует приватный свитч
export const RenderPrivateRoutes = ({ routes, isAuth }) => {
  return isAuth ? (
    <Switch>
      {routes.map((route, i) => {
        return <CreateRoute key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found Private!</h1>} />
    </Switch>
  ) : (
    <Redirect to={{ pathname: "/auth/signIn" }} />
  );
};

export function RenderRoutes({ routes, isAuth }) {
  //console.log(routes);
  return true ? (
    <Switch>
      {routes.map((route, i) => {
        console.log(route);
        return <CreateRoute key={route.key} {...route} isAuth={isAuth} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  ) : (
    <h1>Forbidden!</h1>
  );
}

const ROUTES = [
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
        exact: true,
        component: SignUp,
      },
    ],
  },
  {
    path: "/lk",
    key: "LK",
    component: (props, isAuth) => {
      console.log(props.isAuth);
      if (!props) {
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
