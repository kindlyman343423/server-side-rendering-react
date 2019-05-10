import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class InputText extends Component{
    render(){
        return(
            <input className="input" type="text" name={this.props.name} placeholder={this.props.placeholder} />
        )
    }
}

export class InputNumber extends Component{
    render(){
        return(
            <input className="input" type="number" name={this.props.name} placeholder={this.props.placeholder} />
        )
    }
}

export class TextArea extends Component{
    render(){
        return(
            <textarea rows="5" className="textarea" name={this.props.name} placeholder={this.props.placeholder}></textarea>
        )
    }
}

export class CheckBox extends Component{
    render(){
        return(
            <div className="checkbox">
                <input type="checkbox" name={this.props.name} id={this.props.value} value={this.props.value} />
                <label htmlFor={this.props.value}>{this.props.children}</label>
            </div>
        )
    }
}

export class RadioButton extends Component{
    render(){
        return(
            <div className="radio-button">
                <input type="radio" name={this.props.name} id={this.props.value} value={this.props.value} />
                <label htmlFor={this.props.value}>{this.props.children}</label>
            </div>
        )
    }
}

InputText.propTypes = {
    name : PropTypes.string.isRequired
}

InputNumber.propTypes = {
    name : PropTypes.string.isRequired
}

CheckBox.propTypes = {
    name : PropTypes.string.isRequired,
    value : PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ])
}