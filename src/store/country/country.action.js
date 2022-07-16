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
export const SetCountryToDisplay = (countryToDisplay) => {
  return {
    type: COUNTRY_ACTION_TYPES.SET_COUNTRY_TO_DISPLAY,
    payload: countryToDisplay,
  };
};
export const SetMemoiesedCountries = (countries) => {
  const contriesObject = {};

  countries.forEach((country) => {
    contriesObject[country.name] = country;
  });

  return {
    type: COUNTRY_ACTION_TYPES.SET_COUNTRY_MEMO,
    payload: contriesObject,
  };
};
