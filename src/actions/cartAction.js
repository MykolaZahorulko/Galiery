import { addItem, removeItem } from "../reducers/cartReduser.js";

export const addShoeToCart = (shoe) => {
  return (dispatch) => {
    dispatch(addItem(shoe));
  };
}

export const removeFromCart = (index) => {
  return (dispatch) => {
    dispatch(removeItem({ index }));
  };
};
