const townDataReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_TOWN_DATA":
      return { ...state, townData: action.payload };
    default:
      return state;
  }
};

export default townDataReducer;
