import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import EmpoyeeCompoent from './EmployeeComponent'

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <EmpoyeeCompoent />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
