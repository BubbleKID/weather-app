import React from 'react';
import './Widget.sass';
import Moon from '../../assets/weathers/Moon.svg';

type WidgetProps = {
  day: string;
  degree: string;
  weather: string;
}

const Widget: React.FC<WidgetProps> = (props) => {
  return (
    <div className="widget">
      <p className="widget__day">{ props.day }</p>
      <img className="widget__weather"alt={ props.weather } src={Moon} />
      <p className="widget__degree">{ props.degree }</p>
      <p className="widget__weather">{ props.weather }</p>
    </div>
  );
}

export default Widget;
