import React, {Component} from 'react';
import './about.css';
import about from './about.png';

class About extends Component{
    render(){
        return(
            <div className="about">
                <div className="title">
                    <img src={about}
                         className="logo"
                         alt="volunteering miami logo"
                         height="30%"
                         width="30%"/>
                </div>
                <div className="paragraph">
                    <h4>Volunteer Miami is a website designed to help students find community service opportunities.</h4>
                </div>
            </div>
        );
    }
}

export default About;