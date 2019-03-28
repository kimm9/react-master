import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './StockDashboard.css';
import Plot from 'react-plotly.js';

const StockDashboard = (props) => {
	const articleData = Object.values(props.articles).map(value => {
		return  <div>
					<div className="card mb-2">
					  <picture>
					  <img src={value.urlToImage} className="card-img-top img-thumbnail" alt="Responsive image" />
					  </picture>
					  <div className="card-body">
					    <h4 className="card-title">{value.title} </h4>
					    <h6><small>by {value.author}</small></h6>
					    <p className="card-text">{value.description}</p>
					    <a href={value.url} class="btn btn-primary">Read Full Article</a>
					  </div>
					  <div class="card-footer text-muted">
						    Published at {value.publishedAt.substring(0,10)}
					  </div>
					</div>
					<br></br>
				</div>
	})
	//console.log(props.articles)

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