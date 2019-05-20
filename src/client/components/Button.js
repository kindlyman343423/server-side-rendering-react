import React, {Component} from 'react'

export class PrimaryButton extends Component{
    render(){
        return(
            <button className="btn primary-btn">{this.props.children}</button>
        )
    }
}

export class SecondaryButton extends Component{
    render(){
        return(
            <button className="btn secondary-btn">{this.props.children}</button>
        )
    }
}