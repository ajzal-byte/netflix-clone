import React, { useRef } from "react";
import { auth } from "../firebase";
import "./css/SignUpPage.css";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => console.log(authUser))
      .catch((error) => toast.error(error.message));
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => console.log(authUser))
      .catch((error) =>
        toast.error(error.message, {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        })
      );
  };
  return (
    <div className="signupPage">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Enter address" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupPage__gray">New to Netflix?</span>
          <span className="signupPage__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpPage;
