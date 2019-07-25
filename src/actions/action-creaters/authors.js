import {
  FETCH_AUTHORS_REQUEST,
  FETCH_AUTHORS_SUCCESS,
  FETCH_AUTHORS_FAILURE,
} from '../action-types';



const fetchAuthors = () => {
  return {
    type: FETCH_AUTHORS_REQUEST
  }
};


const fetchAuthorsSuccess = (authors) => {
  return {
    type: FETCH_AUTHORS_SUCCESS,
    payload: authors
  };
};


const fetchAuthorsFailure = (message) => {
  return {
    type: FETCH_AUTHORS_FAILURE,
    payload: message
  };
};

export {
  fetchAuthors,
  fetchAuthorsSuccess,
  fetchAuthorsFailure,
}
