import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import StockFinder from './containers//StockFinder/StockFinder'


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <StockFinder />
        </Layout>
      </div>
    );
  }
}

export default App;
