const ufReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_STATES_DATA":
      return { ...state, ufs: action.payload };
    default:
      return state;
  }
};

export default ufReducer;
