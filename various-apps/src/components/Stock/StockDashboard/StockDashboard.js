import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './StockDashboard.css';

// class StockDashboard extends Component {

// 	render() {

// 		return(
// 		<div>
// 			<div className="container">
// 				<div className="row">
// 					<div> Stock Name (Ticker) </div>
// 					<div> Stock Price</div>
// 					<div> Stock Price High/Low </div>
// 					<div> Stock close time </div>
// 				</div>
// 				<div className="row">
// 					<div> Stock Chart from plotly </div>
// 				</div>
// 				<div className="row">
// 					<div> Stock Newsfeed </div>
// 				</div>
// 			</div> 
// 		</div>
// 		)
// 	}
// }

const StockDashboard = (props) => {
	console.log(props.valueArr)
	return(
		<div>
			<div className="container">
				<div className="row">
				<ul>
					
					<li> Stock Name (Ticker): {props.valueArr[0]} ({props.valueArr[1]}) </li><br/>
					<li> Stock Price: {props.valueArr[2]}</li><br/>
					<li> Stock Price High/Low: {props.valueArr[4]} / {props.valueArr[5]}</li><br/>
					<li> Stock close time: {props.valueArr[8]} </li><br/>
				</ul>
				</div>
				<div className="row">
					<div> Stock Chart from plotly </div>
				</div>
				<div className="row">
					<div> Stock Newsfeed </div>
				</div>
			</div> 
		</div>
	)
}




export default StockDashboard;