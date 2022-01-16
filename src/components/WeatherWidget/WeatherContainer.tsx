import React from 'react';
import './WeatherContainer.sass';
import Widget from './Widget';

// type WidgetProps = {
//   weather: string;
//   brand: string;
// }

const WeatherContainer = () => {
  return (
    <div className="weathercontainer">
      <Widget day='MON' degree='9°' weather='RAINING' />
      <Widget day='TUE' degree='19°' weather='SUNNY' />
      <Widget day='WED' degree='15°' weather='CLOUDY' />
      <Widget day='TUR' degree='11°' weather='STORM' />
      <Widget day='FRI' degree='12°' weather='SUNNY' />
    </div>
  );
}

export default WeatherContainer;
