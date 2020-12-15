import React, { Component } from 'react';
import { NavLink   } from 'react-router-dom';
import '../App.css';

export class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="fadeInHeader">
                <div class="tabs">
                    <NavLink exact activeClassName="active" className="tabButton" to="/"><p>Introduction</p></NavLink>
                    <NavLink activeClassName="active" className="tabButton" to="/profile"><p>About Me!</p></NavLink>
                    <NavLink activeClassName="active" className="tabButton" to="/projects"><p>My Projects</p></NavLink>
                </div>
            </div>
        );
    }
}