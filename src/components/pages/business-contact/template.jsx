import React, {Component} from 'react';
import './template.css';

class Template extends Component{
    state = {
        Body: '',
        Subject: 'Volunteering Interest',
        Name: '',
        SenderEmail: ''
    }

    
    render(){
        return(
            <div className="stuff">
                <h1>Contact {this.props.name}</h1>
                <form>
                    <label for="inputEmail">Your Email</label>
                    <input type="email" className="form-control" id="inputEmail" onChange={(event)=>{this.setState({SenderEmail: event.target.value});}}  />
                    <label for="inputEmail">Your Name</label>
                    <input type="text" className="form-control" id="inputName" onChange={(event)=>{this.setState({Name: event.target.value});}}  />
                    <label for="inputEmail">Message</label>
                    <textarea type="text" className="form-control" id="inputMessage" onChange={(event)=>{this.setState({Body: event.target.value});}}  />
                </form>
                <button className="btn btn-dark" onClick={()=>{
                    fetch(`http://209.97.154.166/sendgrid?Body=${this.state.Body}&Email=${this.props.email}&Subject=${this.state.Subject}&Name=${this.state.Name}&SenderEmail=${this.state.SenderEmail}&ContactUs=0`)
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
        );
    }
}

export default Template