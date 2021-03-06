import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import axios from 'axios'
import Stock from '../../components/Stock/Stock'


class StockFinder extends Component {

	state = {
		date:'',
		allstockdata: '',
		search: '',
		brief: '',
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
		articles: '',
		symName: []
	}

	componentDidMount() {
		const today = new Date();
		const dd = String(today.getDate()).padStart(2, '0');
		const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		const yyyy = today.getFullYear()
		const fulldate = yyyy + '-' + mm + '-' + dd;
		const stockNameArr=[];
		axios.all([
			axios.get('https://api.iextrading.com/1.0/ref-data/symbols'),
			axios.get('https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,wmt,bac,baba,f,googl,vz&types=quote,news,chart&range=1m&last=5')
		]).then(axios.spread((symbols, comps) => {
			symbols.data.map( (sym, index) => {
				stockNameArr.push({
						key: index,
						stockName: sym.name,
						stockSymbol: sym.symbol,
						nameSymbol: sym.name + " (" + sym.symbol + ")"
				})
			})//end of data map
			console.log(comps)
				this.setState({
					symName: stockNameArr,
					brief: comps.data
				})
		}))
		this.setState({
			date: fulldate
		})
	} //end of componentdidmount

	//input changed handler for stock suggestion, able to differentiate stock and ticker
  handleInputChange = event => {
		this.state.symName.map(sym => {
			if(event.target.value === sym.nameSymbol || event.target.value.toUpperCase() === sym.stockName.toUpperCase() || event.target.value.toUpperCase() === sym.stockSymbol.toUpperCase() ) {
				this.setState({
					search: sym
				})
			}
		})
  };
	handleStockSubmit = event => {

		axios.all([
			axios.get('https://newsapi.org/v2/everything?q=' + this.state.search.stockName + '&from=' + this.state.date + '&sortBy=popularity&apiKey=f028c8dd8e3047f6922cb14e33f32efa'),
		axios.get('https://api.iextrading.com/1.0/stock/' + this.state.search.stockSymbol + '/batch?types=quote,news,chart&range=1m&last=1')
		]).then(axios.spread( (articles, stockdata) => {
			console.log(articles, stockdata)
				//for plotly
				const addfive = (x1) => {
				return x1 + 5
				}
				const subfive = (x1) => {
					return x1 - 5
				}
				// for plotly
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
				//console.log(stockdata.data, articles.data)

				// move all the 
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
						          label: '7D',
						          step: 'day',
						          stepmode: 'backward'
						        },
						        {
						          count: 14,
						          label: '14D',
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
					},
				
				},
				)
		})) // end of axios all
		
		event.preventDefault();
	}

	componentDidUpdate() {
		console.log(this.state.articles)
	}

	
	render() {
		return (
			<Aux>
				<div className="container">
				<Stock 
					stockData={this.state.stockData} 
					data={this.state.data} 
					layout={this.state.layout} 
					articles={this.state.articles}
					marketData={this.state.brief} 
					stockSubmit={this.handleStockSubmit} 
					inputChange={this.handleInputChange}
					symbols={this.state.symName}/>
				</div>
			</Aux>
		)
	}
}

export default StockFinder;