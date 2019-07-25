import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
} from '../action-types';



const fetchArticles = () => {
  return {
    type: FETCH_ARTICLES_REQUEST
  }
};


const fetchArticlesSuccess = (Articles) => {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    payload: Articles
  };
};


const fetchArticlesFailure = (message) => {
  return {
    type: FETCH_ARTICLES_FAILURE,
    payload: message
  };
};

export {
  fetchArticles,
  fetchArticlesSuccess,
  fetchArticlesFailure,
}
