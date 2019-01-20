import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './StockDashboard.css';
import Plot from 'react-plotly.js';

const StockDashboard = (props) => {
	const articleData = Object.values(props.articles).map(value => {
		return <div>value.author</div>
	})
	console.log(Object.values(props.articles).map(value => {
		return value.author
	}))
	//next thing to do here is to find a way to make it return it as a <div> since it returns as 'value.author'

	return(
		<div>
			<div className="container">
				<div className="row">
				<ul>
					
					<li> Stock Name (Ticker): {props.valueArr[0]} ({props.valueArr[1]})
					</li><br/>
					<li> Stock Price: {props.valueArr[2]}
					</li><br/>
					<li> Stock Price High/Low: {props.valueArr[3]} / {props.valueArr[4]}
					</li><br/>
					<li> Stock Primary Exchange: {props.valueArr[5]} 
					</li><br/>
					<li> Stock Sector: {props.valueArr[6]}
					</li><br/>
				</ul>
				</div>
				<div className="row">
					<Plot
					    data={props.data}
					     layout={props.layout}
					 />
				</div>
				<div className="row">
					{articleData}
				</div>
			</div> 
		</div>
	)
}




export default StockDashboard;