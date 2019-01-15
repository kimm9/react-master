import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Stock from '../../components/Stock/Stock'

class StockFinder extends Component {

	state = {
		stockData: {
			name: 'Apple',
			ticker: 'AAPL',
			open: 3,
			high: 10,
			low: 1,
			close:6
		}

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