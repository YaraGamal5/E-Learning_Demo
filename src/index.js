import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { mainTheme } from "./themes/main-theme";
import { CssBaseline } from "@mui/material";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <ThemeProvider theme={mainTheme}>
    <CssBaseline>
      <Provider store={store}>
        <App />
      </Provider>
    </CssBaseline>
  </ThemeProvider>
);
