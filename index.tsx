import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { SummaryItem, OneColumnPage } from '@pega/cosmos-react-core';
import './style.css';

interface AppProps {}
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
    return <OneColumnPage a="a" title="OneColumn"/>;
  }
}

render(<App />, document.getElementById('root'));
