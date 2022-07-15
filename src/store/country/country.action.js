import { COUNTRY_ACTION_TYPES } from "./country.types";

export const SetCountriesAction = (countriesArray) => {
  return { type: COUNTRY_ACTION_TYPES.SET_COUNTRIES, payload: countriesArray };
};
export const SetCountriesFilter = (countriesFilter) => {
  return {
    type: COUNTRY_ACTION_TYPES.SET_COUNTRIES_FILTER,
    payload: countriesFilter,
  };
};
