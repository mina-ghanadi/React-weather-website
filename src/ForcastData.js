import React from "react";
import Icon from "./Icon";
import "./forecast.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function ForcastData(props) {
  function formatDay() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="border-right">
      <div className="future-day">{formatDay()}</div>
      <div>
        <Icon code={props.data.condition.icon} size={20} color={"black"} />
      </div>
      <div>
        <span className="max">
          {" "}
          {Math.round(props.data.temperature.maximum)}°
        </span>
        <span className="min">
          {" "}
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
