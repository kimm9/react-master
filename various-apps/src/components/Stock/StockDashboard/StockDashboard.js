import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './StockDashboard.css';
import Plot from 'react-plotly.js';

const StockDashboard = (props) => {
	console.log(props.marketData)
	const marketData = Object.values(props.marketData).map((value) => {
		if(value.quote.changePercent < 0) {
			return	<div className="card">
				<div className="card-body">
					<h5 className="card-title">{value.quote.companyName} - ({value.quote.symbol})</h5>
					<p className="card-text">{value.quote.latestPrice}</p>
					<p className="card-text">{value.quote.changePercent}</p>
					<p className="card-text"><small className="text-muted"></small></p>
				</div>
			</div>
		} else {
			return	<div className="card">
			<div className="card-body">
				<h5 className="card-title">{value.quote.companyName} - ({value.quote.symbol})</h5>
				<p className="card-text">{value.quote.latestPrice}</p>
				<p className="card-text">{value.quote.changePercent}</p>
				<p className="card-text"><small className="text-muted"></small></p>
			</div>
		</div>
		}
	})
	
	
	return(
		<div>
			<div className="container">
				<div className="row">
					<div className="card-group">
						{marketData}
					</div>
				</div>
			</div> 
		</div>
	)
}




export default StockDashboard;