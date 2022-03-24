import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignupPage";
import { ProductListingPage } from "./pages/ProductListingPage";
import { WishListPage } from "./pages/WishListPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage /> }/>
        <Route path="/login" element={ <LoginPage /> }/>
        <Route path="/signup" element={ <SignUpPage /> }/>
        <Route path="/passwordReset" element={ <LandingPage /> }/>
        <Route path="/productList" element={ <ProductListingPage /> }/>
        <Route path="/wishList" element={ <WishListPage /> }/>
        <Route path="/cart" element={ <LandingPage /> } />
      </Routes>
    </div>
  );
}

export default App;
