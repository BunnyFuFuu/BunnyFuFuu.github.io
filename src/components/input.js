import React, { Component } from 'react';
import '../App.css';


export class ASInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || ""
        };
        
    }

    onChange = (event) => {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <textarea id={this.props.id} onChange={this.onChange}>{this.state.value}</textarea>
        );
    }
}