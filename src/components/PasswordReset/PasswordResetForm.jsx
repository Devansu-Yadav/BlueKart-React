import "./PasswordResetForm.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { usePasswordResetHandler } from "common/helpers";
import { useFormError } from "common/context";
import { FormError } from "components";

const PasswordResetForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { passwordResetFormData, passwordResetFormDataDispatch, passwordResetFormValidation, passwordResetHandler } = usePasswordResetHandler();
    const { isFormError, setIsFormError, formDataErr, setFormDataErr, errorFormField, setErrorFormField } = useFormError();

    const handlePasswordDisplay = (e) => {
        e.preventDefault();
        showPassword ? setShowPassword(false): setShowPassword(true);
    }

    // Resetting Form errors on loading Password Reset Form
    useEffect(() => {
        setIsFormError(false);
        setFormDataErr("");
    }, []);

    // Validating Form everytime before Submit
    useEffect(() => {
        if(!Object.values(passwordResetFormData).every(val => val === '')) {
            const formErrors = passwordResetFormValidation(passwordResetFormData);
            
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
    }, [passwordResetFormData]);

    return (
        <main className="main-container">
            <div className="form-container centered-flex-col-container">
                <form className="password-reset-form centered-flex-col-container" onSubmit={(event) => passwordResetHandler(event)}>
                    <h2 className="form-heading heading-2 space-S">Password Reset</h2>

                    <div className="password-reset-form-fields centered-flex-col-container">
                        <label className="input-label" htmlFor="email">Email*</label>
                        <input type="email" id="email" className={`input-primary password-reset-input space-S ${errorFormField === 'email' ? "input-error": ""}`} value={passwordResetFormData.email} placeholder="Enter your email"
                        onChange={(e) => passwordResetFormDataDispatch({ type: "INPUT_EMAIL", payload: e.target.value })} required/>
                        { errorFormField === "email" && formDataErr && <FormError />}
                    </div>

                    <div className="password-reset-form-fields centered-flex-col-container">
                        <label className="input-label" htmlFor="password">Password*</label>
                        <div className="password-input centered-flex-row-container">
                            <input type={showPassword ? "text": "password"} id="password" 
                            className={`input-primary password-reset-input space-S ${errorFormField === 'password' ? "input-error": ""}`} 
                            value={passwordResetFormData.password} placeholder="Enter your password" onChange={(e) => passwordResetFormDataDispatch({ type: "INPUT_PASSWORD", payload: e.target.value })} required/>
                            
                            <button className="btn-icon password-toggle-btn" onClick={(e) => handlePasswordDisplay(e)}>
                                {showPassword && <FontAwesomeIcon icon={faEye} /> }
                                {!showPassword && <FontAwesomeIcon icon={faEyeSlash} /> }
                            </button>
                        </div>
                        { errorFormField === "password" && formDataErr && <FormError />}
                    </div>

                    <input type="password" className={`input-primary password-reset-input space-S ${errorFormField === 'confirmPassword' ? "input-error": ""}`} 
                    value={passwordResetFormData.confirmPassword} placeholder="Confirm your password" 
                    onChange={(e) => passwordResetFormDataDispatch({ type: "INPUT_CONFIRM_PASSWORD", payload: e.target.value })}/>
                    { errorFormField === "confirmPassword" && formDataErr && <FormError />}

                    { !errorFormField && isFormError && formDataErr && <FormError />}
                    <button className="btn btn-primary reset-password-btn rounded-med space-S">Reset Password</button>
                    <p className="login-text space-S">Already have an account? <Link to="/login">Login</Link></p>
                </form>
            </div>
        </main>
    );
}

export { PasswordResetForm };
