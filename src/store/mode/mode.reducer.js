import { MODE_ACTION_TYPES } from "./mode.types";

const INITIAL_STATE = {
  mode: null,
};

export const ModeReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case MODE_ACTION_TYPES.SET_VIEW_STATES:
      return { ...state, mode: payload };

    default:
      return state;
  }
};
