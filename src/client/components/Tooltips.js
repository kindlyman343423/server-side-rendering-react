import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export class Tooltips extends Component{
    render(){
        return(
            <div className="tooltip-new">
                <span>{this.props.text}</span>
                <div className="tooltip-text"><span>{this.props.children}</span></div>
            </div>
        )
    }
}