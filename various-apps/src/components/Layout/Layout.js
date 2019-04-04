import React from 'react';
import Aux from '../../hoc/Aux'
import classes from './Layout.css'

const layout = ( props ) => (
	<Aux> 
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		  <a className="navbar-brand" href="/">Stock Finder</a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarNav">
		    <ul className="navbar-nav">
		      <li className="nav-item active">
		        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
		      </li>
		      <li className="nav-item active">
		        <a className="nav-link" href="/">Search<span className="sr-only">(current)</span></a>
		      </li>
					<li className="nav-item active">
		        <a className="nav-link" href="/">Dashboard<span className="sr-only">(current)</span></a>
		      </li>
		    </ul>
		  </div>
		</nav>
		<main className={classes.Content}>
			{props.children}
		</main>

	</Aux>
)

export default layout;