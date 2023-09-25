import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { I18nextProvider } from "react-i18next";
import i18n from "./localization/locales/i18next.js";
import { ThemeProvider } from "styled-components";
// import { disableReactDevTools } from "@fvilers/disable-react-devtools ";
// if (process.env.NODE_ENV === "prodiction") disableReactDevTools();
// import theme from "./Styles/theme.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </BrowserRouter>
);
