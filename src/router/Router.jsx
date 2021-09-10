import React from "react";
import { RouteComponent } from "./RouteComponent";
import { Route } from "react-router-dom";

export const Router = () => {
  const routes = RouteComponent.map((props) => (
    <Route key={props.path} {...props} />
  ));
  return <>{routes}</>;
};
