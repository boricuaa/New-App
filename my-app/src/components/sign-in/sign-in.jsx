import React from "react";
import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import CustomBtn from "../custom-btn/custom-btn";

import { signInWithGoogle } from "../../firebase/firebase.utils";

class signIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span> Sign with your Email and Password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomBtn type="submit">Sign In</CustomBtn>
            <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default signIn;
