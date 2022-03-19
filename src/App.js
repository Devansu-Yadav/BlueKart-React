import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage /> }/>
        <Route path="/productList" element={ <LandingPage /> }/>
        <Route path="/login" element={ <LandingPage /> }/>
        <Route path="/wishList" element={ <LandingPage /> }/>
        <Route path="/cart" element={ <LandingPage /> } />
      </Routes>
    </div>
  );
}

export default App;
