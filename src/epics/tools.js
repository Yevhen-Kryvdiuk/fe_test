import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import capitalizeForAll from '../helpers/capitalizeForAll';

import {
  TEXT_TYPING,
} from '../actions/action-types';

import {
  showModifiedText
} from "../actions/action-creaters";

const textWorkingEpic = (action$, state$) => action$.pipe(
  ofType(TEXT_TYPING),
  map(action => showModifiedText(capitalizeForAll(action.payload))),
);

export{
  textWorkingEpic };
