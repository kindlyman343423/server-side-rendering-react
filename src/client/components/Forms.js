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

export class CheckBoxIconVertical extends Component{
    render(){
        return(
            <div className="checkBox-with-icon-vertical" key={this.props.keyi}>
                <input 
                    type="checkbox" 
                    name={this.props.name} 
                    id={this.props.value} 
                    value={this.props.value} 
                    onChange={this.props.handleFunc} 
                />
                <label className="drinkcard-cc" htmlFor={this.props.value}>
                    {/* <img src={this.props.image} alt={this.props.value} /> */}
                    <span className="title">
                        {this.props.value}
                    </span>
                </label>
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

export class RadioButtonImage extends Component{
    render(){
        return(
            <div className="radio-with-image">
                <input type="radio" name={this.props.name} id={this.props.value} value={this.props.value} />
                <label className="drinkcard-cc" htmlFor={this.props.value} style={{backgroundImage:`url(${this.props.image})`}}></label>
                <span className="title">{this.props.value}</span>
            </div>
        )
    }
}

export class RadioButtonIconVertical extends Component{
    render(){
        return(
            <div className="radio-with-icon-vertical" key={this.props.keyi}>
                <input 
                    type="radio" 
                    name={this.props.name} 
                    id={this.props.value} 
                    value={this.props.value} 
                    onChange={this.props.handleFunc} 
                />
                <label className="drinkcard-cc" htmlFor={this.props.value}>
                    <img src={this.props.image} alt={this.props.value} />
                    <span className="title">
                        {this.props.value}
                    </span>
                </label>
            </div>
        )
    }
}

export class RadioButtonIcon extends Component{
    render(){
        return(
            <div className="radio-with-icon" key={this.props.keyi}>
                <input 
                    type="radio" 
                    name={this.props.name} 
                    id={this.props.title} 
                    value={this.props.value}
                    onChange={this.props.handleFunc}  
                />
                <label className="drinkcard-cc" htmlFor={this.props.title}>
                    <img src={this.props.image} alt={this.props.title} />
                    <span className="title">
                        {this.props.title}
                    </span>
                </label>
            </div>
        )
    }
}

export class RadioButtonText extends Component{
    render(){
        return(
            <div className="radio-text">
                <input type="radio" name={this.props.name} id={this.props.value} value={this.props.value} />
                <label className="drinkcard-cc" htmlFor={this.props.value}><span>{this.props.children}</span></label>
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

RadioButton.propTypes = {
    name : PropTypes.string.isRequired,
    value : PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ])
}

RadioButtonImage.propTypes = {
    name : PropTypes.string.isRequired,
    value : PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ])
}