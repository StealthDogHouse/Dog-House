import React, {useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import HomePage from './pages/HomePage'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
    <div>
      Hi from App
    </div>
    );
  }

}

export default App;