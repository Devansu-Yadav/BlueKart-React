import "styles/App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "common/context";
import { 
	LandingPage, 
	LoginPage, 
	SignUpPage, 
	ProductListingPage, 
	WishListPage, 
	CartPage, 
	NotFound404Page 
} from "pages";
import { MockAPI } from "components";

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
				<Route path="*" element={<NotFound404Page />} />
			</Routes>
		</div>
	);
}

export default App;
