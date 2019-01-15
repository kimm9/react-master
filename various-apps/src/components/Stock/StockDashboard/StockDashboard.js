import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './StockDashboard.css';

class StockDashboard extends Component {
	render() {
		return(
		<div> 
			<div> Stock ticker,Data </div>
			<div> Stock Chart from plotly </div>
			<div> Stock Newsfeed </div>
		</div>
		)
	}
}



export default StockDashboard;