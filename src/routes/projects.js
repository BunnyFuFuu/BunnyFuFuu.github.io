import React, { Component } from 'react';
import { NavBar } from '../components/navbar';
import ProjectCard from '../components/projectcard';
import Controller from '../controller/controller';

export default class Projects extends Component {
    constructor(props) {
        super(props);
        Controller.getProjects().then(console.log("Projects retrieved from database"));
    }
    render() {
        return (
            <div className="projectsPage">
                <div className="header"><NavBar/></div>
                <div className="content">
                    <h1>Side Project Archive</h1>
                    <p>Here's some information about a few side projects I've done along the way!</p>
                    { Controller.projects.map(i => <ProjectCard doc={i}/>) }
                    
                </div>
            </div>
        )
    }
}