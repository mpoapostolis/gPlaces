import { ReduxState } from "./reducers";

export const loadState = (curr_ver: string) => {
  try {
    const serializedState = localStorage.getItem(curr_ver);
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = (state: ReduxState, curr_ver: string) => {
  const { i18n } = state;

  try {
    const serializedState = JSON.stringify({ i18n });
    localStorage.setItem(curr_ver, serializedState);
  } catch (e) {}
};
