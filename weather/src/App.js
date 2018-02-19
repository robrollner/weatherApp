import React, { Component } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Forecast from './components/Forecast';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header></Header>
        <Input></Input>
        <Forecast></Forecast>
      </div>
    );
  }
}

export default App;
