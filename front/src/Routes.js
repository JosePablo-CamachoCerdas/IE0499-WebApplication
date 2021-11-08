import React from "react";
import Home from "./core/Home";
import Signup from "./core/Signup";
import Login from "./core/Login";
import Contact from "./core/Contact";
import AddQuestion from "./core/AddQuestion";
import DeleteQuestion from "./core/DeleteQuestion";
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
                <Route path="/addquestion" exact component={AddQuestion} />
                <Route path="/deletequestion/:questionId" exact component={DeleteQuestion} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;