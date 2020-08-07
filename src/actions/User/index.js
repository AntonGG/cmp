import {
  getWallets,
  convertCrypto as convertCryptoFetch,
} from "../../services/user";

export const getWalletsAndPartners = () => async (dispatch) => {
  console.log("getWalletsAndPartners");
  const json = await getWallets();
  console.log(json);
  dispatch({ type: "SET_INPUT", payload: json });
};

export const convertCrypto = (coin_code) => async (dispatch) => {
  console.log("getWalletsAndPartners");
  const json = await convertCryptoFetch(coin_code);
  console.log(json);
  dispatch({ type: "SET_INPUT", payload: json });
};

export const setCurrentWallet = (currentWallet) => async (dispatch) => {
  dispatch({ type: "SET_INPUT", payload: { currentWallet } });
};
