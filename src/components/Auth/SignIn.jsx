import React from "react";
import "../../sass/auth/signIn.sass";
import Menu from "./Menu";
const SignIn = () => {
  return (
    <div className="sign-in">
      <Menu type={true} />
      <h1>sign in</h1>
    </div>
  );
};

export default SignIn;
