import * as actiontypes from "./types";
import instance from "./instance";

export const createItem = (newItem, history) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newItem) {
        formData.append(key, newItem[key]);
      }
      const res = await instance.post(`/items`, formData);
      dispatch({
        type: actiontypes.CREATE_ITEM,
        payload: {
          newItem: res.data,
        },
      });
      history.push("/items");
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get(`/items`);
      dispatch({
        type: actiontypes.FETCH_ITEMS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
