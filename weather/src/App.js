import React, { Component } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Forecast from './components/Forecast';
import axios from 'axios';
import key from './config/config.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount(weather) {
    this.setState({getWeather: []});
    console.log(`What's the weather? ${weather}`);
    if(weather){
      axios.get(`api.openweathermap.org/data/2.5/weather?zip=${this.props.weather},us&APPID=${key}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div> Error: {error.message}</div>;
    } else {
      return (
        <div className="container-fluid">
          <Header></Header>
          <Input></Input>
          <Forecast></Forecast>
        </div>
      );
    }
  }
}

export default App;
