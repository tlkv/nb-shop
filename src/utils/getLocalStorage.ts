import { LS_KEY } from '../data/constants';

const getLocalStorage = () => {
  try {
    const persistedState = localStorage.getItem(LS_KEY);
    if (persistedState) return JSON.parse(persistedState);
  } catch (err) {
    console.error(err);
  }
};

export default getLocalStorage;
