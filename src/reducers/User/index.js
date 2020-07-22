const initialState = {
  isAuth: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SIGN_IN_SUCCESS":
      return { ...state, authStatus: true };
    case "SIGN_IN_INVALID":
      return { ...state, authStatus: false };
    default:
      return state;
  }
};
