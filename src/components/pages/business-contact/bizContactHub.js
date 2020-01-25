import React, {Component} from 'react';
import Template from './template.jsx';
import businessesJson from '../../../businesses.js';

class bizContactHub extends Component{
    state={
        businesses: businessesJson()
    }
    render(){
        return(
            <div className="bigparent">
                <Template name={this.state.businesses.find(obj => obj.id === Number(new URLSearchParams(window.location.search).get('ItemId'))).name} email={this.state.businesses.find(obj => obj.id === Number(new URLSearchParams(window.location.search).get('ItemId'))).email} />
            </div>
        );
    }
}

export default bizContactHub;