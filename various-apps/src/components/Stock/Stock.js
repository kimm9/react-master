import React from 'react';
import classes from './Stock.css'
import StockDashboard from './StockDashboard/StockDashboard'

const stock = ( props ) => {
	const dataObj = props.stockData
	
	//made object list to array THIS IS AN ARRAY
	const transformedStockData = Object.values(props.stockData).map((value) => { 
			return value
	})


	
	

	return(
		<div>
			<StockDashboard valueArr={transformedStockData}/>
			<hr />
			{transformedStockData}
		</div>
	)
}

export default stock;