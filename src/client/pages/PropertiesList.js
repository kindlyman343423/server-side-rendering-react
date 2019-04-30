import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProperties } from "../actions";
import axios from 'axios';

class PropertiesList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProperties());
    }

  renderProperties() {
    return this.props.properties.map(property => {
      return <li key={property.id}>{property.title}</li>;
    });
  }

  render() {
    return (
      <div>
        Here's a list of properties
        <ul>{this.renderProperties()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { properties: state.properties };
};

function loadData(store) {
  return store.dispatch(fetchProperties());
}

export { loadData };
export default { loadData, component: connect(mapStateToProps)(PropertiesList) };
