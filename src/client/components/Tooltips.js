import React, {Component} from 'react'

export class Tooltips extends Component{
    render(){
        return(
            <div className="tooltip">
                {this.props.children}
                <span className="tooltip-text"><span>{this.props.text}</span></span>
            </div>
        )
    }
}