import React, { Component } from 'react';

export class ListGroup extends Component{
    render(){
        return(
            <div className="list-group">
                {this.props.children}
            </div>
        )
    }
}