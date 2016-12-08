import React, { Component } from 'react';
import ghLogo from './../../gh-logo.png';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar-container'>
        <button onClick={this.props.onClear}>
          {this.props.buttonLang}
        </button>
        <h1 onClick={this.props.onChangeTitle}>
          {this.props.title}
        </h1>
        <a href="https://github.com/juanmnl/learnJSX"><img src={ghLogo} alt="Github Logo" /></a>
      </div>
    );
  }
}

export default Navbar;
