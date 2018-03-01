import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Panel from "./Panel";
import Search from "./Search";
import WeatherDetail from "./WeatherDetail";
import WeekForecast from "./WeekForecast";
import API from "../utils/API";
// import APIW from "../utils/APIW";


class WeatherContainer extends Component {
  state = {
    result: {},
    search: ""
  };
  

  componentDidMount() {
    this.searchWeather("80203");
  }
  
  searchWeather = query => {
    API.search(query)
    .then(res => this.setState({ result: res.data }))
    .catch(err => console.log(err));
  };

  
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    console.log(name)
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchWeather(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Panel
              heading={this.state.result.name || "Search for the weather"}
            >
              {this.state.result.name
                ? <WeatherDetail                    
                    City={this.state.result.name}
                    Weather={this.state.result.weather[0].description}
                    Temperture={this.state.result.main.temp}
                    WindSpeed={this.state.result.wind.speed}
                  />
                : <h3>No Results to Display</h3>}
               
            </Panel>
          </Col>
          <Col size="md-4">
            <Panel>
              <Search
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Panel>
          </Col>
        </Row>
          <Row>
            {this.state.result.list ? <WeekForecast
                    Temperture={this.state.result.list[0].main.temp}              
              >
              </WeekForecast> : null}
              
          </Row>
      </Container>
    );
  }
}

export default WeatherContainer;
