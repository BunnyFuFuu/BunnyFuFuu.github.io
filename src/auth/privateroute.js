import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "./auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    //const { currentUser } = useContext(AuthContext);
    // TODO: Adapt this from Philanthropy Connect to work with Auth0
    return (
        <Route
            {...rest}
            render={routeProps =>
                /*!!currentUser*/false ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to={`/login${(rest.path || !rest.path) == "/" ? "" : `?redirect=${encodeURIComponent(rest.path)}`}`} />
                )
            }
        />
    );
};

export default PrivateRoute;