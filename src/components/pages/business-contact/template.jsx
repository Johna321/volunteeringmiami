import React, {Component} from 'react';
import './template.css';
import {
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from "reactstrap";
import arrow from "../../../arrow.png";
import { Storage } from "aws-amplify";
import {isMobile} from "react-device-detect";
import { ViewPager, Frame, Track, View } from 'react-view-pager'
import { FileDrop } from 'react-file-drop';


let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Template extends Component{
    state = {
        Body: 'N/A',
        Subject: 'Volunteering Request: ',
        Name: '',
        SenderEmail: '',
        Age: 'N/A',
        School: 'N/A',
        Grade: 'N/A',
        GPA: 'N/A',
        Cert: 'N/A',
        Skills: 'N/A',
        Languages: 'N/A',
        UploadedFile: '',
        FileData: {},
        entryPoint: '0',
        tosChecked: false,
        dropdownToggled: false,
        schoolText: false,
        draggingOver: false
    }
    
    toggleDropdown = () => {
        if (this.state.dropdownToggled === false) {
          this.setState({ dropdownToggled: true });
        } else {
          this.setState({ dropdownToggled: false });
        }
    };
    

    fileHandler = async (event) =>{
        const file = event.target.files[0];
        const name = `${new Date().toISOString()}-${file.name}`;
        this.setState({
            UploadedFile: name,
            FileData: file
        })

        
        /* code for aws backend attachment link:
            Here is an additional attachment from the applicant: <br />
            <a href="http://volunteeringmiami-files.s3-website.us-east-2.amazonaws.com/public/${event.queryStringParameters.UploadedFile}">${event.queryStringParameters.UploadedFile}</a>
            <br /><br />
        */
    }

    fileHandlerDrop = async (event) =>{
        const file = event[0];
        const name = `${new Date().toISOString()}-${file.name}`;
        this.setState({
            UploadedFile: name,
            FileData: file
        })

        /* code for aws backend attachment link:
            Here is an additional attachment from the applicant: <br />
            <a href="http://volunteeringmiami-files.s3-website.us-east-2.amazonaws.com/public/${event.queryStringParameters.UploadedFile}">${event.queryStringParameters.UploadedFile}</a>
            <br /><br />
        */
    }

    downloadFile = (school) => {
        //window.open(`https://volunteeringmiami.com/communityservicepapers/${school}.pdf`, "_blank")
        window.open(`https://volunteeringmiami.com/images/palmbiz.png`, "_blank")
    }
    
    render(){
        return(
            <div>
                {!isMobile ? 
                <div className="stuff">
                    
                    <h1 className="businessTitle">Contact {this.props.name}</h1>
                    
                    <form className="applicationForm">
                        
                        <label for="inputEmail">Your Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="example@example.com" onChange={(event)=>{this.setState({SenderEmail: event.target.value});}}  />
                        
                        <label for="inputAge">Your Name</label>
                        <input type="text" className="form-control" id="inputName" placeHolder="Last Name, First Name" onChange={(event)=>{this.setState({Name: event.target.value});}}  />
                        <label for="inputAge">Age</label>
                        <input type="text" className="form-control" id="inputAge" placeHolder="Age" onChange={(event)=>{this.setState({Age: event.target.value});}}  />
                        
                        <label for="inputSchool">Grade</label>
                        <input type="text" className="form-control" id="inputSchool" placeHolder="If applicable, grade level" onChange={(event)=>{this.setState({Grade: event.target.value});}}  />
                        <label for="inputGPA">GPA</label>
                        <input type="text" className="form-control" id="inputGPA" placeHolder="Grade point average (unweighted, weighted)" onChange={(event)=>{this.setState({GPA: event.target.value});}}  />
                        <label for="inputCert">Certification</label>
                        <input type="text" className="form-control" id="inputCert" placeHolder="ex. volunteer number, CPR training, etc." onChange={(event)=>{this.setState({Cert: event.target.value});}}  />
                        <label for="inputTalent">Skills</label>
                        <input type="text" className="form-control" id="inputTalent" placeHolder="ex. chess, programming, etc." onChange={(event)=>{this.setState({Skills: event.target.value});}}  />
                        <label for="inputLang">Languages</label>
                        <input type="text" className="form-control" id="inputLang" placeHolder="Any proficiency in foreign language" onChange={(event)=>{this.setState({Languages: event.target.value});}}  />
                        <label for="inputSchool">School</label>
                        {!this.state.schoolText ? <ButtonDropdown className="schoolDropdown" id="inputSchool" isOpen={this.state.dropdownToggled} toggle={this.toggleDropdown}>
                            <DropdownToggle style={{color: 'grey'}} className="schoolDropdownToggle text-left" caret color="light">{this.state.School != 'N/A' ? this.state.School : 'School'}</DropdownToggle>
                            <DropdownMenu  className="schoolDropdownItem" right>
                                <a href="https://volunteeringmiami.com/communityservicepapers/palmetto.docx" download="palmetto.docx"><DropdownItem onClick={() => {
                                    //this.downloadFile("palmetto");
                                    this.setState({
                                        School: "Miami Palmetto Senior High School"
                                    })
                                    
                                }} >
                                    Miami Palmetto Senior High School
                                </DropdownItem></a>
                                <a href="https://volunteeringmiami.com/communityservicepapers/coral_reef.docx" download="coralreef.docx"><DropdownItem onClick={() => {
                                    //this.downloadFile("coral reef");
                                    this.setState({
                                        School: "Coral Reef Senior High School"
                                    })
                                    
                                }}>
                                    Coral Reef Senior High School
                                </DropdownItem></a>
                                <a href="https://volunteeringmiami.com/communityservicepapers/beach_high.docx" download="beach_high.docx"><DropdownItem onClick={() => {
                                    //this.downloadFile("coral reef");
                                    this.setState({
                                        School: "Miami Beach Senior High School"
                                    })
                                    
                                }}>
                                    Miami Beach Senior High School
                                </DropdownItem></a>
                                <a href="https://volunteeringmiami.com/communityservicepapers/new_world.docx" download="new_world.docx"><DropdownItem onClick={() => {
                                    
                                    this.setState({
                                        School: "New World School of the Arts"
                                    })
                                    
                                }}>
                                    New World School of the Arts
                                </DropdownItem></a>
                                <DropdownItem onClick={() => {
                                    this.setState({
                                        schoolText: true
                                    })
                                }}>
                                    Other
                                </DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown> : 
                        <div><input type="text" className="form-control" id="inputSchool" placeHolder="Type in your school" onChange={(event)=>{this.setState({School: event.target.value});}}/> </div>
                        }
                        <label for="inputMessage">Message</label>
                        <textarea type="text" className="form-control" id="inputMessage" placeHolder="Any additional notes"onChange={(event)=>{this.setState({Body: event.target.value});}}  />
                        <label for="submitFilesComp">Attachment</label>
                        <FileDrop id="submitFilesComp" onFrameDragEnter={()=>{this.setState({draggingOver: true})}} onFrameDrop={()=>{this.setState({draggingOver: false})}} onFrameDragLeave={()=>{this.setState({draggingOver: false})}} target="submitFiles" onDrop={this.fileHandlerDrop}>
                            <input type="file" id="submitFiles" onChange={this.fileHandler} hidden/>
                            <label for="submitFiles" style={this.state.draggingOver ? {backgroundColor: '#4285F4', color: 'white'} : {backgroundColor: 'white'}} className="submitFiles">{this.state.UploadedFile ? <span>{this.state.UploadedFile}</span> : <span>Select File or Drag and Drop</span>}</label>
                        </FileDrop>
                        
                    </form>
                    

                    

                    
                    {/*<div style={{marginBottom: 15}}>{this.state.UploadedFile}</div>*/}
                    
                    
                    <div style={{marginBottom: 25}} className="tosCheckbox">
                        <div style={{marginRight: 5}}>
                            <input style={{marginRight: 10}} type="checkbox" id="tos" onChange={() => this.setState({tosChecked: !this.state.tosChecked})}/>
                            I agree to the Volunteering Miami <a style={{color: "white"}} href="https://volunteeringmiami.com/termsofservice/Terms_of_Service.pdf"><b>Terms of Service</b></a>
                        </div>
                    </div>
                    
                    {(this.state.tosChecked && this.state.SenderEmail && this.state.Name) ? 
                    <button className="btn btn-dark" onClick={async()=>{
                        try {
                            let res = await Storage.put(this.state.UploadedFile, this.state.FileData);
                            console.log(res);
                        } catch (err){
                            console.log(err)
                        }
                        fetch(`https://8fhyajns7c.execute-api.us-east-2.amazonaws.com/prod/contact?Body=${this.state.Body}&UploadedFile=${this.state.UploadedFile}&Email=${this.props.email}&Subject=${this.state.Subject + this.state.Name}&CompanyName=${this.props.name}&CompanyId=${this.props.businessId}&Name=${this.state.Name}&SenderEmail=${this.state.SenderEmail}&Age=${this.state.Age}&Grade=${this.state.Grade}&School=${this.state.School}&GPA=${this.state.GPA}&Cert=${this.state.Cert}&Skills=${this.state.Skills}&Languages=${this.state.Languages}&ContactUs=${this.state.entryPoint}`)
                        .then(res => res.json())
                        .then((result) => {
                            console.log(result);
                            alert(result === 'error' ? 'Message not sent' : 'Message sent successfully');
                            window.location.href='/';
                        },(error) => {
                            console.log(error);
                            alert('Error: '+error);
                            window.location.reload();
                        })
                    }}>Submit</button>
                    :
                    <button className="btn btn-dark">Submit</button>
                    }
                </div>
                :
                <div>
                    <ViewPager>
                        <Frame>
                            <Track 
                                ref={c => this.track = c}
                                viewsToShow={1}
                                swipeThreshold={10}
                            >
                                <View>
                                    <div className="parentMobileFlex">
                                        <div className="mobileCompanyInfo">
                                            {this.props.business.map((obj) => {
                                                return(
                                                <div>
                                                    <div className="category">
                                                        <h5>Location: </h5>
                                                        <div style={{marginLeft: 10, color: '#5E5E5E'}}>{!obj.location ? 'N/A' : obj.location}</div>
                                                    </div>
                                                    <div className="category">
                                                        <h5>Organization Description: </h5>
                                                        <div style={{marginLeft: 10, color: '#5E5E5E'}}>{!obj.companyDescription ? "N/A" : obj.companyDescription}</div>
                                                    </div>
                                                    <div className="category">
                                                        <h5>Website: </h5>
                                                        <div style={{marginLeft: 10, color: '#5E5E5E'}}>{!obj.website  ? "N/A" : obj.website}</div>
                                                    </div>
                                                    <div className="category">
                                                        <h5>Nonprofit Status: </h5>
                                                        <div style={{marginLeft: 10, color: '#5E5E5E'}}>{obj.nonprofit ? "Nonprofit" : "Other"}</div>
                                                    </div>
                                                    <div className="category">
                                                        <h5>Age Range: </h5>
                                                        <div style={{marginLeft: 10, color: '#5E5E5E'}}>{!obj.ageWindow  ? "N/A" : obj.ageWindow}</div>
                                                    </div>
                                                    <div className="category">
                                                        <h5>Dates: </h5>
                                                        <div style={{marginLeft: 10, color: '#5E5E5E'}}>{!obj.dates  ? "N/A" : obj.dates}</div>
                                                    </div>
                                                    <div className="category">
                                                        <h5>Daily Service Hours: </h5>
                                                    </div>
                                                    <div className="credentials">
                                                        <div className="subCategory">
                                                            <h6>Sunday: </h6>
                                                            <div style={{color: '#5E5E5E'}} className="subAnswer">
                                                                {!obj.Sunday ? 'N/A' : obj.Sunday}
                                                            </div>    
                                                        </div>
                                                        <div className="subCategory">
                                                            <h6>Monday: </h6>
                                                            <div style={{color: '#5E5E5E'}} className="subAnswer">
                                                                {!obj.Monday ? 'N/A' : obj.Monday}
                                                            </div>    
                                                        </div>
                                                        <div className="subCategory">
                                                            <h6>Tuesday: </h6>
                                                            <div style={{color: '#5E5E5E'}} className="subAnswer">
                                                                {!obj.Tuesday ? 'N/A' : obj.Tuesday}
                                                            </div>    
                                                        </div>
                                                        <div className="subCategory">
                                                            <h6>Wednesday: </h6>
                                                            <div style={{color: '#5E5E5E'}} className="subAnswer">
                                                                {!obj.Wednesday ? 'N/A' : obj.Wednesday}
                                                            </div>    
                                                        </div>
                                                        <div className="subCategory">
                                                            <h6>Thursday: </h6>
                                                            <div style={{color: '#5E5E5E'}} className="subAnswer">
                                                                {!obj.Thursday ? 'N/A' : obj.Thursday}
                                                            </div>    
                                                        </div>
                                                        <div className="subCategory">
                                                            <h6>Friday: </h6>
                                                            <div style={{color: '#5E5E5E'}} className="subAnswer">
                                                                {!obj.Friday ? 'N/A' : obj.Friday}
                                                            </div>    
                                                        </div>
                                                        <div className="subCategory">
                                                            <h6>Saturday: </h6>
                                                            <div style={{color: '#5E5E5E'}} className="subAnswer">
                                                                {!obj.Saturday ? 'N/A' : obj.Saturday}
                                                            </div>    
                                                        </div>
                                                    </div>
                                                    <div className="category">
                                                        <h5>Job Title: </h5>
                                                        <div style={{marginLeft: 10, color: '#5E5E5E'}}>{!obj.jobTitle ? 'N/A' : obj.jobTitle}</div>
                                                    </div>
                                                    <div className="category">
                                                        <h5>Volunteering Space: </h5>
                                                        <div style={{marginLeft: 10, color: '#5E5E5E'}}>{!obj.volunteeringSpace ? 'N/A' : obj.volunteeringSpace}</div>
                                                    </div>
                                                    <div className="category">
                                                        <h5>Job Description: </h5>
                                                        <div style={{marginLeft: 10, color: '#5E5E5E'}}>{!obj.jobDescription ? 'N/A' : obj.jobDescription}</div>
                                                    </div>
                                                    <div className="category">
                                                        <h5>Credentials: </h5>
                                                        <div className="credentials">
                                                            <div className="subCategory">
                                                                <h6>GPA: </h6>
                                                                <div style={{color: '#5E5E5E'}} className="subAnswer">
                                                                    {!obj.gpa  ? "N/A" : obj.gpa}
                                                                </div>
                                                            </div>
                                                            <div className="subCategory">
                                                                <h6>Certification: </h6>
                                                                <div style={{color: '#5E5E5E'}} className="subAnswer">
                                                                    {!obj.certification  ? "N/A" : obj.certification}
                                                                </div>
                                                            </div>
                                                            <div className="subCategory">
                                                                <h6>Skills: </h6>
                                                                <div style={{color: '#5E5E5E'}} className="subAnswer">
                                                                    {!obj.skills  ? "N/A" : obj.skills}
                                                                </div>
                                                            </div>
                                                            <div className="subCategory">
                                                                <h6>Language: </h6>
                                                                <div style={{color: '#5E5E5E'}} className="subAnswer">
                                                                    {!obj.languages  ? "N/A" : obj.languages}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="category">
                                                        <h5>Dress Code:</h5>
                                                        <div style={{marginLeft: 10, color: '#5E5E5E'}}>{!obj.dressCode ? 'N/A' : obj.dressCode}</div>
                                                    </div>
                                                    <div className="category">
                                                        <h5>Any Further Specifications:</h5>
                                                        <div style={{marginLeft: 10, color: '#5E5E5E'}}>{!obj.anyFurtherSpecifications ? 'N/A' : obj.anyFurtherSpecifications}</div>
                                                    </div>
                                                    <div className="parentMobileFlex" style={{marginTop: 15}}>
                                                        <button className="mobileApplyButton" style={{height: 50}} onClick={()=>{
                                                            
                                                            this.track.next();
                                                            window.scrollTo(0,0);
                                                            
                                                            }}></button>
                                                    </div>
                                                </div>
                                                );
                                                })}
                                            
                                        </div>
                                    </div>
                                </View>
                                <View>
                                    <div className="parentMobileFlex">
                                        <form className="parentMobileFlex" style={{marginTop: 75}}>
                                            
                                            <label for="inputEmail" style={{paddingBottom: 5}}>Your Email</label>
                                            <input type="email" className="form-control" id="inputEmail" placeholder="example@example.com" onChange={(event)=>{this.setState({SenderEmail: event.target.value});}}  />
                                            
                                            <label for="inputAge" style={{paddingBottom: 5}}>Your Name</label>
                                            <input type="text" className="form-control" id="inputName" placeHolder="Last Name, First Name" onChange={(event)=>{this.setState({Name: event.target.value});}}  />
                                            <label for="inputAge" style={{paddingBottom: 5}}>Age</label>
                                            <input type="text" className="form-control" id="inputAge" placeHolder="Age" onChange={(event)=>{this.setState({Age: event.target.value});}}  />
                                            <label for="inputSchool" style={{paddingBottom: 5}}>Grade</label>
                                            <input type="text" className="form-control" id="inputSchool" placeHolder="If applicable, school and grade level" onChange={(event)=>{this.setState({Grade: event.target.value});}}  />
                                            <label for="inputGPA" style={{paddingBottom: 5}}>GPA</label>
                                            <input type="text" className="form-control" id="inputGPA" placeHolder="Grade point average (unweighted, weighted)" onChange={(event)=>{this.setState({GPA: event.target.value});}}  />
                                            <label for="inputCert" style={{paddingBottom: 5}}>Certification</label>
                                            <input type="text" className="form-control" id="inputCert" placeHolder="ex. volunteer number, CPR training, etc." onChange={(event)=>{this.setState({Cert: event.target.value});}}  />
                                            <label for="inputTalent" style={{paddingBottom: 5}}>Skills</label>
                                            <input type="text" className="form-control" id="inputTalent" placeHolder="ex. chess, programming, etc." onChange={(event)=>{this.setState({Skills: event.target.value});}}  />
                                            <label for="inputLang" style={{paddingBottom: 5}}>Languages</label>
                                            <input type="text" className="form-control" id="inputLang" placeHolder="Any proficiency in foreign language" onChange={(event)=>{this.setState({Languages: event.target.value});}}  />
                                            <label for="inputSchool" style={{paddingBottom: 5}}>School</label>
                                            {!this.state.schoolText ? <ButtonDropdown className="schoolDropdown" id="inputSchool" isOpen={this.state.dropdownToggled} toggle={this.toggleDropdown}>
                                                <DropdownToggle style={{color: 'grey'}} className="schoolDropdownToggle text-left" caret color="light">{this.state.School != 'N/A' ? this.state.School : 'School'}</DropdownToggle>
                                                <DropdownMenu  className="schoolDropdownItem" right>
                                                    <a href="https://volunteeringmiami.com/communityservicepapers/palmetto.docx" download="palmetto.docx"><DropdownItem onClick={() => {
                                                        //this.downloadFile("palmetto");
                                                        this.setState({
                                                            School: "Miami Palmetto Senior High School"
                                                        })
                                                        
                                                    }} >
                                                        Miami Palmetto Senior High School
                                                    </DropdownItem></a>
                                                    <a href="https://volunteeringmiami.com/communityservicepapers/coral_reef.docx" download="coralreef.docx"><DropdownItem onClick={() => {
                                                        //this.downloadFile("coral reef");
                                                        this.setState({
                                                            School: "Coral Reef Senior High School"
                                                        })
                                                        
                                                    }}>
                                                        Coral Reef Senior High School
                                                    </DropdownItem></a>
                                                    <a href="https://volunteeringmiami.com/communityservicepapers/beach_high.docx" download="beach_high.docx"><DropdownItem onClick={() => {
                                                        
                                                        this.setState({
                                                            School: "Miami Beach Senior High School"
                                                        })
                                                        
                                                    }}>
                                                        Miami Beach Senior High School
                                                    </DropdownItem></a>
                                                    <a href="https://volunteeringmiami.com/communityservicepapers/new_world_mobile.docx" download="new_world_mobile.docx"><DropdownItem onClick={() => {
                                                        //this.downloadFile("coral reef");
                                                        this.setState({
                                                            School: "New World School of the Arts"
                                                        })
                                                        
                                                    }}>
                                                        New World School of the Arts
                                                    </DropdownItem></a>
                                                    <DropdownItem onClick={() => {
                                                        this.setState({
                                                            schoolText: true
                                                        })
                                                    }}>
                                                        Other
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown> : 
                                            <input type="text" className="form-control" id="inputSchool" placeHolder="School" onChange={(event)=>{this.setState({School: event.target.value});}}/>
                                            }
                                            <label for="inputMessage" style={{paddingBottom: 5}}>Message</label>
                                            <textarea type="text" className="form-control" id="inputMessage" placeHolder="Any additional notes"onChange={(event)=>{this.setState({Body: event.target.value});}}  />
                                            <label for="submitFilesComp">Attachment</label>
                                            
                                            <input type="file" id="submitFiles" onChange={this.fileHandler} hidden/>
                                            <label for="submitFiles" className="submitFiles">{this.state.UploadedFile ? <span>{this.state.UploadedFile}</span> : <span>Select File or Drag and Drop</span>} </label>
                                            
                                            
                                        </form>
                                        <div style={{marginTop: 25}} className="tosCheckbox">
                                            <div style={{marginRight: 5}}>
                                                <input style={{marginRight: 10}} type="checkbox" id="tos" onChange={() => this.setState({tosChecked: !this.state.tosChecked})}/>
                                                I agree to the Volunteering Miami <a style={{color: "white"}} href="https://volunteeringmiami.com/termsofservice/Terms_of_Service.pdf"><b>Terms of Service</b></a>
                                            </div>
                                        </div>
                                        {(this.state.tosChecked && this.state.SenderEmail && this.state.Name) ? 
                                        <button style={{marginTop: 25}} className="btn btn-dark" onClick={async()=>{
                                            try {
                                                let res = await Storage.put(this.state.UploadedFile, this.state.FileData);
                                                console.log(res);
                                            } catch (err){
                                                console.log(err)
                                            }
                                            fetch(`https://8fhyajns7c.execute-api.us-east-2.amazonaws.com/prod/contact?Body=${this.state.Body}&UploadedFile=${this.state.UploadedFile}&Email=${this.props.email}&Subject=${this.state.Subject + this.state.Name}&CompanyName=${this.props.name}&CompanyId=${this.props.businessId}&Name=${this.state.Name}&SenderEmail=${this.state.SenderEmail}&Age=${this.state.Age}&Grade=${this.state.Grade}&School=${this.state.School}&GPA=${this.state.GPA}&Cert=${this.state.Cert}&Skills=${this.state.Skills}&Languages=${this.state.Languages}&ContactUs=${this.state.entryPoint}`)
                                            .then(res => res.json())
                                            .then((result) => {
                                                console.log(result);
                                                alert(result === 'error' ? 'Message not sent' : 'Message sent successfully');
                                                window.location.href='/';
                                            },(error) => {
                                                console.log(error);
                                                alert('Error: '+error);
                                                window.location.reload();
                                            })
                                        }}>Submit</button>
                                        :
                                        <button style={{marginTop: 25}} className="btn btn-dark">Submit</button>
                                        }
                                    </div>
                                </View>
                            </Track>
                        </Frame>
                    </ViewPager>
                </div>
                }
            </div>
        );
    }
}

export default Template