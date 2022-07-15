import { combineReducers } from "redux";
import { CountryReducer } from "./country/country.reducer";
import { ModeReducer } from "./mode/mode.reducer";

export const rootReducer = combineReducers({
  country: CountryReducer,
  viewMode: ModeReducer,
});
