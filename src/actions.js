import { ADDITEM, DELETEITEM } from "./actionTypes";

export function addItem(newItem) {
  console.log("ACTIONS ADDITEM:", newItem);
  return {
    type: ADDITEM,
    payload: newItem
  };
}

export function deleteItem(id) {
  console.log("ID OF DELETE:", id);
  return {
    type: DELETEITEM,
    payload: id
  };
}
