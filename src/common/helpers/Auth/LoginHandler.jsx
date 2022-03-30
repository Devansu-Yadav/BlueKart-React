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
                console.log(loginResponse);
                const { foundUser, encodedToken } = loginResponse.data;
                console.log(encodedToken);
                navigate("/productList");
                setUserAuthToken(encodedToken);
                localStorage.setItem("authToken", encodedToken);
                setIsUserAuthenticated(true);
                const cartData = await getCartData(encodedToken);
                const wishListData = await getWishListData(encodedToken);
                userDataDispatch({ type: USER_LOGIN, payload: {...foundUser, cart: cartData, wishList: wishListData }});
            } else {
                throw new Error(loginResponse.data.errors[0]);
            }
        } catch(err) {
            console.log("loginHandler: Error in Login", err);
            setIsFormError(true);
            setFormDataErr(err.message);
        }
    }

    const loginAsGuestHandler = async (event) => {
        setLoginFormData(loginData => ({...loginData, email: "adarshbalika@gmail.com", password: "adarshbalika" }));
        await loginHandler(event, { email: "adarshbalika@gmail.com", password: "adarshbalika" });
    }

    return { loginHandler, loginAsGuestHandler, loginFormData, setLoginFormData };
}

export { useLoginHandler };