import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    component={props => (isAuthenticated ? <Component {...props} /> : <Redirect to="/" />)}
  />
);

const mapStateToProps = state => ({
  isAuthenticated: false,
});

export default connect(mapStateToProps)(PrivateRoute);
