import React, { Component } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Forecast from './components/Forecast';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }


  
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
