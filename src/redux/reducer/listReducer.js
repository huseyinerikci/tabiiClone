import ActionTypes from "../actionTypes";

const initialstate = {
  list: [],
  isLoading: true,
  error: null,
  searchTerm: "",
};
const listReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ActionTypes.LIST_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.LIST_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case ActionTypes.LIST_SUCCESS:
      return { ...state, isLoading: false, error: null, list: action.payload };
    case ActionTypes.ADD_TO_LIST:
      const updated = state.list.concat(action.payload);
      return { ...state, list: updated };
    case ActionTypes.REMOVE_FROM_LIST:
      const filtered = state.list.filter((i) => i.id !== action.payload.id);
      return { ...state, list: filtered };
    case ActionTypes.SEARCHING:
      return {
        ...state,
        isLoading: true,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};

export default listReducer;
