import {
  GETALLMOVIESFAILED,
  GETALLMOVIESSUCCESS,
  MLOADING,
} from "../const/movieTypes";

const initialState = {
  loading: true,
  movieList: [],
  error: null,
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MLOADING:
      return { ...state, loading: true };
    case GETALLMOVIESSUCCESS:
      return {
        ...state,
        loading: false,
        movieList: payload,
      };

    case GETALLMOVIESFAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
