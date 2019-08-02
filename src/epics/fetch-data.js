import { of } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap, map, catchError} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import {
  FETCH_AUTHORS_REQUEST,
  FETCH_TEAMS_REQUEST,
  FETCH_ARTICLES_REQUEST,
} from '../actions/action-types';

import {
  fetchArticlesSuccess,
  fetchArticlesFailure,
  fetchAuthorsSuccess,
  fetchAuthorsFailure,
  fetchTeamsSuccess,
  fetchTeamsFailure
} from '../actions/action-creaters';

const apiBase = 'https://api-team-articles.herokuapp.com/';

const fetchAuthorsEpic = (action$) => action$.pipe(
  ofType(FETCH_AUTHORS_REQUEST),
  switchMap(() => ajax.getJSON(`${apiBase}authors`).pipe(
    map(authors => fetchAuthorsSuccess(authors))
  )),
  catchError(error => of(fetchAuthorsFailure(error.message)))
);

const fetchArticlesEpic = (action$) => action$.pipe(
  ofType(FETCH_ARTICLES_REQUEST),
  switchMap(() => ajax.getJSON(`${apiBase}articles`).pipe(
    map(articles => fetchArticlesSuccess(articles))
  )),
  catchError(error => of(fetchArticlesFailure(error.message)))
);

const fetchTeamsEpic = (action$) => action$.pipe(
  ofType(FETCH_TEAMS_REQUEST),
  switchMap(() => ajax.getJSON(`${apiBase}teams`).pipe(
    map(teams => fetchTeamsSuccess(teams))
  )),
  catchError(error => of(fetchTeamsFailure(error.message)))
);

export {
  fetchAuthorsEpic,
  fetchArticlesEpic,
  fetchTeamsEpic
}
