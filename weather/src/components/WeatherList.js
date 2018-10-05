import React, {Component} from 'react';
import WeatherItem from './WeatherItem';
class WeatherList extends Component{
	renderWeather(data){
		console.log(data)
		return data.map((e, index) =>{
			console.log(e);
			return(
				<WeatherItem/>
				)
		})
	}
	render(){
		return(
			<div>weather List
				{this.renderWeather(this.props.weatherResults)}
			</div>)
	}
}

export default WeatherList