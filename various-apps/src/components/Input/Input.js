import React from 'react'

const input = ( props ) => {

	let inputElement = null;

	switch (props.inputType) {
		case ('input'):
			inputElement = <input {...props}/>
			break;
		case ('input'):
			inputElement = <textarea {...props}/>
			break;
		default:
			inputElement = <input {...props}/>
			break;		
	}

	return (
		<div>
			<div className="container">
				<label>{props.label}</label>
				{inputElement}
			</div>
		</div>
	)

}; 

export default input;