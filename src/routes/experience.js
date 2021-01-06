import React, { Component } from 'react';
import InfoCard from '../components/card';
import { NavBar } from '../components/navbar';
import Controller from '../controller/controller';

export default class Experience extends Component {
    constructor(props) {
        super(props);
        Controller.getExp().then(this.forceUpdate());
    }
    render() {
        return (
            <div className="expPage">
                <div className="header"><NavBar/></div>
                <div className="content">
                    <h1>Work Experience</h1>
                    <p>Here's a little bit about any work I have done that I feel would be relevant in the workplace!</p>
                    { Controller.exp.map(i=><InfoCard doc={i}/>) }
                </div>
            </div>
        )
    }
}