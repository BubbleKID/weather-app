import React from "react";
import "./Header.sass";
import FranceSvg from "../../assets/cities/france.svg";

type BannerProps = {
  // weather: string;
  // brand: string;
};

const Header: React.FC<BannerProps> = (props) => {
  return (
    <div className="header" style={{ backgroundImage: `url(${FranceSvg})` }}>
      <div>
        <div className="header__state">
          <span className="header__state__degree">12°</span>
          <span className="header__state__weather">CLOUDY</span>    
        </div>
        <div className="header__info">
            <div className="header__info__block">
              <span className="header__info__block__text">HUMIDITY</span>
              <span className="header__info__block__number">64%</span>
            </div>
            <div className="header__info__separator"></div>
            <div className="header__info__block">
              <span className="header__info__block__text">WIND</span>
              <span className="header__info__block__number">12K/M</span>
            </div>
        </div>
      </div>
      <div className="header__location">
        <span className="header__location__text">FRANCE</span>
      </div>
    </div>
  );
};

export default Header;
