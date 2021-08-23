const selectedTownReducer = (state = "", action) => {
  switch (action.type) {
    case "SELECTED_TOWN":
      return { ...state, selectedTown: action.payload };
    default:
      return state;
  }
};

export default selectedTownReducer;
