import action_key from "../constants/action-key";

const initialState = {
  movies: [],
  movie: {},
  products: [],
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case action_key.FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };
    case action_key.FETCH_ALL_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case action_key.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}
