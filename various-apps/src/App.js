import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import StockFinder from './containers//StockFinder/StockFinder'


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <StockFinder />
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
