import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class Avatar extends Component{
    render(){
        return(
            <img className="avatar-img" src="/images/avatar.svg" style={{height:this.props.size, width:this.props.size}} />
        )
    }
}

Avatar.propTypes = {
    size : PropTypes.number
}