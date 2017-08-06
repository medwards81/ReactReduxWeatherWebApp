import _ from 'lodash';
import React from 'react';
import { Line, defaults } from 'react-chartjs-2';

function getDaysLegend() {
    Date.prototype.addDays = function(days) {
        let d = new Date(this.valueOf());
        d.setDate(d.getDate() + days);
        return d;
    }

    var days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    let d = new Date();
    let legend = [];
    legend.push(days[d.getDay()]);
    while (legend.length < 5) {
        d = d.addDays(1);
        legend.push(days[d.getDay()]);
    }

    return legend;
}

function setDefaults(props) {
    // hide label
    defaults.global.legend.display = false;
    const data = {
        labels: getDaysLegend(),
        datasets: [
            {
            label: '',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: props.data
            }
        ]
    };

    return data;
}

function average(data) {
	return _.round(_.sum(data)/data.length);
}

export default (props) => {
	return (
		<div>
            <Line data={setDefaults(props)} />
			<div>{average(props.data)} {props.units}</div>
		</div>
	);
}
