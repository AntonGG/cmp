import React from "react";
import "../../sass/auth/signIn.sass";
import Menu from "../../components/Auth/Menu";
import { connect } from "react-redux";
import { setInput, signIn } from "../../actions/Auth";
import { Link } from "react-router-dom";

class SignIn extends React.Component {
  render() {
    const { inviteId, mnemonic, onSignIn } = this.props;
    return (
      <div className="sign-in">
        <Menu type={true} />
        <div className="sign-in__text-area">
          <h3>Войдите в систему</h3>
          <input
            onChange={(event) =>
              this.props.onSetInput({ inviteId: event.target.value })
            }
            //value={this.props.inviteId}
            className="sign-in__input"
            placeholder="ID пользователя"
          />
          <input
            onChange={(event) =>
              this.props.onSetInput({ mnemonic: event.target.value })
            }
            className="sign-in__input"
            value={this.props.mnemonic}
            placeholder="Мнемоническая фраза"
          />
          <div
            onClick={() => onSignIn(mnemonic, inviteId)}
            className="sign-in__button"
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
    onSignIn: (mnemonic, inviteId) => {
      dispatch(signIn(mnemonic, inviteId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
