import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { Context } from "../context/Context";
import { Home } from "../Pages/Home/Home";
import { Login } from "../Pages/Login/Login";
import { Register } from "../Pages/Register/Register";
import { Settings } from "../Pages/Settings/Settings";
import { SinglePost } from "../Pages/SinglePost/SinglePost";
import { Write } from "../Pages/Write/Write";

export const Routes = () => {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/write">
          {!user ? <Home /> : <Write />}
        </Route>
        <Route exact path="/settings">
          {!user ? <Home /> : <Settings />}
        </Route>
        <Route exact path="/post/:id">
          <SinglePost />
        </Route>
        <Route exact path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route exact path="/login">
          {user ? <Home /> : <Login />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
