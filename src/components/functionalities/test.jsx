import React, { Component } from 'react';
import './test.css';


class Test extends Component{
    render(){
        return(
            <div className="test">
                <h1>haha whats poopin</h1>
                <div className="functionality">
                        <h6>inputs</h6>
                        <form onSubmit={this.handleSubmit}>
                        company name
                        <input type="text" name="compname" onChange={this.compName} />
                        company description
                        <input type="text" name="compdesc" onChange={this.compDesc} />
                        <input type="submit" value="submit" />
                    </form>  
                </div>
            </div>
        );
    }
}

export default Test;