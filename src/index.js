import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { store } from "./components/redux";
import { Provider } from "react-redux";
import "./tailwind-base.css"
import "./tailwind-component.css"
import "./tailwind-utilities.css"
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>

);
