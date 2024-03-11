import React from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="SignupageLandingMain">
      <Link to="/">
        <img src="Netflixlogo.png" alt="" style={{width:300}}  className="NetflixLogo" />{" "}
      </Link>
      <div className="navbarHolderforSignupPage">
        <div className="navbar_optionSelectorSymbol">开</div>
        <select
          name="language_selector"
          id="language_selector"
          className="navbar_OptionSelector"
        >
          <option value="English">English</option>
          <option value="Hindi">हिंदी</option>
        </select>
        <Link to="/">
          <button className="navbar_Loginbtn">Sign In</button>
        </Link>
      </div>

      <div className="content_IntropartHeadlinesHolder">
        <div style={{ fontSize: "4rem", fontWeight: "bolder" }}>
          Unlimited movies, TV <br /> shows and more
        </div>
        <div>Starts at ₹149. Cancel anytime.</div>
        <div>
          Ready to watch? Enter your email to create or restart your membership.
        </div>
      </div>
    </div>
  );
}
