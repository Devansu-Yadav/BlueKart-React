import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { validateEmail, validatePassword } from "../index";
import { useFormError } from "common/context";

const usePasswordResetHandler = () => {
    const initialFormState = {
        email: "",
        password: "",
        confirmPassword: "",
    };

    const passwordResetFormReducer = (state, action) => {
        switch (action.type) {
            case "INPUT_EMAIL":
                return {
                    ...state,
                    email: action.payload
                }
            case "INPUT_PASSWORD":
                return {
                    ...state,
                    password: action.payload
                }
            case "INPUT_CONFIRM_PASSWORD":
                return {
                    ...state,
                    confirmPassword: action.payload
                }
            default:
                return {...state};
        };
    }

    const navigate = useNavigate();
    const [passwordResetFormData, passwordResetFormDataDispatch] = useReducer(passwordResetFormReducer, initialFormState);
    const { isFormError, setIsFormError, setFormDataErr } = useFormError();

    const passwordResetFormValidation = ({ email, password, confirmPassword }) => {
        const passwordResetFormError = {
            isError: false,
            errorMsg: ""
        }

        const validationArr = [{...validateEmail(passwordResetFormError, email), field: "email" }, {...validatePassword(passwordResetFormError, password), field: "password"}];

        if(confirmPassword.length && confirmPassword !== password) {
            validationArr.push({...passwordResetFormError, isError: true, errorMsg: "Confirm Password should match original password!", field: "confirmPassword" });
        }

        return validationArr.reduce((acc, currFormObj) => currFormObj.isError ? [...acc, currFormObj]: [...acc], []);
    }

    const passwordResetHandler = async (event) => {
        event.preventDefault();
        if(!isFormError) {
            try {
                const { email, password } = passwordResetFormData;
                const passwordResetResponse = await axios.post("/api/auth/passwordReset", { email, password });
                if(passwordResetResponse.status === 200) {
                    toast.success("Password Updated successfully!!");
                    console.log("Password Updated successfully!!");

                    // Reset Form Errors on successful password reset
                    setIsFormError(false);
                    setFormDataErr("");

                    navigate("/login");
                }
            } catch (err) {
                console.log("passwordResetHandler: Error in passwordResetHandler", err.response.data.errors[0]);
                toast.error("Error Updating Password!");
                setIsFormError(true);
                setFormDataErr(err.response.data.errors[0]);
            }
        }
    }

    return { 
        passwordResetFormData, 
        passwordResetFormDataDispatch, 
        passwordResetFormValidation, 
        passwordResetHandler 
    };
};

export { usePasswordResetHandler };
