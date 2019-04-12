import React, { Component } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types';
import classes from './DashboardResult.css';
import Plot from 'react-plotly.js';

const DashboardResult = (props) => {
    console.log(props)
    // const marketData = Object.values(this.state.brief).map((value) => {
    //     if(value.quote.changePercent < 0) {
    //         return <div className="card">
    //         <div className="card-body">
    //             <h7 className="card-title">{value.quote.companyName} - ({value.quote.symbol})</h7>
    //             <p className="card-text">{value.quote.latestPrice}</p>
    //             <p  className="card-text">{value.quote.changePercent * 100}</p>
    //             <p className="card-text"><small className="text-muted"></small></p>
    //         </div>
    //     </div>
    //     } else {
    //         return	<div className="card">
    //         <div className="card-body">
    //             <h7 className="card-title">{value.quote.companyName} - ({value.quote.symbol})</h7>
    //             <p className="card-text">{value.quote.latestPrice}</p>
    //             <p className="card-text">{value.quote.changePercent * 100}</p>
    //             <p className="card-text"><small className="text-muted"></small></p>
    //         </div>
    //     </div>
    //     }
    // })


    return(
        <div>
            <div className="row">
                <div>
                    <h4>Sector Performance</h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h4>IPO Calendar</h4>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <h4>Gainers</h4>
                </div>
                <div className="col-6">
                    <h4>Losers</h4>
                </div>
            </div>
                    
            <div className="row">
                <h4>Top News</h4>
            </div>
        </div>
    )
}


export default DashboardResult