import React, { Component } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types';
import classes from './DashboardResult.css';
import Plot from 'react-plotly.js';
import image from '../../assets/images/tech.jpg'

const DashboardResult = (props) => {
    // console.log(props)
    
    // marketBrief={this.state.brief}
    // sector={this.state.sectorPerformance}
    // ipos={this.state.ipo}
    // gainer={this.state.gainers}
    // loser={this.state.losers}
    // news={this.state.news}

    const marketBrief = Object.values(props.marketBrief).map((value) => {
        console.log((value.quote.changePercent * 100).toString().substring(0,4))
        return(
            (value.quote.changePercent < 0) ?<div className="col-sm-3">
            <div className="card cardContent">
              <div className="card-body">
                <div className="row mbh">{value.quote.companyName} - ({value.quote.symbol})</div>
                <div className="row">
                        <div className="mbp">
                            ${value.quote.latestPrice.toString().substring(0,6)}
                        </div>
                    <div className="negative mbp">
                        ({(value.quote.changePercent * 100).toString().substring(0,5)}%)
                    </div>
                    </div>
                </div>
            </div>
          </div> : <div className="col-sm-3">
            <div className="card cardContent">
              <div className="card-body">
              <div className="row mbh">{value.quote.companyName} - ({value.quote.symbol})</div>
              <div className="row">
                        <div className="mbp">
                            ${value.quote.latestPrice.toString().substring(0,6)}
                        </div>
                    <div className="positive mbp">
                        ({(value.quote.changePercent * 100).toString().substring(0,4)}%)
                    </div>
                    </div>
              </div>
            </div>
          </div>
        )
    })



    const sectorPerformance = Object.values(props.sector).map((value)=> {
        return(
            (value.sectPerformance < 0) ? <div className="col-sm-3">
            <div className="card bg-dark text-white cardContent">
            <img src={image} height="100"  className="card-img" alt="..."></img>
              <div className="card-img-overlay">
                <h5 className="card-title mbh">{value.sectName}</h5>
                <p className="card-text negative">{(value.sectPerformance * 100).toString().substring(0,4)}</p>
              </div>
            </div>
          </div> : <div className="col-sm-3">
            <div className="card bg-dark text-white cardContent">
            <img src={image} height="100" className="card-img" alt="..."></img>
              <div className="card-img-overlay">
                <h5 className="card-title mbh">{value.sectName}</h5>
                <p className="card-text positive">{(value.sectPerformance * 100).toString().substring(0,4)}</p>
              </div>
            </div>
          </div>
        )
    })
    const upIpos = Object.values(props.upcomingIpo).map((value)=> {
        return(
            
                <tr>
                    <th scope="row">{value.key + 1}</th>
                    <td>{value.symbol}</td>
                    <td>{value.company}</td>
                    <td>{value.expected}</td>
                    <td>{value.price}</td>
                    <td>{value.shares}</td>
                    <td>{value.amount}</td>
                    <td>{value.float}</td>
                    <td>{value.floatPercent}</td>
                    <td>{value.market}</td>
                </tr>
        )
    })
    const gainers = Object.values(props.gainer).map((value)=> {
        return(               
                <tr>
                    <td>{value.symbol} <small>{value.company}</small></td>
                    <td>{value.change}</td>
                    <td>{value.latestPrice}</td>
                </tr>
            
        )
    })
    const losers = Object.values(props.loser).map((value)=> {
        return(               
                <tr>
                    <td>{value.symbol} <small>{value.company}</small></td>
                    <td>{value.change}</td>
                    <td>{value.latestPrice}</td>
                </tr>
            
        )
    })
    const news = Object.values(props.news).map((value)=> {
        return(               
            <div class="media">
            <img src={value.image} class="mr-3" width="70" height="60" alt="..."/>
            <div class="media-body">
              <h5 class="mt-0">{value.headline}</h5>
              <p>{value.summary}</p>
              <p>{value.datetime}</p>
            </div>
          </div>
            
        )
    })
    console.log(props)

    // const upIpos = Object.values(props.upcomingIpo).map( (value) => {
    //     return(
    //         <div>{value.Company}</div>
    //     )
    // })

    // const upcomingIpo = Object.values(props.upcomingIpo).map((value, index) => {
    //     return(
    //         value
    //     )
    // })

    

    

    // const upcomingIpo = Object.values(props.ipos.upcoming.rawData).map((value, index) => {
    //     return(
    //         <tr>
        //         <th scope="row">{value.index}</th>
        //         <td>{value.Symbol}</td>
        //         <td>{value.Company}</td>
        //         <td>{value.Price}</td>
        //         <td>{value.Shares}</td>
        //         <td>{value.Amount}</td>
        //         <td>{value.Percent}</td>
    //         </tr>
    //     )
    // })


    return(
        <div>
            <div className="container">
            <h6 className="dashhead3">MARKET VIEW</h6>
            <h4 className="dashhead1">Today's Market Dashboard</h4>
            <div className="row content">
                <div className="card-group">
                    {marketBrief}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h4 className="dashhead2">Sector Performance</h4>
                    <div className="card-group content">
                    {sectorPerformance}
                </div>
                </div>
            </div>
            <div className="row">
            <div className="container">
                <div className="col">
                    <h4>IPO Calendar</h4>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Symbol</th>
                            <th scope="col">Company</th>
                            <th scope="col">Expected</th>
                            <th scope="col">Price</th>
                            <th scope="col">Shares</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Float</th>
                            <th scope="col">% of Float</th>
                            <th scope="col">Market</th>
                            </tr>
                        </thead>
                        <tbody>
                            {upIpos}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <h4>Gainers</h4>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Symbol</th>
                            <th scope="col">Change</th>
                            <th scope="col">Last Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gainers}
                        </tbody>
                    </table>
                </div>
                <div className="col-6">
                    <h4>Losers</h4>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Symbol</th>
                            <th scope="col">Change</th>
                            <th scope="col">Last Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {losers}
                        </tbody>
                    </table>
                </div>
            </div>
                    
            <div className="row">
                <h4>Top News</h4>
                {news}
            </div>
        </div>
    </div>
    )
}


export default DashboardResult