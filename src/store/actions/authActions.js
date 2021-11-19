import * as actionTypes from "./types";
import decode from "jwt-decode";
import instance from "./instance";

export const signup = (newUser, history) => {
  return async () => {
    try {
      const res = await instance.post("/signup", newUser);

      history.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
};
export const signin = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);

      dispatch(setUser(res.data.token));
      history.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
};
export const signout = () => {
  return setUser();
};

export const checkForToken = () => {
  const token = localStorage.getItem("myToken");
  if (token) {
    const currentTime = Date.now();
    const user = decode(token);
    if (user.exp > currentTime) {
      return setUser(token);
    }
  }
  localStorage.removeItem("myToken");
  return {
    type: actionTypes.SET_USER,
    payload: null,
  };
};

const setUser = (token) => {
  if (token) {
    localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    return {
      type: actionTypes.SET_USER,
      payload: decode(token),
    };
  } else {
    localStorage.removeItem("myToken");
    delete instance.defaults.headers.common.Authorization;
    return {
      type: actionTypes.SET_USER,
      payload: null,
    };
  }
};
