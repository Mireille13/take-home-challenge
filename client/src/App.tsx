import React, {useState, useEffect} from 'react';
//import {useNavigate} from 'react-router-dom';

import './assets/stylesheets/styles.scss'
import '../src/assets/webfonts/Nunito/Nunito-Black.ttf'


//import Home from './components/homeComponent';

const App = () => {
  // const navigate = useNavigate();

  // const navigateToCityEvents = () => {
  //   navigate()
  // }
  const [component, homeComponent] = React.useState(<Home />);
  return(
    <div id='homeComponent'></div>
  );
  //return <p style={{color: 'white'}}>Good Luck!</p>
}

export default App
