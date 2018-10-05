import React, { Component } from 'react';
import './App.css';
import Search from './components/Search.js';

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
  console.log(typeof param);
    fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${param}&cnt=10&APPID=1716693f031095273307c498a9486548`,{
        method: 'GET'
      }).then((response)=> 
       response.json()
      ).then((data)=>
        this.setState({
        weatherResult:this.parseResults(data)
        },()=>{console.log(this.state.weatherResult)})
)}

parseResults(data){
  let listResult = data.list[0],
      weather=data.list[0].weather[0]
  return {
    city: data.city.name, 
    coordinates: data.city.coord, 
    country:data.city.country,
    could: listResult.coulds,
    deg: listResult.deg,
    humidity: listResult.humidity,
    rain:listResult.rain,
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
  console.log(value);
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
      return( <Search
                input={this.props.input}
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
              /> ) 
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
