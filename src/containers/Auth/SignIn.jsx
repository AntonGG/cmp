import React from "react";
import "../../sass/auth/auth.sass";
import Menu from "../../components/Auth/Menu";
import { connect } from "react-redux";
import { setInput, signIn } from "../../actions/Auth";
import { Link } from "react-router-dom";

class SignIn extends React.Component {
  render() {
    const { inviteId, mnemonic, onSignIn } = this.props;
    return (
      <div className="auth">
        <Menu type={true} />
        <div className="auth__text-area">
          <h3>Войдите в систему</h3>
          <input
            onChange={(event) =>
              this.props.onSetInput({ mnemonic: event.target.value })
            }
            className="auth__input"
            value={this.props.mnemonic}
            placeholder="Мнемоническая фраза"
          />

          <div
            onClick={() => onSignIn(mnemonic, inviteId, this.props.history)}
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
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSetInput: (payload) => {
      dispatch(setInput(payload));
    },
    onSignIn: (mnemonic, inviteId, history) => {
      dispatch(signIn(mnemonic, inviteId, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
