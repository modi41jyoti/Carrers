import React from "react";
import { Redirect, Route } from "react-router-dom";

const NotLoggedInRoute = ({ component: Component, ...rest }) => {
    let user = localStorage.getItem("loggedInUser");

    if (user) {
        return <Redirect to="/home" />;
    } else {
        return <Route {...rest} component={Component} />;
    }
};

export default NotLoggedInRoute;
