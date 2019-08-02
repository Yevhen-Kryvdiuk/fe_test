import { ofType } from 'redux-observable';
import { capitalizeForAll, getSum } from '../helpers';
import {
  map,
  bufferWhen,
  debounceTime } from 'rxjs/operators';

import {
  NUMBERS_TYPING,
  TEXT_TYPING,
  BUTTON_CLICK,
} from '../actions/action-types';

import {
  showModifiedText,
  showSum,
  buttonDbClick
} from "../actions/action-creaters";

const textWorkingEpic = (action$) => action$.pipe(
  ofType(TEXT_TYPING),
  map(action => showModifiedText(capitalizeForAll(action.payload))),
);

const numbersWorkingEpic = (action$) => action$.pipe(
  ofType(NUMBERS_TYPING),
  map(action => showSum(getSum(action.payload))),
);

const clicksEpic = (action$) => action$.pipe(
  ofType(BUTTON_CLICK),
  bufferWhen(() => action$.pipe(debounceTime(250))),
  map(list => list.length >= 2
    ? buttonDbClick(true)
    : buttonDbClick(false))
);

export{
  textWorkingEpic,
  numbersWorkingEpic,
  clicksEpic };
