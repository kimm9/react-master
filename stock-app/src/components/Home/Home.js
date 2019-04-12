import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Home.css';
import Plot from 'react-plotly.js';


const Home = (props) => {
    
    return (
        <div>
            {/* jumbotron */}
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                <h1 className="display-4">Stock App</h1>
                <p className="lead">This is an app that provides real time stock data</p>
                <hr className="my-4" />
                <p>It user IEX trading API</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </div>
            </div>
            {/* Bunch of cards */}
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div class="jumbotron">
                            <h1 class="display-4">Hello, world!</h1>
                            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr class="my-4"/>
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div class="jumbotron">
                            <h1 class="display-4">Hello, world!</h1>
                            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr class="my-4"/>
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="jumbotron">
                            <h1 class="display-4">Hello, world!</h1>
                            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr class="my-4"/>
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;