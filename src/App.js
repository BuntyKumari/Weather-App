import React, {Component} from 'react';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'


const API_KEY = "d53655cfe9ec20cb7932732f5ebe143d";

class App extends Component {

  state = {
    input:"",
    temperature:'',
    city:'',
    humidity: '',
    mintemp: '',
    maxtemp: ''   
  }

getWeather = async(e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  // console.log(city);
  const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
  // console.log(api_call);
  const data = await api_call.json();
  // console.log(data);
  this.setState({
    temperature: data.main.temp,
    city:data.name,
    mintemp:data.main.temp_min,
    maxtemp:data.main.temp_max
  });

}

onChange = (e) => {
  this.setState({input:e.target.value}); 
  console.log(this.state.input)
}

  render() {
  return (
    <div className="App">
      
        <Titles />
        <Form input={this.state.input} onChange={this.onChange} getWeather={this.getWeather}/>
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          mintemp={this.state.mintemp}
          maxtemp={this.state.maxtemp}
        />

    </div>
  );
}
};
export default App;
