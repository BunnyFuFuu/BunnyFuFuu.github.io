import React, { Component } from 'react';
import { NavBar } from '../components/navbar';

export default class Experience extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="expPage">
                <div className="header"><NavBar/></div>
                <div className="content">
                    {
                        <p>Experience page</p>
                    }
                </div>
            </div>
        )
    }
}