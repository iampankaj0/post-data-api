import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import styled from "styled-components";
import { myUserContext } from "../context/UserContext";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;
const InpDiv = styled.div``;
const Input = styled.input`
  display: block;
  margin: 0 0 15px 0;
`;
const Button = styled.button`
  background: transparent;
  border: 1px solid #000;
  text-transform: uppercase;
  display: block;
  margin: 0 auto;
`;


//ravi123@gmail.com
const Login = ({addUserLocal, userD}) => {
  const URL = "http://35.91.35.188/api/login";

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [user, setUser] = useContext(myUserContext);

  const handleInput = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    // console.log(newData);
  };

  const handleLogin = async () => {
    const { email, password } = data;
    const response = await axios.post(URL, { email, password });
    try {
      if (response.data.success === false) {
        console.log("response failed");
        alert("failed");
      } else if (response.data.success === true) {
        console.log("response success");
        alert("success");

        const userData = response.data.loginData;

        // console.log("userData "+ JSON.stringify(userData));
        setUser(userData);
        addUserLocal(userData)
        // const newUser = {
        //   firstName: userData.first_name,
        //   lastName: userData.last_name,
        //   emailAdd: userData.email,
        // };
        // console.log("newUser " + JSON.stringify(newUser));
        // setUser(newUser);
        // // console.log("user " + user);
        // return newUser;
      }
    } catch (error) {
      console.log(error);
      alert("pending");
    }
  };

  // setUser(newUser);
  // console.log("my user " + JSON.stringify(user));

  // Save user in LOCALSTORAGE
  const logOut = () => {
    localStorage.removeItem("user");
    window.location.reload(false);
  };

  return (
    <>
      <Section>
        <InpDiv>
          <h5 className="my-3 text-center text-uppercase">Login Here</h5>
          <Input onChange={handleInput} name="email" type="text" />
          <Input
            onChange={handleInput}
            name="password"
            type="password"
            autoComplete="off"
          />
          <Button onClick={handleLogin}>log in</Button>
          <Button onClick={logOut}>log out</Button>
        </InpDiv>
      </Section>
      <h5 className="my-3 text-center text-uppercase">
        First Name: {user.first_name}
      </h5>
      <h5 className="my-3 text-center text-uppercase">
        Last Name: {user.last_name}
      </h5>
      <h5 className="my-3 text-center text-uppercase">
        Email Address: {user.email}
      </h5>
    </>
  );
};

export default Login;
