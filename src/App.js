import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar.js';
import ResultsTable from './components/ResultsTable.js';
import Maps from './components/Maps.js';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h1 className='mainTitle'>SmartVac!</h1>
          <SearchBar />
          <ResultsTable />
          <Maps />

        </div>
      </div>
    );
  }
}

export default App;
