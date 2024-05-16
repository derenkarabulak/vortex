import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_en from "./translations/en/global.json";
import global_tr from "./translations/tr/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "tr",
  resources: {
    tr: {
      global: global_tr,
    },
    en: {
      global: global_en,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <ToastContainer
          theme="dark"
          position="top-right"
          autoClose={3000}
          closeOnClick
          pauseOnHover={false}
          draggable
        />
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
