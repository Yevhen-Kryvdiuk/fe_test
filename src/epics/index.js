import { combineEpics } from 'redux-observable';
import {
  fetchAuthorsEpic,
  fetchTeamsEpic,
  fetchArticlesEpic } from './fetch-data';
import {
  textWorkingEpic,
  numbersWorkingEpic,
  clicksEpic } from './tools';

const rootEpic = combineEpics(
  fetchAuthorsEpic,
  fetchTeamsEpic,
  fetchArticlesEpic,
  textWorkingEpic,
  numbersWorkingEpic,
  clicksEpic);


export default rootEpic;
