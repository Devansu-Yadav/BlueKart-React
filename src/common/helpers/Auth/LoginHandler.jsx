import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useFormError } from "../../context/Form-Error-Context";
import { useAuth } from "../../context/AuthenticationContext";
import { useUserData } from "../../context/UserDataContext";
import { getCartData } from "../CartService";
import { getWishListData } from "../WishListService";
import { USER_LOGIN } from "../../constants";

const useLoginHandler = () => {
    const initialFormState = {
        email: "",
        password: ""
    }

    const navigate = useNavigate();
    const [loginFormData, setLoginFormData] = useState(initialFormState);
    const { setIsFormError, setFormDataErr } = useFormError();
    const { setIsUserAuthenticated, setUserAuthToken } = useAuth();
    const { userDataDispatch } = useUserData();

    const loginHandler = async (event, loginFormData) => {
        event.preventDefault();
        try {
            const loginResponse = await axios.post("/api/auth/login", loginFormData);
            if(loginResponse.status === 200) {
                console.log("Login successful!!");
                const { foundUser, encodedToken } = loginResponse.data;
                navigate("/productList");
                localStorage.setItem("authToken", encodedToken);
                setUserAuthToken(encodedToken);
                setIsUserAuthenticated(true);
                
                // Reset Form Errors on succesful login
                setIsFormError(false);
                setFormDataErr("");

                const cartData = await getCartData(encodedToken);
                const wishListData = await getWishListData(encodedToken);
                userDataDispatch({ type: USER_LOGIN, payload: {...foundUser, cart: cartData, wishList: wishListData }});
            }
        } catch(err) {
            console.log("loginHandler: Error in Login", err.response.data.errors[0]);
            setIsFormError(true);
            setFormDataErr(err.response.data.errors[0]);
        }
    }

    const loginAsGuestHandler = async (event) => {
        setLoginFormData(loginData => ({...loginData, email: "adarshbalika@gmail.com", password: "adarshbalika" }));
        await loginHandler(event, { email: "adarshbalika@gmail.com", password: "adarshbalika" });
    }

    return { loginHandler, loginAsGuestHandler, loginFormData, setLoginFormData };
}

export { useLoginHandler };