import {
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_FAILURE,
} from '../actions/action-types';

const initialState = {
  teams: [],
  teamsLoading: false,
  teamsLoaded: false,
  teamsError: null,
};

const actionHandlers = {
  [FETCH_TEAMS_REQUEST]: (state) => {
    return {
      ...state,
      teamsLoading: true,
      teamsLoaded: false,
    };
  },
  [FETCH_TEAMS_SUCCESS]: (state, action) => {
    return {
      ...state,
      teams: action.payload,
      teamsLoading: false,
      teamsLoaded: true,
    };
  },
  [FETCH_TEAMS_FAILURE]: (state, action) => {
    return {
      ...state,
      teamsError: action.payload,
    };
  },
};
const teamsReducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return handler
    ? handler(state, action)
    : state;

};

export default teamsReducer;
