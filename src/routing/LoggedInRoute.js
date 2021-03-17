import React from "react";
import { Redirect, Route } from "react-router-dom";

const LoggedInRoute = ({ component: Component, ...rest }) => {
    let user = localStorage.getItem("loggedInUser");
    if (!user) {
        return <Redirect to="/" />;
    } else {
        return <Route {...rest} component={Component} />;
    }
};

export default LoggedInRoute;
