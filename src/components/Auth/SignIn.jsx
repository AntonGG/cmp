import React from "react";
import "../../sass/auth/signIn.sass";
import Menu from "./Menu";
const SignIn = () => {
  return (
    <div className="sign-in">
      <Menu type={true} />
      <div className="sign-in__text-area">
        <h3>Войдите в систему</h3>
        <input className="sign-in__input" />
        <input className="sign-in__input" />
        <a href="#/lk/balance" class="sign-in__button">
          Войти &#10230;
        </a>
      </div>
    </div>
  );
};

export default SignIn;
