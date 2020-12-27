import React, { Component } from 'react';
import { NavBar    } from '../components/navbar';

export default class Introduction extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="introPage">
                <div className="header"><NavBar/></div>
                <div className="content">
                        <img></img>
                        <p>Welcome to my website!</p>
                </div>
            </div>
            
        )
    }
}