import { SET_SEARCH_WORD } from './AppStateContstants';

export const initialState = {
  searchWord: ''
};

function AppStateReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_SEARCH_WORD:
      return { ...state, searchWord: payload };
    default:
      return state;
  }
}

export default AppStateReducer;
