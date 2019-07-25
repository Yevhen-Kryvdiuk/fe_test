import { combineEpics } from 'redux-observable';
import {
  fetchAuthorsEpic,
  fetchTeamsEpic,
  fetchArticlesEpic } from './fetch-data';

const rootEpic = combineEpics(
  fetchAuthorsEpic,
  fetchTeamsEpic,
  fetchArticlesEpic);

export default rootEpic;
