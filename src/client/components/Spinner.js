import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class Spinner extends Component{
    render(){
        return(
            <div className="spinner" style={{height:this.props.size, width:this.props.size, borderColor:this.props.color}}></div>
        )
    }
}

Spinner.propTypes = {
    size : PropTypes.number
}