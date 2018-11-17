import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import SearchBar from './components/SearchBar.js';
import ResultsTable from './components/ResultsTable.js';
import Maps from './components/Maps.js';

class App extends Component {
  render() {
    return (
        <div className='App-header'>
          <h1>Smart Evac!</h1>
          <SearchBar />
          <ResultsTable />
          <Maps />
        </div>
    );
  }
}

export default App;
