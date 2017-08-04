import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
	renderWeather(cityData) {
		const temps = cityData.list.map(weather => weather.main.temp); // in kelvin
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const pressures = cityData.list.map(weather => weather.main.pressure);

		console.log(pressures);

		return (
			<tr key={cityData.city.id}>
				<td>{cityData.city.name}</td>
				<td>
					<Chart height={120} width={180} data={temps} color='red' />
				</td>
				<td>
					<Chart height={120} width={180} data={temps} color='blue' />
				</td>
				<td>
					<Chart height={120} width={180} data={temps} color='green' />
				</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Humidity</th>
						<th>Pressure</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({weather}) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);
