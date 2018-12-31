import React from 'react';

import './Validation.css';

const validation = ( props ) => {

	if (!props.inputL) {
		return (
		<div className="validation">
		<p>No Input</p>
		</div>
		)
	}
	if (props.inputL <= 5) {
	return (
		<div className="validation">
		<p>Too Short</p>
		</div>
		)
	} else if (props.inputL >= 5) {
	return (
		<div className="validation">
		<p>Too long</p>
		</div>
		)
	}
	else {
	return (
		<div className="validation">
		<p>No Input</p>
		</div>
	)	
	}
	// return (
	// 	<div className="validation">
	// 	<p>{props.inputL}</p>
	// 	</div>
	// )
}

export default validation;