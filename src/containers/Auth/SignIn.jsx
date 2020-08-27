import React from "react";
import "../../sass/auth/auth.sass";
import Menu from "../../components/Auth/Menu";
import { connect } from "react-redux";
import { setInput, signIn } from "../../actions/Auth";
import { Link } from "react-router-dom";
import ErrorBlock from "../../components/ErrorBlock";

class SignIn extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.onSetInput({ isAuth: true });
      this.props.history.push("/lk/balance");
    }
  }
  render() {
    const { mnemonic, onSignIn, onSetInput, isError, errorMsg } = this.props;
    return (
      <div className="auth">
        <div className="auth__background"></div>
        <Menu type={true} />
        <div className="auth__text-area">
          <h3>Войдите в систему</h3>
          <input
            onChange={(event) => onSetInput({ mnemonic: event.target.value })}
            className="auth__input"
            value={mnemonic}
            placeholder="Мнемоническая фраза"
          />
          <ErrorBlock isError={isError} errorMsg={errorMsg} />
          <div
            onClick={() => onSignIn(mnemonic, this.props.history)}
            className="auth__button"
          >
            Войти &#10230;
          </div>
          <Link to="/restore-access">Восстановить доступ</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mnemonic: state.User.mnemonic,
  inviteId: state.User.inviteId,
  isError: state.App.isError,
  errorMsg: state.App.errorMsg,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSetInput: (payload) => {
      dispatch(setInput(payload));
    },
    onSignIn: (mnemonic, history) => {
      dispatch(signIn(mnemonic, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
