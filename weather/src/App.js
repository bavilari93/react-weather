import React, { Component } from 'react';
import './App.css';
import Search from './components/Search.js';
import WeatherList from './components/WeatherList'
class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      city:'',
      weatherResult:[],
      savedWeather:[], 
      mode:'search'
    }
  }


getWeather(){
  let param = this.state.city
    fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${param}&cnt=10&APPID=1716693f031095273307c498a9486548`,{
        method: 'GET'
      }).then((response)=> 
       response.json()
      ).then((data)=>
        this.setState({
          // parsed results enclosed because it needs to be an array
        weatherResult:[this.parseResults(data)]
        })
)}

parseResults(data){

  let listResult = data.list[0],
      weather=data.list[0].weather[0]
  return {
    city: data.city.name, 
    lat:data.city.coord.lat,
    lon: data.city.coord.lon, 
    country:data.city.country,
    could: listResult.coulds? listResult.coulds : 'not available' ,
    deg: listResult.deg,
    humidity: listResult.humidity,
    rain:listResult.rain? listResult.rain : 'not available',
    description: weather.description,
    icon: weather.icon
  }
}
modeChange(mode){
  this.setState({
      mode: mode
  })
}
handleChange(e){
  let target = e.target,
  value= target.value,
  name =target.name
  this.setState({
    [name]:value
  })
}
handleSubmit(e){
  e.preventDefault();
  this.getWeather();
}

ViewRender(){
  if (this.state.mode === 'search'){
      return( 
      <div className="container">
          <Search
                  input={this.props.input}
                  handleChange={this.handleChange.bind(this)}
                  handleSubmit={this.handleSubmit.bind(this)}
                />
          <WeatherList
            weatherResults={this.state.weatherResult}
          />
        </div>
              ) 
  }else{
      return(<div> normal view</div>)
  }
}

  render() {
    return (
      <div className="App">
       {this.ViewRender()}
      </div>
    );
  }
}

export default App;
