import React from "react";
import "./sign-in-up.scss";
import SignIn from "../../components/sign-in/sign-in";
import SingUp from "../../components/sign-up/sign-up";

const SignInUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SingUp />
  </div>
);

export default SignInUp;
