import { initWal } from "../../services/user";

export const getWalletsAndPartners = () => async (dispatch) => {
  const wallets = await initWal();
  dispatch({ type: "SET_INPUT", payload: wallets });
};

export const setCurrentWallet = (currentWallet) => async (dispatch) => {
  dispatch({ type: "SET_INPUT", payload: { currentWallet } });
};
