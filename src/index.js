import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>,
  document.getElementById("root")
);
