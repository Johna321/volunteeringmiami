import React, {Component} from 'react';
import './contact-us.css';
import contactLogo from './contactlogo.png';

class ContactUs extends Component{
    state = {
        ourEmail: 'johna321123@gmail.com',
        Body: '',
        Subject: 'Contact Us Request',
        SenderEmail: '',
        Name: '',
        entryPoint: '1'
    }
    render(){
        return(
            <div className="contact-us">
                <div className="contactLogo">
                    <img src={contactLogo} alt="contact us" style={{width: 1000}}/> 
                </div>
                <div className="paragraph">
                    <label for="inputEmail">Your Email</label>
                    <input type="email" className="form-control" id="inputEmail" onChange={(event)=>{this.setState({SenderEmail: event.target.value});}}/>
                    <label for="inputName">Your Name</label>
                    <input type="text" className="form-control" id="inputName" onChange={(event)=>{this.setState({Name: event.target.value});}}/>
                    <label for="inputMessage">Message</label>
                    <textarea type="text" className="form-control" id="inputMessage" onChange={(event)=>{this.setState({Body: event.target.value});}} />
                    
                    <button className="btn btn-dark" onClick={()=>{
                        fetch(`http://209.97.154.166/sendgrid?Body=${this.state.Body}&Email=${this.state.ourEmail}&Subject=${this.state.Subject}&Name=${this.state.Name}&SenderEmail=${this.state.SenderEmail}&ContactUs=${this.state.entryPoint}`)
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
                    }}>Submit</button>
                </div>
            </div>
        );
    }
}

export default ContactUs;