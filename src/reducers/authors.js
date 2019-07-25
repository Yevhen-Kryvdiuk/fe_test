import {
  FETCH_AUTHORS_REQUEST,
  FETCH_AUTHORS_SUCCESS,
  FETCH_AUTHORS_FAILURE,
} from '../actions/action-types';

const initialState = {
  authors: [],
  authorsLoading: false,
  authorsLoaded: false,
  authorsError: null,
};

const actionHandlers = {
  [FETCH_AUTHORS_REQUEST]: (state) => {
    return {
      ...state,
      authorsLoading: true,
      authorsLoaded: false,
    };
  },
  [FETCH_AUTHORS_SUCCESS]: (state, action) => {
    return {
      ...state,
      authors: action.payload,
      authorsLoading: false,
      authorsLoaded: true,
    };
  },
  [FETCH_AUTHORS_FAILURE]: (state, action) => {
    return {
      ...state,
      authorsError: action.payload,
    };
  },
};
const authorsReducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return handler
    ? handler(state, action)
    : state;

};

export default authorsReducer;
