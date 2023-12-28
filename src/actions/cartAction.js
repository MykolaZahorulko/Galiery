import { addItem, removeItem } from "../reducers/cartReduser.js";

export const addShoeToCart = (shoe) => {
  return (dispatch) => {
    dispatch(addItem(shoe));
  };
}

export const removeFromCart = (article) => {
  return (dispatch) => {
    dispatch(removeItem({ article }));
  };
};
