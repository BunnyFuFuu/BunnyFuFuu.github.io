// Admin page where I can submit new experiences or cards to be added to the website
import React, { Component } from 'react';
import { NavBar } from '../components/navbar';

export default class Manage extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="expPage">
                <div className="header"><NavBar/></div>
                <div className="content">
                    {
                        <h1>Database Management Dashboard</h1>
                    }
                </div>
            </div>
        )
    }
}