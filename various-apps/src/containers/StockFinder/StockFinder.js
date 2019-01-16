import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import axios from 'axios'
import Stock from '../../components/Stock/Stock'

class StockFinder extends Component {

	state = {
		stockData: {
			name: '',
			ticker: '',
			price: '',
			high: '',
			low: '',
		}
	}

	componentDidMount() {
		axios.get('https://api.iextrading.com/1.0/stock/aapl/batch?types=quote,news,chart&range=1m&last=1').then(response => {
				this.setState({stockData: response.data.quote})
				console.log(this.state.stockData)

		})
	}
	
	render() {
		return (
			<Aux>
				<Stock stockData={this.state.stockData}/>
				<div>Searchbox, and maybe filters</div>
			</Aux>
		)
	}
}

export default StockFinder;