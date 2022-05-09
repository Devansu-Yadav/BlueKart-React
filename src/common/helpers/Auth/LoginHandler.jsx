import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useFormError, useAuth, useUserData } from "common/context";
import { getCartData, getWishListData } from "../index";
import { USER_LOGIN } from "common/constants";

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
            console.log(loginResponse);
            if(loginResponse.status === 200) {
                toast.success("Login successful!");
                const { foundUser, encodedToken } = loginResponse.data;
                navigate("/productList");
                localStorage.setItem("authToken", encodedToken);
                setUserAuthToken(encodedToken);
                setIsUserAuthenticated(true);
                
                // Reset Form Errors on succesful login
                setIsFormError(false);
                setFormDataErr("");

                const { cart } = await getCartData(encodedToken);
                const { wishlist } = await getWishListData(encodedToken);
                userDataDispatch({ type: USER_LOGIN, payload: {...foundUser, cart: cart, wishList: wishlist }});
            }
        } catch(err) {
            console.log("loginHandler: Error in Login", err.response.data.errors[0]);
            toast.error("Error Logging in!");
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