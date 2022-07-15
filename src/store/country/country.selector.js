import { createSelector } from "reselect";

const country = (state) => state.country;

export const SelectCountriesArray = createSelector([country], (country) => {
  return country.countriesArray;
});
export const SelectCountriesFilter = createSelector([country], (country) => {
  return country.countriesFilter;
});
