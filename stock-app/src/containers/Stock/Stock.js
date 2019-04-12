import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios'
import Dashboard from '../../components/Dashboard/Dashboard';
import Home from '../../components/Home/Home';
import Search from '../../components/Search/Search';
import Result from '../../components/Result/Result';

class Stock extends Component {
	render() {
		return (
            <div>
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
                                <a className="nav-link" href="/search">Search<span className="sr-only">(current)</span></a>
                            </li>
                                    <li className="nav-item active">
                                <a className="nav-link" href="/dashboard">Dashboard<span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
				
                <Route path="/" exact component={Home} />
                <Route path="/search" exact component={Search} />
                <Route path="/dashboard" exact component={Dashboard} />

                <footer className="navbar navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                </footer>
            </div>
		)
	}
}

export default Stock;