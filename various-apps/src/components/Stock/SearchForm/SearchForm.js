import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './SearchForm.css';

const SearchForm = (props) => {
	console.log(props.allSymbol)
    return (
        <div>
        <form onSubmit={props.submit}>
			<div className="input-group input-group-lg">
				<input 
					type="text" 
					className="form-control" 
					aria-label="Sizing example input" 
					aria-describedby="inputGroup-sizing-lg" 
					onChange={props.inputchange}
					list="stocks"
					id="stock" />
				{/* <datalist id="stocks">
					{props.allSymbol.map(symbol=> <option value={symbol.nameSymbol} key={symbol.key} />)}
				</datalist> */}
				<button
					type="submit"
					className="btn btn-success"
                    >
					Search
				</button>
			</div>
		</form> 
        </div>
    )
}

export default SearchForm