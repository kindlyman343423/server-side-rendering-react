import React, { Component } from "react";
import { PrimaryButton, Label } from "../components/Button";
import Helmet from "../components/Helmet";
import { connect } from "react-redux";
import { fetchCategories, fetchAreas, fetchPropertiesHot } from "../actions";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories());
    this.props.dispatch(fetchAreas());
    this.props.dispatch(fetchPropertiesHot());
  }

  render() {
    console.log(this.props.hotProperties);
    return (
      <div>
        <Helmet
          description="Want to buy, sell, rent or invest on a real estate property? Explore our list of real estate properties (houses, apartments, lands), Basobaas agents always at your service."
          title="Trusted real estate bazar in Nepal | Basobaas"
          image="https://basobaas.com/images/bg.jpg"
          url="https://basobaas.com"
          chatScriptUrl="https://widget.manychat.com/934957239853993.js"
        />
        <h1>Whaat up homies !</h1>
        <PrimaryButton>Primary Button</PrimaryButton>
        <Label classLabel="success-label">Label</Label>
        <br />

        <h2>Categories</h2>
        <ul>
          {this.props.categories.map(category => {
            return <li key={category.id}>{category.title}</li>;
          })}
        </ul>
        <br />

        <h2>Areas</h2>
        <ul>
          {this.props.areas.map((area, i) => {
            if (i > 10) return;
            return <li key={area.id}>{area.name}</li>;
          })}
        </ul>
        <br />

        <h2>Hot Properties</h2>
        <ul>
          {this.props.hotProperties.map((property, i) => {
            return <li key={property.id}>{property.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    areas: state.areas,
    hotProperties: state.properties
  };
};

function loadData(store) {
  store.dispatch(fetchAreas());
  store.dispatch(fetchCategories());
  return store.dispatch(fetchPropertiesHot());
}

export { loadData };
export default { loadData, component: connect(mapStateToProps)(Home) };
