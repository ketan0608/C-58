import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: '',
    };
  }
  getWeather = async () => {
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139';
    return fetch(url)
      .then(response=> response.json())
      .then(responseJSON => {
        this.setState({
          weather: responseJSON,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

componentDidMount=()=>{
this.getWeather();
}

  render() {
    if (this.state.weather === '') {
      return (
      <View style={{backgroundColor:'pink',marginLeft:80,marginTop:50,width:70,height:30}}>
          <Text>LOADING...</Text>
        </View>
      );
    } else {
      return (
        <View>
        <Text>WEATHER FORECAST</Text>
        <Text>{this.state.weather.main.temp}&deg;c</Text>
        </View>
        );
    }
  }
}
