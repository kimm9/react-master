import React from 'react';
import classes from './Stock.css'
import StockDashboard from './StockDashboard/StockDashboard'

const stock = ( props ) => {
	const dataObj = props.stockData
	
	const transformedStockData = Object.values(props.stockData).map((value) => { 
			console.log(value)
			return <div>{value}</div>

	})
	

	return(
		<div>
			<StockDashboard transformedStockData={transformedStockData}/>
			<hr />
			{transformedStockData}
		</div>
	)
}

export default stock;