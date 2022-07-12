import React, { createContext, useState, useEffect } from "react";

export const myContext = createContext();
export const toggleContext = createContext();

// FETCH LOCALSTORAGE DATA
const fetchLocalUsers = () => {
  let users = localStorage.getItem("Users");
  if (users) {
    return JSON.parse(localStorage.getItem("Users"));
  } else {
    return [];
  }
};

const UserContext = (props) => {
  const [users, setUsers] = useState(fetchLocalUsers());

  useEffect(() => {
    localStorage.setItem("Users", JSON.stringify(users));
  }, [users]);

  return (
    <div>
      <myContext.Provider value={[users, setUsers]}>
        {props.children}
      </myContext.Provider>
    </div>
  );
};

export default UserContext;
