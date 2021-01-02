import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const navbutton = withStyles({
    root: {
        height: '65px',
        borderRadius: '10px',
        padding: '0 15px 0 15px',
        color:'white',
        fontSize: '20px',
        margin: '5px 8%',
        '&:hover': {
            background: '#006daa',
        },
    },
      
})(Button);

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
                    <Button component={NavLink}exact activeClassName="active" className="tabButton" to="/"><p>Introduction</p></Button>
                    <Button component={NavLink}activeClassName="active" className="tabButton" to="/profile"><p>About Me!</p></Button>
                    <Button component={NavLink}activeClassName="active" className="tabButton" to="/experience"><p>Experience</p></Button>
                    <Button component={NavLink}activeClassName="active" className="tabButton" to="/projects"><p>My Projects</p></Button>
                </div>
            </div>
        );
    }
}