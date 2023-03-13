import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, SEARCH_MOVIE } from '../actionTypes';

export const addmovie = (movie) => {
  return {
    type: ADD_MOVIE,
    payload: movie
  }
}

export const deletemovie = (movie) => {
  return {
    type: DELETE_MOVIE,
    payload: movie
  }
}

export const editmovie = (id, updatedMovie) => {
  return {
    type: EDIT_MOVIE,
    payload: {
      id: id,
      movie: updatedMovie
    }
  }
}
export const searchmovie = (searchTerm) => {
  // const API_KEY = "e4d8531a";
  // const MOVIE_API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`;
  return dispatch => {
    fetch(`https://www.omdbapi.com/?apikey=e4d8531a&s=${searchTerm}`)
    .then(response => response.json())
    .then(m => {
      // console.log(m);
      dispatch({
        type: SEARCH_MOVIE,
        payload: m.Search
      })
      
    })
  }
};



