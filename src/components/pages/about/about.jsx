import React, {Component} from 'react';
import './about.css';
import about from './about.png';
import {
    isMobile,
  } from "react-device-detect";
import instagram from './instagram.png';
import linkedin from './linkedin.png';

class About extends Component{
    render(){
        return(
            <div>
            {!isMobile ? 
            <div className="about">
                
                <div className="title">
                    <img src={about}
                         className="aboutLogo"
                         alt="volunteering miami logo"
                         height="30%"
                         width="30%"/>
                </div>
                <div className="aboutParagraph">
                    
                        Volunteering Miami's chief mission is to connect local, Miami-based businesses and organizations with capable student volunteers through one, easy-to-use platform.
                        We understand that for many high schoolers, one of the greatest obstacles to volunteering is knowing where to look. Volunteering Miami wants to simplify that process
                        by offering a single site that matches those who want to help with those seeking help, ensuring everyone has access to the same opportunities and helping our community
                        along the way. We are constantly expanding our selection of organizations to best accomodate the needs and interests of our volunteers, so rest assured, if you haven't
                        found your fit today, you might have more luck tomorrow. We are always striving to improve our community through service. Thank you for choosing Volunteering Miami.
                    
                </div>
                <div className="tos">
                    <a className="tosLinkAbout" href="https://volunteeringmiami.com/termsofservice/Terms_of_Service.pdf">Terms of Service</a>
                </div>
                <div className="socialMedia">
                    <a style={{padding: 5}} target="_blank" href="https://www.instagram.com/volunteeringmiami/"><img src={instagram} height="30"/></a>
                    <a style={{padding: 5}} target="_blank" href="https://www.linkedin.com/company/volunteering-miami?trk=public_profile_topcard-current-company"><img src={linkedin} height="30"/></a>
                </div>
            </div> 
            :
            
            <div className="mobileAbout">
                <img src={about} className="mobileAboutLogo" alt="About Us"/>
                <div className="mobileAboutMain">
                    <div className="mobileAboutParagraph">
                        
                        Volunteering Miami's chief mission is to connect local, Miami-based businesses and organizations with capable student volunteers through one, easy-to-use platform.
                        We understand that for many high schoolers, one of the greatest obstacles to volunteering is knowing where to look. Volunteering Miami wants to simplify that process
                        by offering a single site that matches those who want to help with those seeking help, ensuring everyone has access to the same opportunities and helping our community
                        along the way. We are constantly expanding our selection of organizations to best accomodate the needs and interests of our volunteers, so rest assured, if you haven't
                        found your fit today, you might have more luck tomorrow. We are always striving to improve our community through service. Thank you for choosing Volunteering Miami.
                        
                    </div>  
                    <div className="socialMedia">
                        <a style={{padding: 5}} target="_blank" href="https://www.instagram.com/volunteeringmiami/"><img src={instagram} height="30"/></a>
                        <a style={{padding: 5}} target="_blank" href="https://www.linkedin.com/company/volunteering-miami?trk=public_profile_topcard-current-company"><img src={linkedin} height="30"/></a>
                    </div>
                    <div className="mobileTos">
                        <a className="tosLinkAbout" style={{color: 'black'}} href="https://volunteeringmiami.com/termsofservice/Terms_of_ServiceNew.pdf">Terms of Service</a>
                    </div>
                    
                </div>
            </div>
            }
            </div>
        );
    }
}

export default About;