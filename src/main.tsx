import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IntlProvider locale="en-US">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlProvider>
  </StrictMode>,
);
