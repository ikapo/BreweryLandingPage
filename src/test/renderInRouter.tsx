/* eslint-disable import/no-extraneous-dependencies */
import { history } from "@/utils/history";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";

export const renderInRouter = (children: JSX.Element) =>
  render(
    <Router location={history.location} navigator={history}>
      {children}
    </Router>
  );
