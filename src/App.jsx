import React from "react";
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

const App = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Pankaj} />
        <Route path="/company" component={Company} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/more" component={More} />
        <UserContext>
          <Route path="/all-users" component={UserList} />
          <Route path="/create-users" component={CreateUser} />
        </UserContext>
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
