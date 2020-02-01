import {
  SET_SEARCH_WORD,
  SET_SEARCH_IMAGE,
  SET_RESULT_IMAGE
} from './AppStateContstants';

export const initialState = {
  searchWord: '',
  searchImage: {
    name: '',
    value: ''
  },
  resultImage: {
    name: '',
    value: ''
  }
};

function AppStateReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_SEARCH_WORD:
      return { ...state, searchWord: payload };
    case SET_SEARCH_IMAGE:
      return { ...state, searchImage: payload };
    case SET_RESULT_IMAGE:
      return { ...state, resultImage: payload };
    default:
      return state;
  }
}

export default AppStateReducer;
