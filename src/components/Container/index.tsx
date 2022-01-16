import React from 'react';
import './Container.css';
import { Header } from '../Header/index';
import TwitterFeed from '../TwitterFeed/index';

function Container() {
  return (
    <div className="Container">
      <Header />
      <TwitterFeed />
    </div>
  );
}

export default Container;
