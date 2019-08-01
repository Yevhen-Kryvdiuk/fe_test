import {
  TEXT_TYPING,
  SHOW_MODIFIED_TEXT,
  BUTTON_DBCLICK,
  NUMBERS_TYPING,
  SHOW_SUM,
} from '../actions/action-types';

const initialState = {
  text: '',
  modifiedText: '',
  isDbClick: false,
  numbers: '',
  sum: 0

};

const actionHandlers = {
  [TEXT_TYPING]: (state, action) => {
    return {
      ...state,
      text: action.payload
    };
  },
  [SHOW_MODIFIED_TEXT]: (state, action) => {
    return {
      ...state,
      modifiedText: action.payload
    };
  },
  [BUTTON_DBCLICK]: (state, action) => {
    return {
      ...state,
      isDbClick: action.payload
    };
  },
  [NUMBERS_TYPING]: (state, action) => {
    return {
      ...state,
      numbers: action.payload
    };
  },
  [SHOW_SUM]: (state, action) => {
    return {
      ...state,
      sum: action.payload
    };
  },
};
const toolsReducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return handler
    ? handler(state, action)
    : state;

};

export default toolsReducer;
