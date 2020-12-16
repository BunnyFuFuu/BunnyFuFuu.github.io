import React, { Component } from 'react';
import { NavBar } from '../components/navbar';
import Controller from '../controller/controller';

export default class Projects extends Component {
    constructor(props) {
        super(props);
        Controller.getReposList().then(() => this.forceUpdate());
    }
    render() {
        return (
            <div className="projectsPage">
                <div className="header"><NavBar/></div>
                <div className="content">
                    {
                        /*<p>Projects page!</p>*/
                        Controller.repos.map(r => <p>{r}</p>)
                    }
                </div>
            </div>
        )
    }
}