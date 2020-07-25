const initialState = {
  isAuth: true,
  mnemonic: "",
  inviteId: "0",
  partnerUrl:"cmp.ru/sdfsdf/w/23d/e"
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_INPUT":
      return { ...state, ...payload };
    case "SIGN_IN_SUCCESS":
      return { ...state, authStatus: true };
    case "SIGN_IN_INVALID":
      return { ...state, authStatus: false };
    default:
      return state;
  }
};
