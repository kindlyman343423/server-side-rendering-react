import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

const Header = ({auth}) => {
  console.log("The auth state is "+JSON.stringify(auth));
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
    ) : (
      <a href="/api/auth/google">Login</a>
  )
    return (
      <div>
        <Link to="/">React SSR</Link>
        <div>
          <Link to="/users">Users</Link>
          <Link to="/admins">Admins</Link>
          <Link to="/properties">Properties</Link>
          {authButton}
        </div>
      </div>
    )
}

function mapStateToProps ({auth}){
  return {auth};
}

export default connect(mapStateToProps)(Header)