import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LineChart from '../components/line_chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData) {
		const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * (9/5) - 459.67);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const { lon, lat } = cityData.city.coord;

		return (
			<tr key={cityData.city.id}>
				<td>
					<GoogleMap lon={lon} lat={lat} />
				</td>
				<td>
					<LineChart data={temps} units='&deg;F' />
				</td>
				<td>
					<LineChart data={humidities} units='%' />
				</td>
				<td>
					<LineChart data={pressures} units='hPa' />
				</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (&deg;F)</th>
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
