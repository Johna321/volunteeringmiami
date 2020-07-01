import React, {Component} from 'react';
import './template.css';

class Template extends Component{
    state = {
        Body: '',
        Subject: 'Volunteering Interest',
        Name: '',
        SenderEmail: '',
        Age: '',
        School: '',
        GPA: '',
        Cert: '',
        Skills: '',
        Languages: '',
        entryPoint: '0'
    }

    
    render(){
        return(
            <div className="stuff">
                <h1 className="businessTitle">Contact {this.props.name}</h1>
                
                <form>
                    <label for="inputEmail">Your Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="example@example.com" onChange={(event)=>{this.setState({SenderEmail: event.target.value});}}  />
                    <label for="inputAge">Your Name</label>
                    <input type="text" className="form-control" id="inputName" placeHolder="First Name, Last Name" onChange={(event)=>{this.setState({Name: event.target.value});}}  />
                    <label for="inputAge">Age</label>
                    <input type="text" className="form-control" id="inputAge" placeHolder="Age" onChange={(event)=>{this.setState({Age: event.target.value});}}  />
                    <label for="inputSchool">School, Grade</label>
                    <input type="text" className="form-control" id="inputSchool" placeHolder="If applicable, school and grade level" onChange={(event)=>{this.setState({School: event.target.value});}}  />
                    <label for="inputGPA">GPA</label>
                    <input type="text" className="form-control" id="inputGPA" placeHolder="Grade point average (unweighted, weighted)" onChange={(event)=>{this.setState({GPA: event.target.value});}}  />
                    <label for="inputCert">Certification</label>
                    <input type="text" className="form-control" id="inputCert" placeHolder="ex. volunteer number, CPR training, etc." onChange={(event)=>{this.setState({Cert: event.target.value});}}  />
                    <label for="inputTalent">Skills</label>
                    <input type="text" className="form-control" id="inputTalent" placeHolder="ex. chess, programming, etc." onChange={(event)=>{this.setState({Skills: event.target.value});}}  />
                    <label for="inputLang">Languages</label>
                    <input type="text" className="form-control" id="inputLang" placeHolder="Any proficiency in foreign language" onChange={(event)=>{this.setState({Languages: event.target.value});}}  />
                    <label for="inputMessage">Message</label>
                    <textarea type="text" className="form-control" id="inputMessage" placeHolder="Any additional notes"onChange={(event)=>{this.setState({Body: event.target.value});}}  />
                </form>
                <button className="btn btn-dark" onClick={()=>{
                    fetch(`https://288jofwgy1.execute-api.us-east-2.amazonaws.com/prod/contact?Body=${this.state.Body}&Email=${this.props.email}&Subject=${this.state.Subject}&CompanyName=${this.props.name}&Name=${this.state.Name}&SenderEmail=${this.state.SenderEmail}&Age=${this.state.Age}&School=${this.state.School}&GPA=${this.state.GPA}&Cert=${this.state.Cert}&Talents=${this.state.Skills}&Languages=${this.state.Languages}&ContactUs=${this.state.entryPoint}`)
                    .then(res => res.json())
                    .then((result) => {
                        console.log(result);
                        alert('Message sent successfully');
                        window.location.href='/';
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