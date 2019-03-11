import React, { Component } from 'react';
import Router from './Router';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Shopping Cart</h1>

        <Router />
      </div>
    );
  }
}

export default App;
