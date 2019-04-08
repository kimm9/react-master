import React from 'react';
import classes from './Stock.css'
import StockDashboard from './StockDashboard/StockDashboard'
import SearchResult from './SearchResult/SearchResult'
import SearchForm from './SearchForm/SearchForm'; 

const stock = ( props ) => {
	const dataObj = props.stockData
	
	
	//made object list to array THIS IS AN ARRAY
	const transformedStockData = Object.values(props.stockData).map((value) => { 
			return value
	})
	//console.log(dataObj)

	// const transformedChartData = Object.values(props.chartData).map((value) => {
	// 	return value
	// })



	//helper method to get unpack the data from array of object

	// const trace1 = {
	// 	  type: "scatter",
	// 	  mode: "lines",
	// 	  name: 'Stock High',
	// 	  x: Object.values(props.chartData)[0],
	// 	  y: Object.values(props.chartData)[2],
	// 	  line: {color: 'green'}
	// 	}

	// const trace2 = {
	// 	  type: "scatter",
	// 	  mode: "lines",
	// 	  name: 'Stock Low',
	// 	  x: Object.values(props.chartData)[0],
	// 	  y: Object.values(props.chartData)[3],
	// 	  line: {color: 'red'}
	// 	}


	// const data = [trace1,trace2]

	

	
	

	return(
		<div>
			<div className="row">
			
			</div>
			<StockDashboard marketData={props.marketData}
			/>
			<SearchForm 
			submit={props.stockSubmit}
			inputchange={props.inputChange}
			allSymbol={props.symbols}
			/>
			<SearchResult valueArr={transformedStockData}
			data={props.data} layout={props.layout} articles={props.articles}/>
			<hr />
			{transformedStockData}
		</div>
	)
}

export default stock;