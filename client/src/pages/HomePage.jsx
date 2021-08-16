/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import Test from '../components/Test.tsx';
import NavBar from '../components/NavBar';
import theme from '../theme';

export default function HomePage(props) {
  return (
    <div>
      <NavBar theme={theme} />
      Home Page
      <Test />
    </div>
  );
}
