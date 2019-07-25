import { combineReducers } from "redux";
import authorsReducer from './authors';
import articlesReducer from './articles';
import teamsReducer from './teams';

const rootReducer = combineReducers({
  authorsState: authorsReducer,
  articlesState: articlesReducer,
  teamsState: teamsReducer
});

export default rootReducer;
