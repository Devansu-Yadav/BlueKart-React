import "./SignupForm.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useSignupHandler } from "../../common/helpers/Auth/SignUpHandler";
import { FormError } from "../FormError/FormError";
import { useFormError } from "../../common/context/Form-Error-Context";

const SignupForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signupFormData, formDataDispatch, signupFormValidation, signUpHandler } = useSignupHandler();
    const { formDataErr, setFormDataErr, setIsFormError, errorFormField, setErrorFormField } = useFormError();

    const handlePasswordDisplay = (e) => {
        e.preventDefault();
        showPassword ? setShowPassword(false): setShowPassword(true);
    }

    // Validating Form everytime before Submit
    useEffect(() => {
        if(!Object.values(signupFormData).every(val => val === '')) {
            const formErrors = signupFormValidation(signupFormData);
            
            if(formErrors.length) {
                setIsFormError(true);
                setFormDataErr(formErrors[0].errorMsg);
                setErrorFormField(formErrors[0].field);
            } else {
                setIsFormError(false);
                setFormDataErr("");
                setErrorFormField("");
            }
        }
    }, [signupFormData]);

    return (
    <main className="main-container">
        <div className="form-container centered-flex-col-container">
            <form className="sign-in-form centered-flex-col-container" onSubmit={(event) => signUpHandler(event)}>
                <h2 className="form-heading heading-2 space-S">Sign Up</h2>
                <div className="signup-form-fields centered-flex-col-container">
                    <label className="input-label">First Name*</label>
                    <input type="text" className="input-primary signup-input space-S" value={signupFormData.name} placeholder="Enter First Name" 
                    onChange={(e) => formDataDispatch({ type: "INPUT_FIRST_NAME", payload: e.target.value })} required/>
                    { errorFormField === "firstName" && formDataErr && <FormError />}
                </div>

                <div className="signup-form-fields centered-flex-col-container">
                    <label className="input-label">Last Name*</label>
                    <input type="text" className="input-primary signup-input space-S" value={signupFormData.name} placeholder="Enter Last Name" 
                    onChange={(e) => formDataDispatch({ type: "INPUT_LAST_NAME", payload: e.target.value })} required/>
                    { errorFormField === "lastName" && formDataErr && <FormError />}
                </div>
                <div className="signup-form-fields centered-flex-col-container">
                    <label className="input-label">Email*</label>
                    <input type="email" className="input-primary signup-input space-S" value={signupFormData.email} placeholder="Enter your email"
                    onChange={(e) => formDataDispatch({ type: "INPUT_EMAIL", payload: e.target.value })} required/>
                    { errorFormField === "email" && formDataErr && <FormError />}
                </div>
                <div className="signup-form-fields centered-flex-col-container">
                    <label className="input-label">Password*</label>
                    <div className="password-input centered-flex-row-container">
                        <input type={showPassword ? "text": "password"} className="input-primary signup-input space-S" value={signupFormData.password} placeholder="Enter your password"
                        onChange={(e) => formDataDispatch({ type: "INPUT_PASSWORD", payload: e.target.value })} required/>
                        
                        <button className="btn-icon password-toggle-btn" onClick={(e) => handlePasswordDisplay(e)}>
                            {showPassword && <FontAwesomeIcon icon={faEye} /> }
                            {!showPassword && <FontAwesomeIcon icon={faEyeSlash} /> }
                        </button>
                    </div>
                    { errorFormField === "password" && formDataErr && <FormError />}
                </div>
                <input type="password" className="input-primary signup-input space-S" value={signupFormData.confirmPassword} placeholder="Confirm your password"
                onChange={(e) => formDataDispatch({ type: "INPUT_CONFIRM_PASSWORD", payload: e.target.value })}/>
                { errorFormField === "confirmPassword" && formDataErr && <FormError />}

                <div className="terms-conditions centered-flex-row-container space-M">
                    <input className="input-checkbox" name="accept-terms" checked={signupFormData.termsAgreed} type="checkbox"
                    onChange={(e) => formDataDispatch({ type: "INPUT_TERMS_AGREED", payload: e.target.checked })} required/>
                    <label htmlFor="input-checkbox" className="terms-conditions-label">I accept all terms and conditions</label>
                </div>
                { errorFormField === "termsAgreed" && formDataErr && <FormError />}
                
                <button className="btn btn-primary signup-btn rounded-med space-S">Sign UP</button>
                <p className="login-text space-S">Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    </main>
    );
}

export { SignupForm };
