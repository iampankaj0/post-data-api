import React, { useState } from "react";
import { useEffect } from "react";
import "./about.css";

// GET DATA FROM LOCAL_STORAGE
const getLocalData = () => {
  let data = localStorage.getItem("users");
  console.log(data);

  if (data) {
    return JSON.parse(localStorage.getItem("users"));
  } else {
    return [];
  }
};

const About = () => {
  const [data, setData] = useState(getLocalData());

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [clas, setClas] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updateClas = (e) => {
    setClas(e.target.value);
  };

  const aboutSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !clas) {
      alert("Please Fill Out All Fields");
    } else {
      setData((prevData) => [
        ...prevData,
        { name: name, email: email, clas: clas },
      ]);
      alert("Your Data is Added");
    }

    setName("");
    setEmail("");
    setClas("");
  };

  // DELETE USER FUNCTION START
  const deleteUser = (id) => {
    var newData = data;
    newData.splice(id, 1);
    setData([...newData]);
    alert(`ID Number ${id + 1} is deleted`);
  };
  // DELETE USER FUNCTION ENDS

  // SET/ADD DATA IN LOCALSTORAGE:
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(data));
  }, [data]);

  return (
    <div className="about">
      <div className="form-heading">
        <h1>Fill The Form To Know More</h1>
      </div>
      <div className="form-div">
        <form onSubmit={aboutSubmit}>
          <input
            value={name}
            onChange={updateName}
            name="name"
            type="text"
            placeholder="Name"
          />
          <input
            value={email}
            onChange={updateEmail}
            name="email"
            type="email"
            placeholder="Email"
          />
          <input
            value={clas}
            onChange={updateClas}
            name="class"
            type="text"
            placeholder="Class"
          />
          <button>Submit</button>
        </form>
      </div>

      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Class</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, id) => {
              return (
                <tr key={id}>
                  <td> {id + 1}. </td>
                  <td> {user.name} </td>
                  <td> {user.email} </td>
                  <td> {user.clas} </td>
                  <td>
                    <button onClick={() => deleteUser(id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
