import React from "react";
import Home from "./core/Home";
import Signup from "./core/Signup";
import Login from "./core/Login";
import Contact from "./core/Contact";
import PAA from "./core/PAA";
import {BrowserRouter, Switch, Route } from "react-router-dom"

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={PAA} />
                <Route path="/homeuser" exact component={Home} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;