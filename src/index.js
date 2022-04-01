import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { SideBarProvider } from "./common/context/SidebarContext";
import { PriceFilterSideBarProvider } from "./common/context/PriceFilterSideBarContext";
import { AuthenticationProvider } from "./common/context/AuthenticationContext";
import { FormErrorProvider } from "./common/context/Form-Error-Context";
import { UserDataProvider } from "./common/context/UserDataContext";
import { ProductsDataProvider } from "./common/context/ProductsDataContext";
import { ProductPriceFilterProvider } from "./common/context/ProductPriceFilterContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationProvider>
      <FormErrorProvider>
        <UserDataProvider>
          <ProductsDataProvider>
            <ProductPriceFilterProvider>
                <BrowserRouter>
                  <SideBarProvider>
                      <PriceFilterSideBarProvider>
                        <App />
                      </PriceFilterSideBarProvider>
                  </SideBarProvider>
                </BrowserRouter>
              </ProductPriceFilterProvider>
          </ProductsDataProvider>
        </UserDataProvider>
      </FormErrorProvider>
    </AuthenticationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
