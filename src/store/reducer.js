import action_key from "../constants/action-key";

const initialState = {
  items: [],
  products: [],
  filteredProduct: [],
  loading: false,
  error: false,
};

const productReducer = (state = initialState, action) => {
  const product = action.payload;
  switch (action.type) {
    case action_key.ADD_TO_CART:
      // Check if item already exists
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };

    case action_key.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case action_key.UPDATE_CART_QUANTITY:
  return {
    ...state,
    items: state.items.map((item) =>
      item.id === action.payload.productId
        ? { ...item, quantity: action.payload.quantity }
        : item
    ),
  };

    case action_key.CLEAR_CART:
      return initialState;

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
      }
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
