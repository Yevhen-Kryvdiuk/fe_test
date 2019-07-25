import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE
} from '../actions/action-types';

const initialState = {
  articles: [],
  articlesLoading: false,
  articlesLoaded: false,
  articlesError: null,
};

const actionHandlers = {
  [FETCH_ARTICLES_REQUEST]: (state) => {
    return {
      ...state,
      articlesLoading: true,
      articlesLoaded: false,
    };
  },
  [FETCH_ARTICLES_SUCCESS]: (state, action) => {
    return {
      ...state,
      articles: action.payload,
      articlesLoading: false,
      articlesLoaded: true,
    };
  },
  [FETCH_ARTICLES_FAILURE]: (state, action) => {
    return {
      ...state,
      articlesError: action.payload,
    };
  },
};
const articlesReducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return handler
    ? handler(state, action)
    : state;

};

export default articlesReducer;
