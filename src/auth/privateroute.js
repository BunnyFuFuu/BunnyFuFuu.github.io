import React from "react";
import { Redirect, Route } from "react-router-dom";
import controller from "../controller/controller";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {

    // TODO: Adapt this from Philanthropy Connect to work with Auth0
    return (
        <Route
            {...rest}
            render={routeProps =>
                controller.token ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to={`/login${(rest.path || !rest.path) === "/" ? "" : `?redirect=${encodeURIComponent(rest.path)}`}`} />
                )
            }
        />
    );
};

export default PrivateRoute;