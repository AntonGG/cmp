const initialState = {
  isAuth: true,
  mnemonic: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_MNEMONIC":
      return { ...state, ...payload };
    case "SIGN_IN_SUCCESS":
      return { ...state, authStatus: true };
    case "SIGN_IN_INVALID":
      return { ...state, authStatus: false };
    default:
      return state;
  }
};
