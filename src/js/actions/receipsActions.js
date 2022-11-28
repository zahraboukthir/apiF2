import axios from "axios";
import {
  GETALLRECEIPSFAILED,
  GETALLRECEIPSSUCCESS,
  GETONERECEIPSFAILED,
  GETONERECEIPSSUCCESS,
  LOADING,
} from "../const/receipesTypes";

export const getallreceips = (serchedvalue) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const res = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${serchedvalue.trim()}&app_id=01903511&app_key=%20586dab1ccb1f25cc9e26ddc82ac993d5`
    );
    dispatch({
      type: GETALLRECEIPSSUCCESS,
      payload: res.data.hits,
    });
  } catch (error) {
    dispatch({
      type: GETALLRECEIPSFAILED,
      payload: error,
    });
  }
};

export const getonereceipe = (id) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const res = await axios.get(
      `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=01903511&app_key=%20586dab1ccb1f25cc9e26ddc82ac993d5
        `
    );
    dispatch({
      type: GETONERECEIPSSUCCESS,
      payload: res.data.recipe,
    });
  } catch (error) {
    dispatch({
      type: GETONERECEIPSFAILED,
      payload: error,
    });
  }
};
