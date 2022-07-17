import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "@/context/store";
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorDisplay } from "@/features/errors";
import App from "./App";
import "./assets/index.css";

const queryClient = new QueryClient();
const store = setupStore();
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary FallbackComponent={ErrorDisplay} onReset={reset}>
                <App />
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
