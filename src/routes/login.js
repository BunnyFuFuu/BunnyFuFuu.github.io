// Admin page where I can submit new experiences or cards to be added to the website
import React, { Component } from 'react';
import LoginButton from '../components/loginbutton';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { NavBar } from '../components/navbar';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="expPage">
                <div className="header"><NavBar/></div>
                <div className="content">
                    { <LoginButton/> }
                    { <Button component={NavLink} to="/manage"><p>Manage</p></Button> }
                </div>
            </div>
        )
    }
}