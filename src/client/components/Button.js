import React, {Component} from 'react'

export class Button extends Component{
    render(){
        return(
            <button className={"btn "+this.props.classBtn}>{this.props.children}</button>
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