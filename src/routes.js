import React from "react";
import { Redirect, Route, Switch } from "react-router";
import SignIn from "./containers/Auth/SignIn";
import SignUp from "./containers/Auth/SignUp";
import PersonalArea from "./containers/PersonalArea/PersonalArea";
import NotFound from "./components/NotFound/NotFound";
import PartnerCabinet from "./containers/PartnerCabinet/PartnerCabinet";
import TaskFeed from "./containers/TaskFeed/TaskFeed";
import Inviter from "./containers/Inviter";
import Presale from "./containers/Presale/Presale";

// генерирует Route компонент
const CreateRoute = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <CreateRoute key={route.key} {...route} />;
      })}
      <Route component={() => NotFound()} />
    </Switch>
  );
}

const arr = `
http://ali.pub/2sjlnd
http://ali.pub/2u76h2
http://ali.pub/2ndpnd
http://ali.pub/2qnnws
http://ali.pub/2tiqzo
http://ali.pub/2jtm1j
http://ali.pub/2t00a2
http://ali.pub/2qcnwp
http://ali.pub/2qcoj2
http://ali.pub/2urvnl
http://ali.pub/2urvod
http://ali.pub/2vegw4`.split("\n");

const ROUTES = [
  {
    path: "/:invite",
    key: "ROOT_INVITE",
    exact: true,
    component: Inviter,
  },
  {
    path: "/youtube/123",
    key: "ROOT_3",
    exact: true,
    component: () => (
      <div>
        {arr.map((v) => (
          <div>
            <a href={v}>{v}</a>
          </div>
        ))}
      </div>
    ),
  },
  {
    path: "/",
    key: "ROOT_1",
    exact: true,
    component: () => <Redirect to={"/auth/signIn"} />,
  },
  { path: "/home", key: "ROOT", exact: true, component: () => <h1>HOME</h1> },
  // {
  //   path: "/inv",
  //   key: "INV",
  //   component: RenderRoutes,
  //   routes: [
  //     {
  //       path: "/inv/:invite",
  //       key: "INV_INVITE",
  //       component: Inviter,
  //     },
  //   ],
  // },
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
      const token = localStorage.getItem("token");
      if (token) {
        return <RenderRoutes {...props} />;
      } else {
        return <Redirect to={"/"} />;
      }
    },
    routes: [
      {
        path: "/lk/balance",
        key: "LK_BALANCE",
        component: PersonalArea,
      },
      {
        path: "/lk/partner-cabinet",
        key: "LK_PARTNER_CABINET",
        component: PartnerCabinet,
      },
      {
        path: "/lk/task-feed",
        key: "LK_TASK_FEED",
        component: TaskFeed,
      },
      {
        path: "/lk/presale",
        key: "LK_PRESALE",
        component: Presale,
      },
    ],
  },
];

export default ROUTES;
