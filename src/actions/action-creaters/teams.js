import {
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_FAILURE,
} from '../action-types';



const fetchTeams = () => {
  return {
    type: FETCH_TEAMS_REQUEST
  }
};


const fetchTeamsSuccess = (teams) => {
  return {
    type: FETCH_TEAMS_SUCCESS,
    payload: teams
  };
};


const fetchTeamsFailure = (message) => {
  return {
    type: FETCH_TEAMS_FAILURE,
    payload: message
  };
};

export {
  fetchTeams,
  fetchTeamsSuccess,
  fetchTeamsFailure,
}
