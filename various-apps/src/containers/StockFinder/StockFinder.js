import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import axios from 'axios'
import Input from '../../components/Input/Input'
import Stock from '../../components/Stock/Stock'
import stock from '../../components/Stock/Stock';

class StockFinder extends Component {

	state = {
		allstockdata: '',
		search: '',
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
		const stockNameArr=[];
		axios.get('https://api.iextrading.com/1.0/ref-data/symbols').then(res => {
			res.data.map((sym, index) => {
				stockNameArr.push({
						key: index,
						stockName: sym.name,
						stockSymbol: sym.symbol,
						nameSymbol: sym.name + " (" + sym.symbol + ")"
				})
			})
			this.setState({
				symName: stockNameArr
			})
		}) // end of .then

		// axios.all([
		// 	axios.get('https://newsapi.org/v2/everything?' +
	  //         'q=Apple&' +
	  //         'from=2019-03-19&' +
	  //         'sortBy=popularity&' +
	  //         'apiKey=f028c8dd8e3047f6922cb14e33f32efa'),
		// 	axios.get('https://api.iextrading.com/1.0/stock/aapl/batch?types=quote,news,chart&range=1m&last=1')
		// 	]).then(axios.spread((articles, stockdata) => {
		// 		const addfive = (x1) => {
		// 		return x1 + 5
		// 		}
		// 		const subfive = (x1) => {
		// 			return x1 - 5
		// 		}
		// 		//set state for stock data

		// 		const trace1 = {
		// 			type: "scatter",
		// 	  		mode: "lines",
		// 	  		name: 'Stock High',
		// 	  		x: stockdata.data.chart.map(value => {
		// 					return value.date
		// 				}),
		// 	  		y: stockdata.data.chart.map(value => {
		// 					return value.high
		// 				}),
		// 	  		line: {color: 'green'}
		// 		}
		// 		const trace2 = {
		// 			  type: "scatter",
		// 			  mode: "lines",
		// 			  name: 'Stock Low',
		// 			  x: stockdata.data.chart.map(value => {
		// 					return value.date
		// 				}),
		// 			  y: stockdata.data.chart.map(value => {
		// 					return value.low
		// 				}),
		// 			  line: {color: 'red'}
		// 		}
		// 		//console.log(stockdata.data, articles.data)

		// 		// move all the 
		// 		this.setState({
		// 			articles: articles.data.articles,
		// 			stockData: {
		// 			name: stockdata.data.quote.companyName,
		// 			ticker: stockdata.data.quote.symbol,
		// 			price: stockdata.data.quote.latestPrice,
		// 			high: stockdata.data.quote.high,
		// 			low: stockdata.data.quote.low,
		// 			primaryExchange: stockdata.data.quote.primaryExchange,
		// 			sector: stockdata.data.quote.sector
		// 		},
		// 		allstockdata: stockdata.data,
		// 		chartData: {
		// 			date: stockdata.data.chart.map(value => {
		// 				return value.date
		// 			}),
		// 			close: stockdata.data.chart.map(value => {
		// 				return value.close
		// 			}),
		// 			high: stockdata.data.chart.map(value => {
		// 				return value.high
		// 			}),
		// 			low: stockdata.data.chart.map(value => {
		// 				return value.low
		// 			}),
		// 			open: stockdata.data.chart.map(value => {
		// 				return value.open
		// 			})
		// 		},
		// 		data: [trace1, trace2],
		// 		layout:  {
		// 			title: 'Stock Time Series Chart',
		// 			xaxis: {
		// 				    autorange: true,
		// 				    range: [trace1.x[0], trace1.x[trace1.x.length - 1]],
		// 				    rangeselector: {buttons: [
		// 				        {
		// 				          count: 7,
		// 				          label: '7d',
		// 				          step: 'day',
		// 				          stepmode: 'backward'
		// 				        },
		// 				        {
		// 				          count: 14,
		// 				          label: '14d',
		// 				          step: 'day',
		// 				          stepmode: 'backward'
		// 				        },
		// 				        {step: 'all'}
		// 				      ]},
		// 				    rangeslider: {range: [trace1.x[0], trace1.x[trace1.x.length-1]]},
		// 				    type: 'date'
		// 				  },
		// 				  yaxis: {
		// 				    autorange: true,
		// 				    range: [subfive(trace2.y[0]), addfive(trace1.x[trace1.x.length-1])],
		// 				    type: 'linear'
		// 				  }
		// 			},
				
		// 		},
		// 		)
		// 	}))

	} //end of componentdidmount

	//input changed handler for stock suggestion, able to differentiate stock and ticker
  handleInputChange = event => {
		this.state.symName.map(sym => {
			if(event.target.value === sym.nameSymbol) {
				this.setState({
					search: sym
				})
			}
		})
  };
	handleStockSubmit = event => {
		//get today's date for articles
		const today = new Date();
		const dd = String(today.getDate()).padStart(2, '0');
		const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		const yyyy = today.getFullYear()

		const fulldate = yyyy + '-' + mm + '-' + dd;
		console.log('https://newsapi.org/v2/everything?q=' + this.state.search.stockName + '&from=' + fulldate + '&sortBy=popularity&apiKey=f028c8dd8e3047f6922cb14e33f32efa')
		axios.all([
			axios.get('https://newsapi.org/v2/everything?q=' + this.state.search.stockName + '&from=' + fulldate + '&sortBy=popularity&apiKey=f028c8dd8e3047f6922cb14e33f32efa'),
		axios.get('https://api.iextrading.com/1.0/stock/' + this.state.search.stockSymbol + '/batch?types=quote,news,chart&range=1m&last=1')
		]).then(axios.spread((articles, stockdata) => {
			console.log(articles, stockdata)
			const addfive = (x1) => {
				return x1 + 5
				}
				const subfive = (x1) => {
					return x1 - 5
				}
				//set state for stock data

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
					},
				
				},
				)
		})) // end of axios all
		
		event.preventDefault();
		//console.log(this.state.search)
		// this.state.symbolName.map(sym => {
		// 	if(this.state.search == sym.nameSymbol) {
		// 		this.setState({
		// 			searchForm: {
		// 				symbol: sym.symbolName,
		// 				name: sym.stockName
		// 			}
		// 		})
		// 	}
		// })
	}

	componentDidUpdate() {
		console.log(this.state.search)
	}

	
	render() {
		return (
			<Aux>
				<div className="container">
				<form onSubmit={this.handleStockSubmit}>
				<div className="input-group input-group-lg">
					<input 
					type="text" 
					className="form-control" 
					aria-label="Sizing example input" 
					aria-describedby="inputGroup-sizing-lg" 
					onChange={this.handleInputChange}
					list="stocks"
					id="stock" />
					<datalist id="stocks">
						{this.state.symName.map(symbol=> <option value={symbol.nameSymbol} key={symbol.key} />)}
					</datalist>
					<button
						type="submit"
						onClick={this.state.handleStockSubmit}
						className="btn btn-success"
					>
						Search
					</button>
				</div>
				</form>
				<Stock stockData={this.state.stockData} data={this.state.data} layout={this.state.layout} articles={this.state.articles}/>
				</div>
			</Aux>
		)
	}
}

export default StockFinder;