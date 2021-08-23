const selectedUfReducer = (state = "", action) => {
  switch (action.type) {
    case "SELECTED_UF":
      return { ...state, selectedUf: action.payload };
    default:
      return state;
  }
};

export default selectedUfReducer;
