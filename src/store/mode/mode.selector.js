import { createSelector } from "reselect";

const viewMode = (state) => state.viewMode;

export const SelectMode = createSelector([viewMode], (viewMode) => {
  return viewMode.mode;
});
