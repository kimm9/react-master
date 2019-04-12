import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Result.css';
import Plot from 'react-plotly.js';

const Result = (props) => {
    console.log(props.allstockdata)
    let preciseP = "";
    if(props.isData === true) {
        if(props.allstockdata.quote.changePercent < 0) {
            preciseP = (props.allstockdata.quote.changePercent * 100).toString().substring(0,5)
        } else {
            preciseP = (props.allstockdata.quote.changePercent * 100).toString().substring(0,4);
        }
    }
    
    // user Media object in Boot
    const articleData = Object.values(props.articles).map(value => {
		return  <div>
                    <div className="media">
                        <img src={value.urlToImage} className="d-flex align-self-center mr-3" alt="..." width="70" height="80" />
                        <div className="media-body">
                            <h5 className="mt-0">{value.title} <small>by {value.author}</small> </h5>
                            <p>{value.description}</p>
                            <p className="mb-0">Published at {value.publishedAt.substring(0,10)} <a href={value.url} className="btn btn-primary">Read Full Article</a></p>
                        </div>
                    </div>
				</div>
	})
    
    return(
        <div> 
            { props.isData === true ? <div className="container">
				<div className="row">
                    <div className="col">
                        <h5>{props.allstockdata.quote.companyName} ({props.allstockdata.quote.symbol})</h5>
                        <div>
                        <h2>{props.allstockdata.quote.iexRealtimePrice}</h2><p>{props.allstockdata.quote.change}({preciseP}%)</p>
                        </div>
                    </div>
				</div>
				<div className="row">
                    <div >
					<Plot
					    data={props.data}
                        layout={props.layout}
                        />
                    </div>
				</div>
                <div className="row">
                    <div className="col-6">
                        <h3>Profile</h3>
                        <div>
                            <p>EXCHANGE</p>
                            <p><stong>{props.allstockdata.quote.exchange}</stong></p>
                            <p>SECTOR</p>
                            <p><stong>{props.allstockdata.quote.sector}</stong></p>
                            <p>WEBSITE</p>
                            <a href={props.allstockdata.company.website}><stong>{props.allstockdata.company.website}</stong></a>
                            <p>CEO</p>
                            <p><stong>{props.allstockdata.company.CEO}</stong></p>
                            <p>INDUSTRY</p>
                            <p><stong>{props.allstockdata.company.industry}</stong></p>
                        </div>
                    </div>
                    <div className="col-6">
                            <div>
                                <p>VOLUME</p>
                                <p><stong>{props.allstockdata.quote.latestVolume}</stong></p>
                                <p>OPEN - CLOSE</p>
                                <p><stong>{props.allstockdata.quote.open} - {props.allstockdata.quote.close}</stong></p>
                                <p>AVERAGE TOTAL VOLUME</p>
                                <p><stong>{props.allstockdata.quote.avgTotalVolume}</stong></p>
                                <p>LOW - HIGH</p>
                                <p><stong>{props.allstockdata.quote.low} - {props.allstockdata.quote.high}</stong></p>
                                <p>52 WEEK RANGE</p>
                                <p><stong>{props.allstockdata.quote.week52Low} - {props.allstockdata.quote.week52High}</stong></p>
                                <p>P/E RATIO</p>
                                <p><stong>{props.allstockdata.company.peRatio}</stong></p>
                        </div>
                    </div>
				</div>
				<div className="row">
                        {articleData}
				</div>
            </div> : null }
        </div>
    )
}

export default Result;