import {
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_FAILURE,
  FIND_TEAM,
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

const findTeam = (team) => {
  return {
    type: FIND_TEAM,
    payload: team
  };
};

export {
  fetchTeams,
  fetchTeamsSuccess,
  fetchTeamsFailure,
  findTeam
}
