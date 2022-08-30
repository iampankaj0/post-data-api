import React, { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";

export const myUserContext = createContext();

// GET USER FROM LOCAL_STORAGE
const getUserLocal = () => {
  let user = localStorage.getItem("user");
  // console.log("LOCALUSER " + user);
  if (user) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return [];
  }
};

const TheUserContext = (props) => {
  const [user, setUser] = useState(getUserLocal());

  //SET USER IN LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <myUserContext.Provider value={[user, setUser]}>
      {props.children}
    </myUserContext.Provider>
  );
};

export default TheUserContext;
