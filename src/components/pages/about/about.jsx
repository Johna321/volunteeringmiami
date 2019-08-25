import React, {Component} from 'react';
import './about.css';

class About extends Component{
    render(){
        return(
            <div className="about">
                <div className="title">
                    <h1>About Us</h1>
                </div>
                <div className="paragraph">
                    Volunteer Miami is a website designed to help students find community service opportunities.
                </div>
            </div>
        );
    }
}

export default About;