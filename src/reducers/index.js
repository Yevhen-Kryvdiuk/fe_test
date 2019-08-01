import { combineReducers } from "redux";
import authorsReducer from './authors';
import articlesReducer from './articles';
import teamsReducer from './teams';
import toolsReducer from './tools';

const rootReducer = combineReducers({
  authorsState: authorsReducer,
  articlesState: articlesReducer,
  teamsState: teamsReducer,
  toolsState: toolsReducer
});

export default rootReducer;
