import React, { Component } from 'react';
import { NavBar    } from '../components/navbar';

export default class Profile extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="profilePage">
                <div className="header"><NavBar/></div>
                <div className="content">
                    {
                        <p>Profile page</p>
                    }
                </div>
            </div>
        )
    }
}