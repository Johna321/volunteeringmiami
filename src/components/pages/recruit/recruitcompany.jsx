import React, { Component } from 'react';
import './recruitcompany.css';
import whoCanRecruit from './whocanrecruit.jpg';
import businessesJson from '../../../businesses';
import bizPic from '../mainpage/businessphotos/bizimage.jpg';

class RecruitCompany extends Component{
    state={
        
    }
    render(){
        return(
            <div className="RecruitCompany">

                <div className="logo">
                    <img src={whoCanRecruit} alt="graphic" className="infographic" width="100%" height="auto"/>
                    <div className="bot-bar" />
                </div>
                {/*
                <div className="left">
                
                </div>
                */}
                

            </div>
        );
    }
}

export default RecruitCompany;