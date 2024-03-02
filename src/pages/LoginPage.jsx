import React, { useState } from "react";
import "./css/LoginPage.css";
import SignUpPage from "./SignUpPage";

const LoginPage = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginPage">
      <div className="loginPage__background">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="netflix-logo"
          className="loginPage__logo"
        />
      </div>
      <button onClick={() => setSignIn(true)} className="loginPage__button">
        Sign In
      </button>
      <div className="loginPage__gradient" />
      <div className="loginPage__body">
        {signIn ? (
          <SignUpPage />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more</h1>
            <h2>Watch anywhere. Cancel at anytime</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="loginPage__input">
              <form>
                <input type="email" placeholder="Email address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginPage__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
