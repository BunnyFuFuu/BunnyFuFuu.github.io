import React, { Component } from 'react';
import { NavBar    } from '../components/navbar';

export default class Projects extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="projectsPage">
                <div className="header"><NavBar/></div>
                <div className="content">
                    {
                        <p>Projects page!</p>
                    }
                </div>
            </div>
        )
    }
}