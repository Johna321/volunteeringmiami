import React, {Component} from 'react';
import './about.css';
import about from './about.png';

class About extends Component{
    render(){
        return(
            <div className="about">
                <div className="title">
                    <img src={about}
                         className="aboutLogo"
                         alt="volunteering miami logo"
                         height="30%"
                         width="30%"/>
                </div>
                <div className="aboutParagraph">
                    
                    <p> For <b>Volunteering Miami</b>, our chief mission is to connect local, Miami-based businesses and organizations with capable students and volunteers. As high-schoolers, we understand that the greatest challenge for meeting our volunteering requirements is actually starting. Often, as students, our opportunities are limited, and beginning is intimidating. Volunteering Miami wants to ease the load of starting, and in the process, help out our local market and community. We constantly strive to expand our selection of local organizations to better accommodate the needs and interest of our volunteers. We are regularly growing, so rest assured, if you haven’t found your fit today, you might be more lucky tomorrow. 
                        Concerning organizations and businesses interested in creating a listing to recruit volunteers, please visit our "Recruit Volunteers" tab. We are always interested in aiding your growth and improving our community through service.
                        Thank you for choosing us, and we are confident in your shared success.

                        <br/><br/>—Volunteering Miami.</p>
                </div>
            </div>
        );
    }
}

export default About;