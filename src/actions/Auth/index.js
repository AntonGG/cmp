import {
  getMnemonic as getMnemonicFetch,
  signUp as signUpFetch,
  signIn as signInFetch,
} from "../../services/auth";
import { setCurrentWallet } from "../User";

export const setInput = (payload) => async (dispatch) => {
  dispatch({ type: "SET_INPUT", payload });
};

export const signIn = (mnemonic, history) => async (dispatch) => {
  dispatch({ type: "START_LOADING_SIGN_IN" });

  try {
    const isAuth = await signInFetch(mnemonic);
    dispatch({ type: "FINISH_LOADING_SIGN_IN" });
    console.log("isAuth " + isAuth);
    if (isAuth) {
      dispatch({ type: "SIGN_UP_SUCCESS" });
      dispatch({ type: "SET_INPUT", payload: { ...isAuth } });
      history.push("/lk/balance");
    } else {
      dispatch({ type: "SIGN_UP_INVALID" });
    }
  } catch (e) {
    console.log(e);
  }
};

export const getMnemonic = () => async (dispatch) => {
  dispatch({ type: "START_LOADING_GET_MNEMONIC" });
  const mnemonic = await getMnemonicFetch();
  dispatch({ type: "SET_INPUT", payload: mnemonic });
  dispatch({ type: "FINISH_LOADING_GET_MNEMONIC" });
};

export const signUp = (mnemonic, history) => async (dispatch) => {
  dispatch({ type: "START_LOADING_SIGN_UP" });

  try {
    const isAuth = await signUpFetch(mnemonic);
    dispatch({ type: "FINISH_LOADING_SIGN_UP" });
    console.log("isAuth " + isAuth);
    if (isAuth) {
      dispatch({ type: "SIGN_UP_SUCCESS" });
      dispatch({ type: "SET_INPUT", payload: { ...isAuth } });
      history.push("/lk/balance");
    } else {
      dispatch({ type: "SIGN_UP_INVALID" });
    }
  } catch (e) {
    console.log(e);
  }
};

export const logout = (history) => async (dispatch) => {
  dispatch({ type: "LOGOUT" });
  dispatch({ type: "DELETE_MNEMONIC" });
  localStorage.removeItem("token");
  // history.push("/lk/balance");
};
