const R = require('ramda');
function getArticlesById(id, articles) {
  const getAuthors = R.propOr([], 'authors');
  return articles.filter(item => {
    return R.includes(id, getAuthors(item))
  })
}
function getValueById(id, arr) {
  return R.find(R.propEq('id', id))(arr)
}

function oneOfTeamWroteArticle(teams, authors) {
  const isCoauthors = coauthors => author => R.any(R.equals(author))(coauthors);
  return R.any(isCoauthors(teams), authors);
}

function countTeamsArticles(team, articles) {
  return articles.reduce((accumulator, currentValue) => {
    const isWrote = oneOfTeamWroteArticle(R.prop('members')(team), R.propOr([], 'authors')(currentValue));
    return accumulator + Number(isWrote);
  }, 0);
}

function getTeamArticlesDescription(id, articles, authors, teams) {
  const currentTeam = getValueById(id, teams);
  const membersOfCurrentTeam = R.prop('members', currentTeam);
  const rows = membersOfCurrentTeam.map(authorId => {
    const authorName = R.prop('name')(getValueById(authorId, authors));
    const authorArticles = R.map(R.prop('article_text'), getArticlesById(authorId, articles));
    let wrote;
    if(authorArticles.length > 2) {
      wrote = ` wrote articles '${authorArticles[0]}', '${authorArticles[1]}' and ${authorArticles.length - 2} more.`;
    }else if (authorArticles.length > 1) {
      wrote = ` wrote articles '${authorArticles[0]}' and '${authorArticles[1]}'.`;
    }
    if (authorArticles.length === 1) {
      wrote = ` wrote an article '${authorArticles[0]}'.`;
    }
    if (authorArticles.length === 0) {
      wrote = ` wrote 0 articles.`;
    }
    return `${authorName}${wrote}`;
  });
  const info = `Team '${R.prop('name', currentTeam)}' co-authored ${countTeamsArticles(currentTeam, articles)} out of ${articles.length} articles.`;

  return [...rows, info];
}

export default getTeamArticlesDescription;

