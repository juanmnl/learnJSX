import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './../styles/App.css';

var titles = [
  {title: 'Traductor de Babel.js', placeholder: '/* Insertar código ES6/JSX aquí */', clear: 'Borrar' },
  {title: 'Tradutor do Babel.js', placeholder: '/* Insira código ES6/JSX aqui */', clear: 'Apagar'},
  {title: 'Babel.js Translator', placeholder: '/* Insert ES6/JSX code here */', clear: 'Clear'}
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      titleIndex: 0,
      input: '',
      output: '',
      err: '',
    }
  }

  _update(e) {
    let code = e.target.value;
    try {
      this.setState({
        output: window.Babel
          .transform(code, { presets: ['es2015', 'react']})
          .code,
          err: '',
      })
    }
    catch(err) {
      this.setState({err: err.message})
    }
  }

  _changeTitle() {
    let newIndex;
    if (this.state.titleIndex + 1 === titles.length) {
      newIndex = 0;
    } else {
      newIndex = this.state.titleIndex + 1;
    }
    this.setState({
      titleIndex: newIndex,
    });
  }

  _onClear(e) {
    document.getElementById('input').value = '';
    this.setState({
      output: '',
      err: '',
    });
  }

  render() {
    let title = titles[this.state.titleIndex];
    return (
      <div className='app-container'>
        <Navbar
          titleID={this.state.titleIndex}
          title={title.title}
          onChangeTitle={this._changeTitle.bind(this)}
          onClear={this._onClear.bind(this)}
          buttonLang={title.clear}
        />
        {this.state.err
          ? <div className='error'>{this.state.err}</div>
          : ''
        }
        <section className="section-container">
          <textarea
            id='input'
            onChange={this._update.bind(this)}
            defaultValue={this.state.input}
            placeholder={title.placeholder}
          />
          <pre>
            {this.state.output}
          </pre>
        </section>
        <Footer twitterHandle="@_juanmnl" />
      </div>
    );
  }
}

export default App;
