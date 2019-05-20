import React, { Component } from 'react'
import PropTypes from 'prop-types';

// include Components
import { PrimaryLabel, SecondaryLabel, DangerLabel } from '../components/Labels';

export class TextCard extends Component{
    render(){
        return( 
            <div className="text-card">
                <div className="image-label">
                    <img alt="image" src={this.props.img} /> 
                    <div className="label-group">
                        <SecondaryLabel>Verified</SecondaryLabel>
                        <PrimaryLabel>Negotiable</PrimaryLabel>
                        <DangerLabel>Sold Out</DangerLabel>
                    </div>
                </div>
                <div className="details">
                    <div className="title">
                        <span>{this.props.category}</span>
                        <span>·</span>
                        <span>{this.props.status}</span>
                        <span>·</span>
                        <span>{this.props.posted}</span>
                    </div>
                    <div className="price">{this.props.price}</div>
                    <div className="location"> 
                        <i className="remixicon-map-pin-line" /> 
                        <span>{this.props.location}</span>
                    </div>
                </div>
                <div className="features">
                    <div className="flex">
                        <div className="bed">
                            <img src="/images/bedroom.svg" /> <span>{this.props.bedrooms} Bedrooms</span>
                        </div>
                        <div className="bath">
                            <img src="/images/bathroom.svg" /> <span>{this.props.bathrooms} Bathrooms</span>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="map">
                            <img src="/images/map.svg" /> {this.props.areaCovered} Ropani
                        </div>
                        <div className="view">
                            <img src="/images/view.svg" /> {this.props.views} Views
                        </div>
                    </div>
                    {/* <ul>
                        <li className="bed"><img src="/images/bedroom.svg" /> 3 Bedrooms </li>
                        <li className="bath"><img src="/images/bathroom.svg" /> 2 Bathrooms </li>
                        <li className="map"><img src="/images/map.svg" /> 1-0-0-3 Roopani </li>
                        <li className="view"><img src="/images/view.svg" /> 230 Views </li>
                    </ul> */}
                </div>
            </div>
        )
    }
}