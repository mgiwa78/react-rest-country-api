import { createSelector } from "reselect";

const countryReducer = (state) => state.country;

export const SelectCountriesArray = createSelector(
  [countryReducer],
  (countryReducer) => {
    return countryReducer.countriesArray;
  }
);
export const SelectCountriesFilter = createSelector(
  [countryReducer],
  (countryReducer) => {
    return countryReducer.countriesFilter;
  }
);

export const SelectCountryToDisplay = createSelector(
  [countryReducer],
  (countryReducer) => {
    return countryReducer.countryToDisplay;
  }
);
export const SelectMemoisedCountries = createSelector(
  [countryReducer],
  (countryReducer) => {
    return countryReducer.countriesMemo;
  }
);
