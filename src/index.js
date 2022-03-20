import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { SideBarProvider } from "./common/context/SidebarContext";
import { PriceFilterSideBarProvider } from "./common/context/PriceFilterSideBarContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SideBarProvider>
        <PriceFilterSideBarProvider>
          <App />
        </PriceFilterSideBarProvider>
      </SideBarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
