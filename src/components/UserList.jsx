import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./user-list.css";
import { myContext } from "./UserContext";
// import { toggleContext } from "./UserContext";

const UserList = () => {
  const [users, setUsers] = useContext(myContext);

  // DELETE USER
  const deleteUser = (id) => {
    var newUsers = users;
    newUsers.splice(id, 1);
    setUsers([...newUsers]);
    alert(`ID Number ${id + 1} is deleted`);
  };

  // EDIT USER

  return (
    <div className="user_list">
      <div className="head-content">
        <div className="head-content_child">
          <h1 className="heading"> User Details </h1>
          <p>
            <Link className="usercreate_btn" to="/create-users">
              Create user
            </Link>
          </p>
        </div>
      </div>
      <div className="total-users-count">
        <h2>
          Total Users: <span>{users.length}</span>
        </h2>
      </div>
      <div className="user-data">
        {users.map((data, id) => {
          return (
            <div className="one-user" key={id}>
              <div className="card-headers">
                <button onClick={() => deleteUser(id)}>Delete User</button>
                <h2>user Number: {id + 1}</h2>
              </div>
              <h1> {data.userName} </h1>
              <h2> {data.clas} </h2>
              <p> {data.about} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
