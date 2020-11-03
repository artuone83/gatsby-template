import { TOGGLE_DARKMODE } from './types';

export const toggleDarkMode = (isDarkMode) => (dispatch) => {
  dispatch({
    type: TOGGLE_DARKMODE,
    isDarkMode,
  });
};
