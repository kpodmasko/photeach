import { SET_SEARCH_WORD, SET_SEARCH_IMAGE } from './AppStateContstants';

/**
 * TODO: change image config naming
 */

export const initialState = {
  searchWord: '',
  searchImage: {
    image: ',',
    imageName: ''
  }
};

function AppStateReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_SEARCH_WORD:
      return { ...state, searchWord: payload };
    case SET_SEARCH_IMAGE:
      return { ...state, searchImage: payload };
    default:
      return state;
  }
}

export default AppStateReducer;
