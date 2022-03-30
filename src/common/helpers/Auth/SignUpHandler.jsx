import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import axios from "axios";
import { validateOnlyStrings, validateEmail, validatePassword } from "../FormValidation";
import { useFormError } from "../../context/Form-Error-Context";

const useSignupHandler = () => {
    const initialFormState = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        termsAgreed: false
    }

    const signupFormDataReducer = (state, action) => {
        switch (action.type) {
            case "INPUT_FIRST_NAME":
                return {
                    ...state,
                    firstName: action.payload
                }
            case "INPUT_LAST_NAME":
                return {
                    ...state,
                    lastName: action.payload
                }
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
            case "INPUT_TERMS_AGREED":
                return {
                    ...state,
                    termsAgreed: action.payload
                }
            default:
                return {...state};
        };
    }
    
    const navigate = useNavigate();
    const [signupFormData, formDataDispatch] = useReducer(signupFormDataReducer, initialFormState);
    const { isFormError, setFormDataErr } = useFormError();

    const signupFormValidation = ({ firstName, lastName, email, password, confirmPassword, termsAgreed }) => {
        const signupFormError = {
            isError: false,
            errorMsg: ""
        }

        const validationArr = [{...validateOnlyStrings(signupFormError, firstName, "First Name", 3), field: "firstName" },
                               {...validateOnlyStrings(signupFormError, lastName, "Last Name", 3), field: "lastName" },
                               {...validateEmail(signupFormError, email), field: "email" }, 
                               {...validatePassword(signupFormError, password), field: "password"}];
        
        if(confirmPassword.length && confirmPassword !== password) {
            validationArr.push({...signupFormError, isError: true, errorMsg: "Confirm Password should match original password!", field: "confirmPassword" });
        }

        if(!termsAgreed) {
            validationArr.push({...signupFormError, isError: true, errorMsg: "Please Agree to the terms & conditions before you can sign up.", field: "termsAgreed" });
        }

        return validationArr.reduce((acc, currFormObj) => currFormObj.isError ? [...acc, currFormObj]: [...acc], []);
    }

    const signUpHandler = async (event) => {
        event.preventDefault();
        if(!isFormError) {
            try {
                console.log(signupFormData);
                const { firstName, lastName, email, password } = signupFormData;
                const signupResponse = await axios.post("/api/auth/signup", { firstName, lastName, email, password });
                if(signupResponse.status === 201) {
                    console.log("User Created successfully!!");
                    navigate("/login");
                }
            } catch(err) {
                console.log("Error - ", err.message);
                setFormDataErr(err.message);
            }
        }
    }

    return { signupFormData, formDataDispatch, signupFormValidation, signUpHandler };
}

export { useSignupHandler };
