import React, { Component } from 'react';
import { NavBar    } from '../components/navbar';

export default class Introduction extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="introPage">
                <NavBar/>
            </div>
        )
    }
}