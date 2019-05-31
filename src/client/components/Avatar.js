import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class Avatar extends Component{
    render(){
        return(
            <img className="avatar-img" src="/images/avatar.svg" style={{height:this.props.size, width:this.props.size}} />
        )
    }
}

export class NameAvatar extends Component{
    getRandomColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    render(){
        let firstName, lastName = '';
        if(this.props.name.split(' ')){
            firstName = this.props.name.split(' ')[0].toUpperCase();
            firstName = firstName.split('')[0]
            lastName = this.props.name.split(' ').pop().toUpperCase();
            lastName = lastName.split('')[0]
        }else{
            firstName = this.props.name
        }
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return(
            <div className={"name-avatar "+this.props.newClass} style={{height:this.props.size, width:this.props.size, backgroundColor:color}}>
                <span>{firstName}{lastName}</span>
            </div>
            // <img className="avatar-img" style={{height:this.props.size, width:this.props.size}} />
        )
    }
}

Avatar.propTypes = {
    size : PropTypes.number
}