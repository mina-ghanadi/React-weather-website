import React from "react";
import Dates from "./Dates";
import UnitsChange from "./UnitsChange";
import Icon from "./Icon";
import Forecast from "./Forecast";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./weather.css";

export default function Weather(props) {
  return (
    <div className="container weather pb-4">
      <div className="row pt-4">
        <div className="col-sm-4">
          <ul>
            <li>
              <h1>
                <span className="material-symbols-outlined"> location_on </span>
                {props.weather.cityName}
              </h1>
            </li>
            <li className="ps-3 date">
              <Dates date={props.weather.date} />
            </li>
          </ul>
        </div>
        <div className="col-sm-4">
          <ul>
            <UnitsChange celcius={props.weather.temperature} />
            <li className="ps-3 humidity">
              Humidity: {props.weather.humidity} %
            </li>
            <li className="ps-3 wind">Wind: {props.weather.wind} in km/h</li>
          </ul>
        </div>
        <div className="col-4 icon text-center icon">
          <Icon code={props.weather.icon} size={52} color={"black"} />
          <div className="description">{props.weather.description}</div>
        </div>
      </div>
      <Forecast city={props.weather.cityName} />
    </div>
  );
}
