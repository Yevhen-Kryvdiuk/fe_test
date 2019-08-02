import { getTeamArticlesDescription } from '../helpers';

const selectTeamArticlesDescription = (state, id) => {
  const { authorsState, articlesState, teamsState} = state;
  return getTeamArticlesDescription(id, articlesState.articles, authorsState.authors, teamsState.teams);
};

const selectLoading = state => {
  const { authorsState, articlesState, teamsState} = state;
  return authorsState.authorsLoading || articlesState.articlesLoading || teamsState.teamsLoading;
};

const selectLoaded = state => {
  const { authorsState, articlesState, teamsState} = state;
  return authorsState.authorsLoaded && articlesState.articlesLoaded && teamsState.teamsLoaded;
};
const selectError = state => {
  const { authorsState, articlesState, teamsState} = state;
  return authorsState.authorsError || articlesState.articlesError || teamsState.teamsError;
};

export {
  selectTeamArticlesDescription,
  selectLoading,
  selectLoaded,
  selectError
}
