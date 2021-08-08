/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import HomePage from './pages/HomePage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          Hi from App
        </div>
      </Router>

    );
  }
}

export default App;
