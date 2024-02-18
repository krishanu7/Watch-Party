import React, { createContext, useReducer, useState } from "react";
import { userReducer } from "../reducers/userReducer";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const initialState = {
    userList: [],
    message: [],
    videoId: "",
    username: "",
    socket: null,
  };
  const [userData, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ userData, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};
