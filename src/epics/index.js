import { combineEpics } from 'redux-observable';
import {
  fetchAuthorsEpic,
  fetchTeamsEpic,
  fetchArticlesEpic } from './fetch-data';
import {
  textWorkingEpic } from './tools';

const rootEpic = combineEpics(
  fetchAuthorsEpic,
  fetchTeamsEpic,
  fetchArticlesEpic,
  textWorkingEpic,
  );

export default rootEpic;
