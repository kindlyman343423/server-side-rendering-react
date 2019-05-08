import React, {Component} from 'react'

export class PrimaryButton extends Component{
    render(){
        return(
            <button className="btn primary-btn">{this.props.children}</button>
        )
    }
}

export class SuccessButton extends Component{
    render(){
        return(
            <button className="btn secondary-btn">{this.props.children}</button>
        )
    }
}

export class Label extends Component{
    render(){
        return(
            <span className={"label "+this.props.classLabel}>{this.props.children}</span>
        )
    }
}