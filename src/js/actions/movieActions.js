import axios from "axios";
import {
  GETALLMOVIESFAILED,
  GETALLMOVIESSUCCESS,
  MLOADING,
} from "../const/movieTypes";

export const getallmovies = () => async (dispatch) => {
  dispatch({ type: MLOADING });
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_api_key}`
    );
    dispatch({
      type: GETALLMOVIESSUCCESS,
      payload: data.results,
    });
  } catch (error) {
    dispatch({
      type: GETALLMOVIESFAILED,
      payload: error,
    });
  }
};

