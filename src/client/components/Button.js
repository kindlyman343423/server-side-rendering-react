import React, {Component} from 'react'

export class PrimaryButton extends Component{
    render(){
        return(
            <button type={this.props.type} name={this.props.name} className="btn primary-btn" onClick={this.handleFunc}>{this.props.children}</button>
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