import { ADDITEM, DELETEITEM } from "./actionTypes";
import data from "./data.json";

const INTIALSTATE = { cart: [], products: data };

function rootReducer(state = INTIALSTATE, action) {
  switch (action.type) {
    case ADDITEM:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case DELETEITEM:
      //item is an object with id and payload, we're matching if item returns a value
      //if it does. it gets deleted/filtered
      return {
        ...state,
        cart: state.cart.filter(item => !item[action.payload])
      };

    default:
      console.warn("cannot find action, ", action.type);
      return state;
  }
}

export default rootReducer;
