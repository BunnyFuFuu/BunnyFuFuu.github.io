import React, { Component } from 'react';
import { NavBar    } from '../components/navbar';
import '../App.css';

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
                        <img class = "PFP" src="data:image/jpeg;base64,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"></img>
                        <p class = "IntroBlurb" >I'm a third-year Computer Science major (with a minor in Management Science) at UCSD. 
                            I'm currently looking for a software development internship. I've got experience in Python, 
                            Javascript, Java, C++, C, HTML, CSS, Node.JS, React, to name a few languages. I've also gained 
                            meaningful experience in dealing with containerization with Docker (learning Kubernetes as well), 
                            as well as RESTful API development (check out my Projects tab to learn more about how this 
                            website was implemented!). I'm looking to extend my understanding of software development continually
                            with any company willing to provide me with avenues for growth.

                        </p>
                </div>
            </div>
            
        )
    }
}