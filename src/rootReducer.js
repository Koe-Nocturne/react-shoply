import { ADDITEM, DELETEITEM } from './actionTypes';
import data from "./data.json";


const INTIALSTATE = { cart: [], products: data };

function rootReducer(state=INTIALSTATE, action) {
  switch(action.type){
    case ADDITEM:
      return {
        ...state, cart: [...state.cart, action.payload]
      }
      case DELETEITEM:
        return {
          ...state, cart: state.cart.filter(item => item.it !== action.payload)
        }
        default:
          console.warn("cannot find action, ", action.type);
          return state;

  }
};

export default rootReducer;