//to have access to React library and hooks
import React, {useState, useEffect} from 'react';
//to enable dynamic routing in app
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './assets/stylesheets/styles.scss'
import '../src/assets/webfonts/Nunito/Nunito-Black.ttf'


import Home from './components/homeComponent';
//create eventsComponent and import as Events

const App = () => {
  return(
    <Router>
      <div>
       <Home />
      </div>
   </Router>
   );
  //return <p style={{color: 'white'}}>Good Luck!</p>
}

export default App
