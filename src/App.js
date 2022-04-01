import "./styles/App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignupPage";
import { ProductListingPage } from "./pages/ProductListingPage";
import { WishListPage } from "./pages/WishListPage";
import { CartPage } from "./pages/CartPage";
import { MockAPI } from "./components/MockAPI/MockAPI";
import { useAuth } from "./common/context/AuthenticationContext";

function App() {
	const { isUserAuthenticated } = useAuth();

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/productList" element={<ProductListingPage />} />
				<Route path="/productList/:categoryName" element={<ProductListingPage />} />
				<Route path="/mock" element={<MockAPI />} />
				{ !isUserAuthenticated ? 
					<>
						<Route path="/login" element={<LoginPage />} />
						<Route path="/signup" element={<SignUpPage />} />
						<Route path="/passwordReset" element={<Navigate to="/login" />} />
						<Route path="/wishList" element={<Navigate to="/login" />} />
						<Route path="/cart" element={<Navigate to="/login" />} />
					</> :
					<>
						<Route path="/login" element={<Navigate to="/" />} />
						<Route path="/signup" element={<Navigate to="/" />} />
						<Route path="/passwordReset" element={<LandingPage />} />
						<Route path="/wishList" element={<WishListPage />} />
						<Route path="/cart" element={<CartPage />} />
					</>
				}
			</Routes>
		</div>
	);
}

export default App;
