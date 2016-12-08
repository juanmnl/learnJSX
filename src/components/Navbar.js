import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <h1 onClick={this.props.onClick}>
          {this.props.title}
        </h1>
      </div>
    );
  }
}

export default Navbar;
