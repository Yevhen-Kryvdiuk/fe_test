import {
  TEXT_TYPING,
  SHOW_MODIFIED_TEXT,
  BUTTON_CLICK,
  BUTTON_DBCLICK,
  NUMBERS_TYPING,
  SHOW_SUM,
} from '../action-types';



const textTyping = (value) => {
  return {
    type: TEXT_TYPING,
    payload: value
  }
};

const showModifiedText = (value) => {
  return {
    type: SHOW_MODIFIED_TEXT,
    payload: value
  }
};


const buttonClick = () => {
  return {
    type: BUTTON_CLICK
  };
};

const buttonDbClick = (value) => {
  return {
    type: BUTTON_DBCLICK,
    payload: value
  };
};


const numbersTyping = (value) => {
  return {
    type: NUMBERS_TYPING,
    payload: value
  };
};

const showSum = (value) => {
  return {
    type: SHOW_SUM,
    payload: value
  };
};

export {
  textTyping,
  showModifiedText,
  buttonClick,
  buttonDbClick,
  numbersTyping,
  showSum,
}
