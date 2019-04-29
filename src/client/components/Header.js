import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

const Header = ({auth}) => {
  console.log("The auth state is "+auth);
    return (
      <Link to="/">React SSR</Link>
    )
}

function mapStateToProps ({auth}){
  return {auth};
}

export default connect(mapStateToProps)(Header)