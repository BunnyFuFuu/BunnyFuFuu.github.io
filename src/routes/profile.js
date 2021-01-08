import React, { Component } from 'react';
import { NavBar } from '../components/navbar';
import Controller from '../controller/controller';
import InfoCard from '../components/card';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.updateHobbies();
    }

    updateHobbies() {
        Controller.get("hobby").then(i=>{
            this.hobbies = i;
            this.forceUpdate();
        });
    }

    render() {
        return (
            <div className="profilePage">
                <div className="header"><NavBar/></div>
                <div className="content">
                    <h1>About Me</h1>
                    <p class="sub">Here's a little more about my interests and hobbies!</p>
                    { this.hobbies && this.hobbies.map(i => <InfoCard doc={i}/>) }
                </div>
            </div>
        )
    }
}