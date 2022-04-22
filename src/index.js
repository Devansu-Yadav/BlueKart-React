import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { makeServer } from "server";
import { 
  SideBarProvider, 
  PriceFilterSideBarProvider, 
  AuthenticationProvider, 
  FormErrorProvider,
  UserDataProvider,
  ProductsDataProvider,
  ProductPriceFilterProvider
} from "common/context";

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
