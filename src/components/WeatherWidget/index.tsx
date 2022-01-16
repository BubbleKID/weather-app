import React, { ReactPropTypes } from 'react';
import './WeatherWidget.css';

type WidgetProps = {
  weather: string;
  brand: string;
}

const WeatherWidget: React.FC<WidgetProps> = (props) => {
  return (
    <div className="WeatherWidget">
      { props.weather }
    </div>
  );
}

export default WeatherWidget;
