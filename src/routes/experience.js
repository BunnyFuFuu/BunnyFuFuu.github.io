import React, { Component } from 'react';
import InfoCard from '../components/card';
import { NavBar } from '../components/navbar';
import Controller from '../controller/controller';

export default class Experience extends Component {
    constructor(props) {
        super(props);
        this.exp = [];
        this.updateExp();
    }
    
    updateExp() {
        Controller.get("experience").then(i=>{
            this.exp = i;
            this.forceUpdate();
        });
    }

    render() {
        return (
            <div className="expPage">
                <div className="header"><NavBar/></div>
                <div className="content">
                    <h1>Work Experience</h1>
                    <p class="sub">Here's a little bit about any work I have done that I feel would be relevant in the workplace!</p>
                    { this.exp && this.exp.map(i=><InfoCard doc={i}/>) }
                </div>
            </div>
        )
    }
}