import { combineReducers } from "redux";
import ufReducer from "./ufReducer";
import selectedUfReducer from "./selectedUfReducer";
import townsOfStateReducer from "./townsOfStateReducer";
import selectedTownReducer from "./selectedTownReducer";
import townDataReducer from "./townDataReducer";

const allReducers = combineReducers({
  fetchedUfs: ufReducer,
  selectedUf: selectedUfReducer,
  townsOfState: townsOfStateReducer,
  selectedTown: selectedTownReducer,
  townData: townDataReducer,
});

export default allReducers;
