import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, SEARCH_MOVIE, REMOVE_FAVORITE } from "../actionTypes";

const initialState = {
  movies: [],
  favorites: []
};

export default function (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_MOVIE:{
      console.log(state.favorites)
      // const { id, m } = action.payload;
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }
    case DELETE_MOVIE: {
      console.log(state.favorites.filter((movie) => movie.imdbId !== action.payload.imdbId))
      return {
        ...state,
        favorites: state.favorites.filter((movie) => movie.imdbID !== action.payload.imdbID),
      };
    }
    case EDIT_MOVIE:{
     
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie.id === id) {
            return { ...movie, ...m };
          } else {
            return movie;
          }
        }),
      };
    }
    case SEARCH_MOVIE: {
      const { movies, searchTerm } = action.payload;
      // // if (!movies) {
      // //   return state;
      // // }
      // return {
      //   ...state,
        // movies: movies.filter((movie) =>
      //     movie.title && movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      //   ),
      // };

      return {
        ...state,
        movies: action.payload
      };
    }
    
    case REMOVE_FAVORITE: {
      console.log(action.payload[0].imdbID)
      console.log(state.favorites[0].imdbId)
      return {
        ...state,
        favorites: state.favorites.filter((movie) => movie.imdbID !== action.payload[0].imdbID)
      };
    }
    default:
      return state;
  }
}
