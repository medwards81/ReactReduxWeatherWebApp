import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
	return _.sum(data)/data.length;
}

export default (props) => {
	return (
		<div>
			<Sparklines height={props.height || 120} width={props.width || 180} data={props.data}>
				<SparklinesLine color={props.color || 'blue'} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>{average(props.data)} {props.units}</div>
		</div>
	)
}
