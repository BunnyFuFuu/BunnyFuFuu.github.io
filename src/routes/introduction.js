import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { NavBar    } from '../components/navbar';
import '../App.css';
import { PFP } from '../assets';

export default class Introduction extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="introPage">
                <div className="header"><NavBar/></div>
                <div className="content">
                        <h1 class = "IntroBanner">Hi, I'm Andrew Liang!</h1>
                        <img class = "PFP" src={ PFP }></img>
                        <p class = "IntroBlurb" >I'm a third-year Computer Science major (with a minor in Management Science) at UCSD. 
                            I'm currently looking for a software development internship. I've got experience in Python, 
                            Javascript, Java, C++, C, HTML, CSS, Node.JS, React, to name a few languages. I've also gained 
                            meaningful experience in dealing with containerization with Docker (learning Kubernetes as well), 
                            as well as RESTful API development (check out my Projects tab to learn more about how this 
                            website was implemented!). I'm looking to extend my understanding of software development continually
                            with any company willing to provide me with avenues for growth.
                        </p>
                        <Button variant='contained' id="ResButton">My Resume</Button>
                </div>
            </div>
            
        )
    }
}