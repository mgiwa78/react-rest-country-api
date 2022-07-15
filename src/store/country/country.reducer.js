import { COUNTRY_ACTION_TYPES } from "./country.types";

const INITIAL_STATE = {
  countriesArray: [],
  countriesFilter: [],
};

export const CountryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case COUNTRY_ACTION_TYPES.SET_COUNTRIES:
      return { ...state, countriesArray: payload };
    case COUNTRY_ACTION_TYPES.SET_COUNTRIES_FILTER:
      return { ...state, countriesFilter: payload };

    default:
      return state;
  }
};
