import { COUNTRY_ACTION_TYPES } from "./country.types";

const INITIAL_STATE = {
  countriesArray: [],
  countriesFilter: [],
  countriesMemo: {},
  countryToDisplay: {},
};

export const CountryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  if (!type) return;

  switch (type) {
    case COUNTRY_ACTION_TYPES.SET_COUNTRIES:
      return { ...state, countriesArray: payload };
    case COUNTRY_ACTION_TYPES.SET_COUNTRIES_FILTER:
      return { ...state, countriesFilter: payload };
    case COUNTRY_ACTION_TYPES.SET_COUNTRY_TO_DISPLAY:
      return { ...state, countryToDisplay: payload };
    case COUNTRY_ACTION_TYPES.SET_COUNTRY_MEMO:
      return { ...state, countriesMemo: payload };

    default:
      return state;
  }
};
