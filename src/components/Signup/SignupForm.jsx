import "./SignupForm.css";
import { Link } from "react-router-dom";

const SignupForm = () => {
    return (
    <main className="main-container">
        <div className="form-container centered-flex-col-container">
            <form className="sign-in-form centered-flex-col-container">
                <h2 className="form-heading heading-2 space-S">Sign Up</h2>
                <input className="input-primary signup-input space-S" type="text" placeholder="Enter your name"/>
                <input className="input-primary signup-input space-S" type="text" placeholder="Enter your email"/>
                <input className="input-primary signup-input space-S" type="text" placeholder="Enter your password"/>
                <input className="input-primary signup-input space-S" type="text" placeholder="Confirm your password"/>
                <div className="terms-conditions centered-flex-row-container space-M">
                    <input className="input-checkbox" name="accept-terms" type="checkbox"/>
                    <label for="input-checkbox" className="terms-conditions-label">I accept all terms and conditions</label>
                </div>
                <button className="btn btn-primary signup-btn rounded-med space-S">Sign In</button>
                <p className="login-text space-S">Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    </main>
    );
}

export { SignupForm };