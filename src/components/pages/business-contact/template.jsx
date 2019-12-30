import React, {Component} from 'react';

class Template extends Component{
    render(){
        return(
            <div className="stuff">
                <h1>I'm</h1>
                <span>{this.props.name}</span>
            </div>
        );
    }
}

export default Template