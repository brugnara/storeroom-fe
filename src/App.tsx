import React from 'react';

import './App.css';
import {Layout} from './layout/Layout'

import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends React.PureComponent {
  public render(): React.ReactNode {
    return (
      <div className="App">
        <Layout />
      </div>
    );
}
}

export default App;
