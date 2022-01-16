import React from 'react';
import './Container.css';
import { Header } from '../Header/index';
import { WeatherContainer } from '../WeatherWidget/index';

function Container() {
  return (
    <div className="Container">
      <Header />
      <WeatherContainer />
    </div>
  );
}

export default Container;
