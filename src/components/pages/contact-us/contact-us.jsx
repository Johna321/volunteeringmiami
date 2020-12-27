import React, {Component} from 'react';
import './contact-us.css';
import contactLogo from './contactlogo.png';
import {
    isMobile,
  } from "react-device-detect";

class ContactUs extends Component{
    state = {
        ourEmail: 'info@volunteeringmiami.org',
        Body: '',
        Subject: 'Contact Us Request',
        SenderEmail: '',
        Name: '',
        entryPoint: '1'
    }
    render(){
        return(
            <div>
            {!isMobile ?
            <div className="contact-us">
                
                <div className="contactLogo">
                    <img src={contactLogo} alt="contact us" style={{width: 800}}/> 
                </div>
                <div className="paragraph">
                    <div className="contactField">
                        <label className="contactLabel" for="inputEmail">Your Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeHolder="example@example.com" onChange={(event)=>{this.setState({SenderEmail: event.target.value});}}/>
                    </div>
                    <div className="contactField">
                        <label className="contactLabel" for="inputName">Your Name</label>
                        <input type="text" className="form-control" id="inputName" placeHolder="John Smith" onChange={(event)=>{this.setState({Name: event.target.value});}}/>
                    </div>
                    <div className="contactField">
                        <label className="contactLabel" for="inputMessage">Message</label>
                        <textarea type="text" className="form-control" id="inputMessage" placeHolder="(Name of business, primary contact, address, website, social media, general inquiries)" onChange={(event)=>{this.setState({Body: event.target.value});}} />
                    </div>

                    <button className="btn btn-dark sendButton"   onClick={()=>{
                        fetch(`https://288jofwgy1.execute-api.us-east-2.amazonaws.com/prod/contact?Body=${this.state.Body}&Email=${this.state.ourEmail}&Subject=${this.state.Subject}&Name=${this.state.Name}&SenderEmail=${this.state.SenderEmail}&ContactUs=${this.state.entryPoint}`)
                            .then(res => res.json())
                            .then((result) => {
                                console.log(result);
                                alert('Message sent successfully');
                                window.history.back();
                            },(error) => {
                                console.log(error);
                                alert('Error: '+error);
                                window.location.reload();
                            })
                    }}>Send</button>
                </div>
            </div>
            :
            <div className="mobileContactUs">
                <img src={contactLogo} className="mobileContactLogo" alt="Contact Us" />
                <div className="mobileContactForm">
                    <div className="mobileContactField">
                        Your Email
                        <input type="email" className="form-control" id="inputEmail" onChange={(event)=>{this.setState({SenderEmail: event.target.value});}}/>
                    </div>
                    <div className="mobileContactField">
                        Your Name
                        <input type="text" className="form-control" id="inputName" onChange={(event)=>{this.setState({Name: event.target.value});}}/>
                    </div>
                    <div className="mobileContactField">
                        Message
                        <textarea type="text" className="form-control" id="inputMessage" onChange={(event)=>{this.setState({Body: event.target.value});}} />
                    </div>
                    
                </div>
                <button className="btn btn-dark"   onClick={()=>{
                        fetch(`https://288jofwgy1.execute-api.us-east-2.amazonaws.com/prod/contact?Body=${this.state.Body}&Email=${this.state.ourEmail}&Subject=${this.state.Subject}&Name=${this.state.Name}&SenderEmail=${this.state.SenderEmail}&ContactUs=${this.state.entryPoint}`)
                            .then(res => res.json())
                            .then((result) => {
                                console.log(result);
                                alert('Message sent successfully');
                                window.history.back();
                            },(error) => {
                                console.log(error);
                                alert('Error: '+error);
                                window.location.reload();
                            })
                    }}>Send</button>
            </div>
            }
            </div>
        );
    }
}

export default ContactUs;