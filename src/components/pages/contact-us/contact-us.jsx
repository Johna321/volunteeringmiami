import React, {Component} from 'react';
import './contact-us.css';
import contactLogo from './contactlogo.png';

class ContactUs extends Component{
    render(){
        return(
            <div className="contact-us">
                <div className="contactLogo">
                    <img src={contactLogo} alt="contact us" style={{width: 1000}}/> 
                </div>
                <div className="paragraph">
                    
                </div>
            </div>
        );
    }
}

export default ContactUs;