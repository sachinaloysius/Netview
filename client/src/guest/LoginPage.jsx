import React from "react";
import "./Loginpagestyle.css";
import { Link } from "react-router-dom";
export default function LoginPage() {
  return (
    <div className="LandingpageMain">
      <div>
        <img src="Netflixlogo.png" alt="" className="NetflixLogo" />
      </div>
      <div className="login_Table">
        <div className="box_Heading">Sign In</div>
        <div>
          <input
            type="text"
            className="guestBoxButton"
            placeholder="Email or phone number"
          />
        </div>
        <div className="guestboxAlert">
          ⓧ Please enter a valid email address or phone number.
        </div>
        <div>
          <input
            type="text"
            className="guestBoxButton"
            placeholder="Password"
          />
        </div>
        <div className="guestboxAlert">
          ⓧ Your password must contain between 4 and 60 characters.
        </div>
        <div>
          <button className="guestBoxSubmitButton">Sign In</button>
        </div>
        <div className="guestForgetPassword">Forgot password?</div>
        <div className="guestRememberme_Holder">
          <input type="checkbox" />
          <span>Remember me</span>
        </div>
        <div className="guestSignUp_Holder">
          New to Netflix? <Link to='/Signup' >Sign up now</Link>.
        </div>
        <div className="guestDescription_Holder">
        To make sure you're not a bot, this page is protected by Google reCAPTCHA.  
          <Link to='https://policies.google.com/terms'>Learn more.</Link>
        </div>
      </div>
    </div>
  );
}
