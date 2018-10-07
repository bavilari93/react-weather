import React, {Component} from 'react';
import WeatherItem from './WeatherItem';
class WeatherList extends Component{
	renderWeather(data){
		return data.map((e, index) =>{
			return(
				<div key={index}>
				<WeatherItem
				city={e.city}
				could={e.could}
				country={e.country}
				deg={e.deg}
				description={e.description}
				humidity={e.humidity}
				icon={e.icon}
				rain={e.rain}
				/>
					<iframe
					className ="map"
					title="test"
					style={{width: '600px',height:"450px",border:"0" }}
				      src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyBamVRahAneL2IwgWRAiZ0e2vgWamP7an4&q=" + e.lat + "," + e.lon}>
    			</iframe>
				</div>
				)
		})
	}
	render(){
		return(
			<div>
				{this.renderWeather(this.props.weatherResults)}
			</div>)
	}
}

export default WeatherList