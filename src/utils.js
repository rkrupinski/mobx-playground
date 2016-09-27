import { STORAGE_KEY } from './constants';

export const saveState = state =>
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

export const restoreState = () => {
  let result;

  try {
    result = JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (err) {
    // Nope
  }

  return result || undefined;
};
