import './App.css';

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {

  render() {
    return (
      <div>       
        <NavBar/>
        <News pageSize={20} country="in" category="general"/>
       
      </div>
    )
  }
}



