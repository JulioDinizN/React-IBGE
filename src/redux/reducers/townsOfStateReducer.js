const townsOfStateReducer = (state = [], action) => {
  switch (action.type) {
    case "TOWNS_OF_STATE":
      return { ...state, towns: action.payload };
    default:
      return state;
  }
};

export default townsOfStateReducer;
