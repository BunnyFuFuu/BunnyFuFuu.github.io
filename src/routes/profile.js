import React, { Component } from 'react';
import { NavBar } from '../components/navbar';
import Controller from '../controller/controller';
import HobbyCard  from '../components/hobbycard';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        Controller.getHobbies().then(console.log("Hobbies retrieved from Mongo"));
    }
    render() {
        return (
            <div className="profilePage">
                <div className="header"><NavBar/></div>
                <div className="content">
                    <h1>About Me</h1>
                    <p>Here's a little more about my interests and hobbies!</p>
                    { Controller.hobbies.map(i => <HobbyCard doc={i}></HobbyCard>) }
                </div>
            </div>
        )
    }
}