import React, { Component } from 'react'


export class PrimaryLabel extends Component{
    render(){
        return(
            <span className="label primary-label">{this.props.children}</span>
        )
    }
}

export class SecondaryLabel extends Component{
    render(){
        return(
            <span className="label secondary-label">{this.props.children}</span>
        )
    }
}

export class DangerLabel extends Component{
    render(){
        return(
            <span className="label danger-label">{this.props.children}</span>
        )
    }
}