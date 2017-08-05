import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData) {
		const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const { lon, lat } = cityData.city.coord;

		return (
			<tr key={cityData.city.id}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td>
					<Chart height={120} width={180} data={temps} color='orange' units='k' />
				</td>
				<td>
					<Chart height={120} width={180} data={humidities} color='green' units='%' />
				</td>
				<td>
					<Chart height={120} width={180} data={pressures} color='black' units='hPa' />
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
						<th>Temperature (C)</th>
						<th>Humidity (%)</th>
						<th>Pressure (hPa)</th>
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
