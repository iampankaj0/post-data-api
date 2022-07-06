import React, { useContext, useState } from "react";
import "./user-list.css";
import { myContext } from "./UserContext";

const CreateUser = (props) => {
  const [users, setUsers] = useContext(myContext);
  const [userName, setUserName] = useState("");
  const [clas, setClas] = useState("");
  const [about, setAbout] = useState("");

  const updateUsername = (e) => {
    setUserName(e.target.value);
  };
  const updateClass = (e) => {
    setClas(e.target.value);
  };
  const updateAbout = (e) => {
    setAbout(e.target.value);
  };

  const submitUsers = (e) => {
    e.preventDefault();
    setUsers((prevUsers) => [
      ...prevUsers,
      { userName: userName, clas: clas, about: about },
    ]);
    setUserName("");
    setClas("");
    setAbout("");
    
    if(users){
      props.history.push("/all-users")
    }
  };

  return (
    <div className="user-form">
      <form onSubmit={submitUsers}>
        <input
          name="userName"
          onChange={(e) => updateUsername(e)}
          value={userName}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="clas"
          onChange={(e) => updateClass(e)}
          value={clas}
          type="text"
          placeholder="Class"
        />
        <textarea
          name="about"
          onChange={(e) => updateAbout(e)}
          value={about}
          rows="7"
          type="text"
          placeholder="About"
        />
        <button>Create User</button>
      </form>
    </div>
  );
};

export default CreateUser;
