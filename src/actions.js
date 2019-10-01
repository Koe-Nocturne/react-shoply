import { ADDITEM, DELETEITEM } from "./actionTypes";

export function addItem(newItem) {
  return {
    type: ADDITEM,
    payload: newItem
  };
}

export function deleteItem(id) {
  return {
    type: DELETEITEM,
    payload: id
  };
}
