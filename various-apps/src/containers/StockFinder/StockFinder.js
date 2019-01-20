import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import axios from 'axios'
import Stock from '../../components/Stock/Stock'

class StockFinder extends Component {

	state = {
		allstockdata: '',
		stockData: {
			name: '',
			ticker: '',
			price: '',
			high: '',
			low: '',
			primaryExchange: '',
			sector: ''
		},
		chartData: {
			date: '',
			close: '',
			high: '',
			low: '',
			open: ''
		},
		data: '',
		layout: '',
		articles: ''


	}

	componentDidMount() {
		axios.all([
			axios.get('https://newsapi.org/v2/everything?' +
	          'q=Apple&' +
	          'from=2019-01-19&' +
	          'sortBy=popularity&' +
	          'apiKey=f028c8dd8e3047f6922cb14e33f32efa'),
			axios.get('https://api.iextrading.com/1.0/stock/aapl/batch?types=quote,news,chart&range=1m&last=1')
			]).then(axios.spread((articles, stockdata) => {
				const addfive = (x1) => {
				return x1 + 5
				}
				const subfive = (x1) => {
					return x1 - 5
				}
				//set state for stock data
				console.log(articles.data.articles)
				const trace1 = {
					type: "scatter",
			  		mode: "lines",
			  		name: 'Stock High',
			  		x: stockdata.data.chart.map(value => {
							return value.date
						}),
			  		y: stockdata.data.chart.map(value => {
							return value.high
						}),
			  		line: {color: 'green'}
				}
				const trace2 = {
					  type: "scatter",
					  mode: "lines",
					  name: 'Stock Low',
					  x: stockdata.data.chart.map(value => {
							return value.date
						}),
					  y: stockdata.data.chart.map(value => {
							return value.low
						}),
					  line: {color: 'red'}
				}
				console.log(stockdata.data, articles.data)
				this.setState({
					articles: articles.data.articles,
					stockData: {
					name: stockdata.data.quote.companyName,
					ticker: stockdata.data.quote.symbol,
					price: stockdata.data.quote.latestPrice,
					high: stockdata.data.quote.high,
					low: stockdata.data.quote.low,
					primaryExchange: stockdata.data.quote.primaryExchange,
					sector: stockdata.data.quote.sector
				},
				allstockdata: stockdata.data,
				chartData: {
					date: stockdata.data.chart.map(value => {
						return value.date
					}),
					close: stockdata.data.chart.map(value => {
						return value.close
					}),
					high: stockdata.data.chart.map(value => {
						return value.high
					}),
					low: stockdata.data.chart.map(value => {
						return value.low
					}),
					open: stockdata.data.chart.map(value => {
						return value.open
					})
				},
				data: [trace1, trace2],
				layout:  {
					title: 'Stock Time Series Chart',
					xaxis: {
						    autorange: true,
						    range: [trace1.x[0], trace1.x[trace1.x.length - 1]],
						    rangeselector: {buttons: [
						        {
						          count: 7,
						          label: '7d',
						          step: 'day',
						          stepmode: 'backward'
						        },
						        {
						          count: 14,
						          label: '14d',
						          step: 'day',
						          stepmode: 'backward'
						        },
						        {step: 'all'}
						      ]},
						    rangeslider: {range: [trace1.x[0], trace1.x[trace1.x.length-1]]},
						    type: 'date'
						  },
						  yaxis: {
						    autorange: true,
						    range: [subfive(trace2.y[0]), addfive(trace1.x[trace1.x.length-1])],
						    type: 'linear'
						  }
					}
				},
				)
			}))

	} //end of componentdidmount

	componentDidUpdate() {

	}

	
	render() {
		return (
			<Aux>
				<Stock stockData={this.state.stockData} data={this.state.data} layout={this.state.layout} articles={this.state.articles}/>
				<div>Searchbox, and maybe filters</div>
			</Aux>
		)
	}
}

export default StockFinder;