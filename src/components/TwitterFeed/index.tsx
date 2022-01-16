import React from 'react';
import './TwitterFeed.css';

type FeedProps = {
  // weather: string;
  // brand: string;
}

const TwitterFeed: React.FC<FeedProps> = (props) => {
  return (
    <div className="TwitterFeed">
      <div className="TwitterFeed">12°</div>
      <p>Cloudy</p>
      <p>humidity</p>
      <p>64%</p>
      <p>wind</p>
      <p>12k/m</p>
    </div>
  );
}

export default TwitterFeed;
