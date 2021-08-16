/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Container, Menu, MenuItem, Button,
} from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import HomePage from './pages/HomePage';
import Message from './components/Test.tsx';

export default function App() {
  const [openMenu, setOpenMenu] = useState(() => {});
  const HandleMenu = () => {
    setOpenMenu(true);
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };
  return (
    <Router>
      <Container>
        <Button onClick={HandleMenu}> Open Menu </Button>
        <Menu open={openMenu} onClose={closeMenu}>
          <MenuItem onClick={closeMenu}>
            <Link to="/home"> Home </Link>
          </MenuItem>
          <MenuItem onClick={closeMenu}> About </MenuItem>
        </Menu>

        <Route exact path="/home">
          <HomePage />
        </Route>
      </Container>
    </Router>

  );
}
