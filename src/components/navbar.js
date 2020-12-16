import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

export class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: false
        };
        
    }

    componentDidMount() {
        window.addEventListener("scroll", this.checkScroll);
    }

    checkScroll = (event) => {
        this.setState({ scrolled: window.pageYOffset > 30 });
    }

    render() {
        return (
            <div class={this.state.scrolled ? "scrolled" : "fadeInHeader"}>
                <div class="tabs">
                    <NavLink exact activeClassName="active" className="tabButton" to="/"><p>Introduction</p></NavLink>
                    <NavLink activeClassName="active" className="tabButton" to="/profile"><p>About Me!</p></NavLink>
                    <NavLink activeClassName="active" className="tabButton" to="/experience"><p>Experience</p></NavLink>
                    <NavLink activeClassName="active" className="tabButton" to="/projects"><p>My Projects</p></NavLink>
                </div>
            </div>
        );
    }
}