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
                    
                    <p> Volunteering Miami's chief mission is to connect local, Miami-based businesses and organizations with capable student volunteers through one, easy-to-use platform.
                        We understand that for many high schoolers, one of the greatest obstacles to volunteering is knowing where to look. Volunteering Miami wants to simplify that process
                        by offering a single site that matches those who want to help with those seeking help, ensuring everyone has access to the same opportunities and helping our community
                        along the way. We are constantly expanding our selection of organizations to best accomodate the needs and interests of our volunteers, so rest assured, if you haven't
                        found your fit today, you might have more luck tomorrow. We are always striving to improve our community through service. Thank you for choosing Volunteering Miami.
                        </p>
                        
                    <div className="tos">
                        <a className="tosLinkAbout" href="https://volunteeringmiami.com/termsofservice/Terms_of_Service.pdf">Terms of Service</a>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default About;