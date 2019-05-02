import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions";
import axios from 'axios';

class LoginPage extends Component {

 constructor(){
  super();
  this.state = {
   email: "",
   password: ""
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(e){
   this.setState({[e.target.name]: e.target.value});
 }

  handleSubmit(e){
    e.preventDefault();
    this.props.dispatch(loginUser(this.state)).then(
      user => console.log(user)
     );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
         <input type="email" name = "email" placeholder="Email" onChange={this.handleChange}/>
         <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
         <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
 user: state.users
}

export default {component: connect(mapStateToProps)(LoginPage) };
