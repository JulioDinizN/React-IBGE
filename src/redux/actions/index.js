export const fetchStatesData = (state) => {
  return { type: "FETCH_STATES_DATA", payload: state };
};

export const setSelectedUf = (state) => {
  return { type: "SELECTED_UF", payload: state };
};

export const setTownsOfState = (state) => {
  return { type: "TOWNS_OF_STATE", payload: state };
};

export const setSelectedTown = (state) => {
  return { type: "SELECTED_TOWN", payload: state };
};

export const setTownData = (state) => {
  return { type: "SET_TOWN_DATA", payload: state };
};
