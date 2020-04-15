import React, { Component } from 'react';

export default class NavBar extends Component {
  render() { 
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand">
          Navbar{' '} <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
        </span>
      </nav>
    );
  }
}
