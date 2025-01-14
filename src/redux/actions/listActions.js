import api from "../../utils/api";
import ActionTypes from "../actionTypes";

const account_id = import.meta.env.VITE_ACCOUND_ID;

export const getWatchList = () => async (dispatch) => {
  dispatch({ type: ActionTypes.LIST_LOADING });
  api
    .get(`/account/${account_id}/watchlist/movies`)
    .then((res) =>
      dispatch({ type: ActionTypes.LIST_SUCCESS, payload: res.data.results })
    )
    .catch((err) =>
      dispatch({ type: ActionTypes.LIST_ERROR, payload: err.message })
    );
};

export const toggleMovieList = (movie, isAdd) => async (dispatch) => {
  const body = {
    media_type: "movie",
    media_id: movie.id,
    watchlist: isAdd,
  };
  api
    .post(`/account/${account_id}/watchlist`, body)
    .then(() => {
      isAdd
        ? dispatch({ type: ActionTypes.ADD_TO_LIST, payload: movie })
        : dispatch({ type: ActionTypes.REMOVE_FROM_LIST, payload: movie });
    })
    .catch((err) => console.log(err));
};

export const getSearching = (term) => async (dispatch) => {
  dispatch({ type: ActionTypes.SEARCHING, payload: term });

  api
    .get("/discover/movie", { params: { query: term } })
    .then((res) =>
      dispatch({ type: ActionTypes.LIST_SUCCESS, payload: res.data.results })
    )
    .catch((err) =>
      dispatch({ type: ActionTypes.LIST_ERROR, payload: err.message })
    );
};
