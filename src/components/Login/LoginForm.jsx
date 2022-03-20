import "./LoginForm.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
    <main className="main-container">
        <div className="form-container centered-flex-col-container">
            <form className="log-in-form centered-flex-col-container">
                <h2 className="form-heading heading-2 space-S">Log In</h2>
                <input className="input-primary login-input space-S" type="text" placeholder="Enter your email"/>
                <input className="input-primary login-input space-S" type="text" placeholder="Enter your password"/>
                <button className="btn btn-primary login-btn rounded-med space-M">Log In</button>
                <div className="login-form-text flex-col-container">
                    <p className="signup-text">Don't have an account? <Link to="/signup">Create One</Link></p>
                    <p className="password-reset-text">Forget Password? <Link to="/passwordReset">Reset here</Link></p>
                </div>
            </form>
        </div>
    </main>
    );
}

export { LoginForm };