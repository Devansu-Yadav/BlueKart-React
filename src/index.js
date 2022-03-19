import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { SideBarProvider } from "./common/context/SidebarContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SideBarProvider>
        <App />
      </SideBarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
