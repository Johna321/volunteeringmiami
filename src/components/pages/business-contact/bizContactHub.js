import React, {Component} from 'react';
import Template from './template.jsx';
import businessesJson from '../../../businesses.js';

class bizContactHub extends Component{
    state={
        business: []
    }

    componentDidMount = async() => {
        let jsonData = await fetch(
            `https://288jofwgy1.execute-api.us-east-2.amazonaws.com/prod/businesses?itemId=${new URLSearchParams(window.location.search).get('ItemId')}&limit=1&offset=0&orderBy=id&ascOrDesc=ASC`,
            { method: "GET" }
        );
        jsonData = await jsonData.json()
        this.setState({
            business: jsonData
        })
    }

    render(){
        return(
            <div className="bigparent">
                {this.state.business.length > 0 && 
                <Template name={this.state.business[0].name} businessId={this.state.business[0].id} email={this.state.business[0].email} />}
            </div>
        );
    }
}

export default bizContactHub;