import React, { Component } from 'react';
import Navbar from './Navbar';
import './../styles/App.css';

var titles = [
  {title: 'Traductor de Babel', placeholder: '/* Insertar código ES6 aquí */', clear: 'Borrar' },
  {title: 'Tradutor do Babel', placeholder: '/* Insira código ES6 aqui */', clear: 'Apagar'},
  {title: 'Babel Translator', placeholder: '/* Insert ES6 code here */', clear: 'Clear'}
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
      </div>
    );
  }
}

export default App;
