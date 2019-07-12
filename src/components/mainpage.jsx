import React, { Component } from 'react';
import logo from './volmiamilogo.png';
import './mainpage.css';


class MainPage extends Component{
    state = {
        panelBody: "VolunteerMiami is a website designed to help students find community service opportunities."
    }
    render(){
        return(
            <div className="parent">

                <div className="main">
                    <div className="top">
                        <div className="row">
                            <div className="col">
                                <a href="/about" className="link">About</a>
                                <a href="/help" className="link">Help</a>
                            </div>
                        </div>
                    </div>
                    <div className="logo">
                        <img 
                            src={logo}
                            className="app-logo"
                            alt="volunteering miami logo"
                            height="150px"
                            width="500px" />
                    </div>
                    <div className="body">
                        <div className="container">
                        
                            <div className="panel panel-default rounded-top">
                                <div className="panel-body">
                                    <span>{this.renderPanelOne()}</span>
                                    <button onClick={this.panelInfo} className="btn btn-dark">mingrel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }

    panelInfo = () => {
        var panelOne = [
            'mmk now let me test if the thing can handle if certain phrases are longer',
            'this shit is really weird to get working',
            "VolunteerMiami is a website designed to help students find community service opportunities."
        ]

        this.setState({ panelBody: panelOne[Math.floor(Math.random() * panelOne.length)]});
        
    }

    renderPanelOne(){
        const { panelBody } = this.state;
        return <p>{panelBody}</p>
    }
}

export default MainPage;
