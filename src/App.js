import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './auth/privateroute';
import './App.css';
import Introduction from './routes/introduction';
import Profile from './routes/profile';
import Experience from './routes/experience';
import Projects from './routes/projects';
import Manage from './routes/manage';
import Login from './routes/login';

const routes = [
    { path: "/",           Component: Introduction, private: false },
    { path: "/profile",    Component: Profile     , private: false },
    { path: "/experience", Component: Experience  , private: false },
    { path: "/projects",   Component: Projects    , private: false },
    { path: "/login",      Component: Login       , private: false },
    { path: "/manage",     Component: Manage      , private: true  }
]

export default () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    {
                        routes.map(route => (route.private ?
                            <PrivateRoute path={route.path} component={route.Component} /> :
                            <Route exact path={route.path} component={route.Component} />))
                    }
                </header>
            </div>
        </Router>
    );
}
