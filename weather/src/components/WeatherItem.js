import React , {Component} from 'react';

class WeatherItem extends Component{

	render(){
		return(
			<div className="weather-item">
				<img src={"http://openweathermap.org/img/w/"+ this.props.icon +".png"} alt="weather"/>
				<h1>{this.props.city}</h1>
				<h2>{this.props.country}</h2>
				<p>{this.props.description}</p>
				<p>humidity:{this.props.humidity}</p>
				<h1> deg: {this.props.deg}</h1>
				
			</div>)
	}
}

export default WeatherItem; 