import React, { Component } from 'react';
import './../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      output: '',
      err: '',
      placeholder: '/* escribe código JSX aquí */',
    }
  }

  update(e) {
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

  render() {
    return (
      <div>
        <header>{this.state.err}</header>
        <section className="container">
          <textarea
            onChange={this.update.bind(this)}
            defaultValue={this.state.input}
            placeholder={this.state.placeholder}
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
