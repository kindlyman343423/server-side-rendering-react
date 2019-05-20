import React, { Component } from 'react'

export class PrimaryAlert extends Component{
    render(){
        return(
            <div className="alert primary-alert"><span>{this.props.children}</span></div>
        )
    }
}

export class SuccessAlert extends Component{
    render(){
        return(
            <div className="alert success-alert"><span>{this.props.children}</span></div>
        )
    }
}

export class ErrorAlert extends Component{
    render(){
        return(
            <div className="alert error-alert"><span>{this.props.children}</span></div>
        )
    }
}