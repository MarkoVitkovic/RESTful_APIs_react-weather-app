import React from 'react';
import './App.css';
import Weather from './components/weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Form from './components/form';
//api.openweathermap.org/data/2.5/weather?q=London,uk
const API_key="0cc868b2716d4d71c00cf0651e9b978d";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false
    };

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
  }
  calcCels(temp){
    let cell =Math.floor( temp - 273.15 );
    return cell;
  }
  get_icons(icons, range){
    switch(true){
      case range >= 200 && range <= 232:
        this.setState({icon: this.weatherIcon.Thunderstorm});
        break;
      case range >= 300 && range <= 221:
        this.setState({icon: this.weatherIcon.Drizzle});
        break;
      case range >= 500 && range <= 531:
        this.setState({icon: this.weatherIcon.Rain});
        break;
      case range >= 600 && range <= 622:
        this.setState({icon: this.weatherIcon.Snow});
        break;
      case range >= 701 && range <= 781:
        this.setState({icon: this.weatherIcon.Atmosphere});
        break;
      case range === 800:
          this.setState({icon: this.weatherIcon.Clear});
          break;
      case range >= 801 && range <= 804:
          this.setState({icon: this.weatherIcon.Clouds});
          break;
      default:
          this.setState({icon: this.weatherIcon.Clouds});
      }
  }

  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if(city && country){
      const api_call= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`)
      const res = await api_call.json();
      console.log(res);
      this.setState({
        city: `${res.name}, ${res.sys.country}`,
        celsius:this.calcCels(res.main.temp),
        temp_min:this.calcCels(res.main.temp_min),
        temp_max:this.calcCels(res.main.temp_max),
        description:res.weather[0].description,
        error: false

      })
      this.get_icons(this.weatherIcon, res.weather[0].id)
    }else {
      this.setState({
        error: true
      })
    }
  }


  render(){
    return(
      <div className="App">
        <Form loadweather={this.getWeather} error={this.state.error}/>
        <Weather
            city={this.state.city}
            country={this.state.country}
            temp_celsius={this.state.celsius}
            temp_min={this.state.temp_min}
            temp_max={this.state.temp_max}
            description={this.state.description}
            weatherIcon={this.state.icon}
          />
      </div>
    )
  }
}


export default App;
