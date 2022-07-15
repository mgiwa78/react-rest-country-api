import { COUNTRY_ACTION_TYPES, MODE_ACTION_TYPES } from "./mode.types";

export const SetViewMode = (viewMode) => {
  return { type: MODE_ACTION_TYPES.SET_VIEW_STATES, payload: viewMode };
};
