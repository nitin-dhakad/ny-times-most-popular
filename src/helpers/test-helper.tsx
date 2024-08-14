import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "../store";



export const renderWithProviders = (
  ui: React.ReactElement,
  { route = "/", ...renderOptions } = {}
) => {
  window.history.pushState({}, "Test page", route);
  return render(
    <Provider store={setupStore()}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>,
    renderOptions
  );
};
