import React, { Component } from 'react';
import InfoCard from '../components/card';
import { NavBar } from '../components/navbar';
import Controller from '../controller/controller';

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.projs = [];
        this.state = {loading: true};
        this.updateProjs();
    }

    updateProjs() {
        Controller.get("project").then(i=>{
            this.projs = i;
            this.forceUpdate();
        });
    }

    render() {
        return (
            <div className="projectsPage">
                <div className="header"><NavBar/></div>
                <div className="content">
                    <h1>Side Project Archive</h1>
                    <p class="sub">Here's some information about a few side projects I've done along the way!</p>
                    { this.projs && this.projs.map(i => <InfoCard doc={i}/>) }
                </div>
            </div>
        )
    }
}