import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Pankaj from "./ApiCallProducts";
import Company from "./components/Company";
import About from "./components/About";
import Contact from "./components/Contact";
import More from "./components/More";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import UserContext from "./components/UserContext";
import Dummy from "./components/Dummy";
import PasswordShow from "./components/PasswordShow";
import Login from "./components/Login/Login";
import TheUserContext, {
  myUserContext,
} from "./components/context/UserContext";

const App = () => {
  const [user, setLoginUser] = useState({});

  // GET USER FROM LOCAL STORAGE
  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("myUser")));
  }, []);

  // ADD USER IN LOCAL STORAGE
  const addUserLocal = (user) => {
    localStorage.setItem("myUser", JSON.stringify(user));
    setLoginUser(user);
  };

  console.log("APP USER DATA " + JSON.stringify(user));

  return (
    <>
      <Menu />
      <UserContext>
        <Switch>
          <Route exact path="/">
            {user && user.id ? (
              <Pankaj />
            ) : (
              <Login userD={user} addUserLocal={addUserLocal} />
            )}
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/more">
            <More />
          </Route>

          <TheUserContext>
            <Route to="/login">
              <Login addUserLocal={addUserLocal} />
            </Route>
          </TheUserContext>

          {/* <Route to="/dummy" component={Dummy} />
          <Route to="/passwordShow" component={PasswordShow} />
          <Route path="/all-users" component={UserList} />
          <Route path="/create-users" component={CreateUser} /> */}
          <Redirect to="/" />
        </Switch>
      </UserContext>
    </>
  );
};

export default App;
