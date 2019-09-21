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
                    <br/> 
                    <h3>Our Mission</h3>
                    <p>For Volunteering Miami, our chief mission is to connect local, Miami-based businesses and organizations with willing students and volunteers. As high-schoolers, we understand that the greatest challenge for meeting our volunteering requirements is actually starting. Often, as students, our opportunities are limited, and starting is intimidating. So, Volunteering Miami wants to ease the load of starting, and in the process, help out our local market and community. We constantly strive to expand our selection of local organizations to better accommodate the needs and interest of our volunteers. We are constantly growing, so rest assured, if you haven’t found your fit today, you might be more lucky tomorrow. 
                        As it pertains to organizations and businesses interested in creating a listing to attract volunteers, please visit our contact tab and shoot us an email. We are always interested in aiding in your growth and the growth of our community through service.
                        Thank you for choosing us, and we are confident in your successes—enterprises and enterprisers.

                        —Volunteering Miami.</p>
                </div>
            </div>
        );
    }
}

export default About;