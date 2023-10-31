import React, { useState } from "react";
import "./weather.css";
export default function UnitsChange(props) {
  const [unit, setUnit] = useState("celcius");
  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  function farenheit() {
    return (props.celcius * 9) / 5 + 32;
  }
  if (unit === "celcius") {
    return (
      <div>
        <span className="temperature">
          <span className="material-symbols-outlined"> device_thermostat </span>
          {Math.round(props.celcius)}
        </span>
        <span className="units">
          °C |
          <a href="/" onClick={showFarenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature">
          {" "}
          <span className="material-symbols-outlined"> device_thermostat </span>
          {Math.round(farenheit())}
        </span>
        <span className="units">
          <a href="/" onClick={showCelcius}>
            °C
          </a>
          |°F
        </span>
      </div>
    );
  }
}
