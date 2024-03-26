import React from "react";
import singleSpaReact from "single-spa-react";
import ReactDom from "react-dom/client";
import Root from "./root";

const headerLifecycle = singleSpaReact({
  React,
  ReactDOMClient: ReactDom,
  rootComponent: Root,
  renderType: "createRoot",
});

export const bootstrap = headerLifecycle.bootstrap;
export const mount = headerLifecycle.mount;
export const unmount = headerLifecycle.unmount;
