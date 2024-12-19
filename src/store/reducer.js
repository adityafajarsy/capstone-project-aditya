import action_key from "../constants/action-key";

const initialState = {
  cart: [],
  products: [],
  filteredProduct: [],
  loading: false,
  error: false,
};

const productReducer = (state = initialState, action) => {
  const product = action.payload;
  switch (action.type) {
    case action_key.ADD_CART:
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [...state, { ...product, qty: 1 }];
      }
      break;

    case action_key.REMOVE_CART:
      const item1 = state.find((x) => x.id === product.id);
      if (item1.qty === 1) {
        return state.filter((x) => x.id !== item1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

      case action_key.EMPTY_CART:
            return [];

    case action_key.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filteredProduct: action.payload,
        loading: action.loading,
        error: action.loading,
      };
      break;

    case action_key.FETCH_DETAIL_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: action.loading,
        error: action.loading,
      };
      break;

    case action_key.FILTER_PRODUCT:
      if (action.payload === "All") {
        return {
          ...state,
          filteredProduct: state.products,
        };
      } else {
        const filteredProducts = state.products.filter(
          (product) => product.category === action.payload
        );
        return {
          ...state,
          filteredProduct: filteredProducts,
        };
      };
      break;

    case action_key.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
      break;

    case action_key.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
      break;

    default:
      return state;
  }
};

export default productReducer;
