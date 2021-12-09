import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  RouteComponentProps,
} from "react-router-dom";
import { routes } from "./utils/config/routes";
import { Button } from "antd";
import { Navigation } from "./components";

export const Application: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        {/*<Navigation />*/}
        <Switch>
          {routes.map((route, key) => (
            <Route
              key={key}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps) => (
                <route.component {...route.name} {...route.props} {...props} />
              )}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </>
  );
};
