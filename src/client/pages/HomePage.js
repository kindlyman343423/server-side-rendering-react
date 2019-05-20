import React, { Component } from "react";
import Helmet from "../components/Helmet";
import { connect } from "react-redux";
import { fetchCategories, fetchAreas } from "../actions";
import DayPicker from 'react-day-picker/DayPickerInput';

//includes components
import { PrimaryButton } from "../components/Button";
import { PrimaryAlert, SuccessAlert, ErrorAlert } from '../components/Alerts';
import { PrimaryLabel, SecondaryLabel, DangerLabel } from '../components/Labels';
import {TextCard} from '../components/Card'
import {InputText, InputNumber, TextArea, CheckBox, RadioButton, RadioButtonImage, RadioButtonText, CheckBoxIconVertical} from '../components/Forms'
import {Avatar} from '../components/Avatar'
import {Tooltips} from '../components/Tooltips'
import {Spinner} from '../components/Spinner'
import {ModalButton, Modal} from '../components/Modal'
import {ListGroup} from '../components/ListGroup'
import Header from './includes/Header'

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories());
    this.props.dispatch(fetchAreas());
  }

  render() {
    return (
      <div>
        <Helmet
          description="Want to buy, sell, rent or invest on a real estate property? Explore our list of real estate properties (houses, apartments, lands), Basobaas agents always at your service."
          title="Trusted real estate bazar in Nepal | Basobaas"
          image="https://basobaas.com/images/bg.jpg"
          url="https://basobaas.com"
          chatScriptUrl="https://widget.manychat.com/934957239853993.js"
        />

        <Header />

        <h1>Whaat up homies !</h1>
        <PrimaryButton>Primary Button</PrimaryButton>
        <PrimaryLabel>Negotiable</PrimaryLabel>
        <SecondaryLabel>Verified</SecondaryLabel>
        <DangerLabel>Sold Out</DangerLabel>
        <PrimaryAlert>This is a Primary Alert</PrimaryAlert>
        <SuccessAlert>This is a Primary Alert</SuccessAlert>
        <ErrorAlert>This is a Primary Alert</ErrorAlert>


        <RadioButtonImage 
          name = "type" 
          value = "Residential"
          image = '/images/residential.svg'
        >
          Residential
        </RadioButtonImage>
        
        <RadioButtonImage 
          name= "type" 
          value= "Commercial"
          image = "/images/commercial.svg"
        >
          Commercial
        </RadioButtonImage>

        <RadioButtonText
        name= "bedroom" 
        value= "1"
        >1</RadioButtonText>
        <RadioButtonText
        name= "bedroom" 
        value= "2"
        >2</RadioButtonText>
        <RadioButtonText
        name= "bedroom" 
        value= "3"
        >3</RadioButtonText>

        <TextCard 
          img = "https://basobaas.com/api/public/images/2019-05/03/11-1556870507_m.jpg"
          category = "Land"
          status = "For Sale"
          posted = "28 Days ago"
          price = "NRs. 55,00,000"
          location = "Imadol, Latlitpur"
          bedrooms = "3"
          bathrooms = "2"
          areaCovered = "1-0-0-3"
          views = "230"
        />

        {/* <InputText name="user" placeholder="input your name" />

        <InputNumber name="phone" />

        <TextArea name="hello" />

        <Avatar size={30} />

        <Tooltips text="This is Tooltip">Hover Over Me</Tooltips>

        <Spinner size={40} color="red" /> */}
        
        <CheckBox name="animal" value="cats" >Cats</CheckBox>
        <CheckBox name="animal" value="dogs" >Dogs</CheckBox>
        <CheckBox name="animal" value="mouse" >Mouse</CheckBox>

        <RadioButton name="wild-animal" value="lion">Lion</RadioButton>
        <RadioButton name="wild-animal" value="tiger">Tiger</RadioButton>
        <RadioButton name="wild-animal" value="elephant">Elephant</RadioButton>

        <CheckBoxIconVertical
          name="features"
          value="garden"
        >
        Garden</CheckBoxIconVertical>
        <CheckBoxIconVertical
          name="features"
          value="lawn"
        >
        Lawn</CheckBoxIconVertical>
        <CheckBoxIconVertical
          name="features"
          value="garage"
        >
        Garden</CheckBoxIconVertical>

        <DayPicker />

        <ModalButton 
          text = "Open Modal" 
          id = "myModal"
        />

        <Modal 
          id = "myModal"
          title = "Basic Modal"
        >
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
        </Modal>

        <ListGroup>
            <div className="list-group-item">Cras justo odio</div>
            <div className="list-group-item">Dapibus ac facilisis in</div>
            <div className="list-group-item">Morbi leo risus</div>
            <div className="list-group-item">Porta ac consectetur ac</div>
            <div className="list-group-item">Vestibulum at eros</div>
        </ListGroup>

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
            if(i > 10) return;
            return <li key={area.id}>{area.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { categories: state.categories, areas: state.areas };
};

function loadData(store) {
  return store.dispatch(fetchCategories(), fetchAreas());
}

export { loadData };
export default { loadData, component: connect(mapStateToProps)(Home) };
