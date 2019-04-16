import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Dashboard.css';
import axios from 'axios'
import Plot from 'react-plotly.js';
import DashboardResult from '../DashboardResult/DashboardResult'

class Dashboard extends Component {

    state = {
        brief: '',
        briefCards: '',
        sectorPerformance: '',
        ipo: '',
        gainers: '',
        losers: '',
        news: ''
    }

    componentDidMount() {
        const allSector=[];
        const allUpIpos=[];
		axios.all([
            axios.get('https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,wmt,bac,baba,f,googl,vz&types=quote,news,chart&range=1m&last=5'),
            axios.get('https://api.iextrading.com/1.0/stock/market/sector-performance'),
            axios.get('https://api.iextrading.com/1.0/stock/market/upcoming-ipos'),
            axios.get('https://api.iextrading.com/1.0/stock/market/today-ipos'),
            axios.get('https://api.iextrading.com/1.0/stock/market/list/gainers'),
            axios.get('https://api.iextrading.com/1.0/stock/market/list/losers'),
            axios.get('https://api.iextrading.com/1.0/stock/market/news/last/10'),                        
		]).then(axios.spread((comps, sector, upIpo, todayIpo, gainer, loser, news) => {
            sector.data.map((sect, index) => {
                allSector.push({
                    key: index,
                    sectName: sect.name,
                    sectPerformance: sect.performance,
                    sectDate: sect.lastUpdated
                })
            })//end of data map
            console.log(upIpo.data["rawData"])
            upIpo.data["viewData"].map((ipo, index) => {
                allUpIpos.push({
                    key: index,
                    company: ipo.Company,
                    market: ipo.Market,
                    symbol: ipo.Symbol,
                    price: ipo.Price,
                    shares: ipo.Shares,
                    amount: ipo.Amount,
                    floatPercent: ipo.Percent,
                    expected: ipo.Expected,
                    float: ipo.Float,
                })
            })
            console.log(allUpIpos)
				this.setState({
                    brief: comps.data,
                    sectorPerformance: allSector,
                    ipo: allUpIpos,
                    today: todayIpo.data,
                    gainers: gainer.data,
                    losers: loser.data,
                    news: news.data
				})
		}))
    }

    componentDidUpdate() {

    }

    render() {
        //market briefing card
        
        return (
            <div>
                <div className="container">
                            <DashboardResult 
                            marketBrief={this.state.brief}
                            sector={this.state.sectorPerformance}
                            upcomingIpo={this.state.ipo}
                            gainer={this.state.gainers}
                            loser={this.state.losers}
                            news={this.state.news}
                            />
                </div> 
            </div>
        )
    }
}

export default Dashboard;