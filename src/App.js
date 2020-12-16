import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Introduction from './routes/introduction';
import Profile from './routes/profile';
import Experience from './routes/experience';
import Projects from './routes/projects';

const routes = [
    { path: "/",           Component: Introduction },
    { path: "/profile",    Component: Profile      },
    { path: "/experience", Component: Experience   },
    { path: "/projects",   Component: Projects     }
]

export default () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    {
                        routes.map(route => <Route exact path={route.path} component={route.Component}/>)
                    }
                </header>
            </div>
        </Router>
    );
}
