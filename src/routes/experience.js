import React, { Component } from 'react';
import ExpCard from '../components/expcard';
import { NavBar } from '../components/navbar';
import Controller from '../controller/controller';


export default class Experience extends Component {
    constructor(props) {
        super(props);
        Controller.getExp().then(console.log("Experience retrieved from Mongo"));
    }
    render() {
        return (
            <div className="expPage">
                <div className="header"><NavBar/></div>
                <div className="content">
                    <h1>Work Experience</h1>
                    <p>Here's a little bit about any work I may have done that I feel would be relevant in the workplace!</p>
                    { Controller.exp.map(i=><ExpCard doc={i}/>) }
                </div>
            </div>
        )
    }
}