import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import "./search.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
export default function Search(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({ ready: false });
  let [picture, setPicture] = useState(null);

  function getInfo(result) {
    setWeather({
      ready: true,
      temperature: Math.round(result.data.temperature.current),
      description: result.data.condition.description,
      humidity: Math.round(result.data.temperature.humidity),
      wind: Math.round(result.data.wind.speed * 3.6),
      icon: result.data.condition.icon,
      cityName: result.data.city,
      date: new Date(),
    });
    // link of background images
    if (
      result.data.condition.icon === "clear-sky-day" ||
      result.data.condition.icon === "few-clouds-day"
    ) {
      setPicture("sunny");
    }
    if (
      result.data.condition.icon === "clear-sky-night" ||
      result.data.condition.icon === "few-clouds-night"
    ) {
      setPicture("clear-night");
    }
    if (
      result.data.condition.icon === "scattered-clouds-day" ||
      result.data.condition.icon === "broken-clouds-day"
    ) {
      setPicture("cloud-day");
    }
    if (
      result.data.condition.icon === "scattered-clouds-night" ||
      result.data.condition.icon === "broken-clouds-night"
    ) {
      setPicture("cloud-night");
    }
    if (
      result.data.condition.icon === "rain-day" ||
      result.data.condition.icon === "rain-night" ||
      result.data.condition.icon === "shower-rain-day" ||
      result.data.condition.icon === "shower-rain-night"
    ) {
      setPicture("rain");
    }
    if (
      result.data.condition.icon === "thunderstorm-day" ||
      result.data.condition.icon === "thunderstorm-night"
    ) {
      setPicture("thunder");
    }
    if (
      result.data.condition.icon === "snow-day" ||
      result.data.condition.icon === "snow-night"
    ) {
      setPicture("snow");
    }
    if (
      result.data.condition.icon === "mist-day" ||
      result.data.condition.icon === "mist-night"
    ) {
      setPicture("fog");
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    inputCity();
  }
  function changeCity(event) {
    setCity(event.target.value);
  }

  function inputCity() {
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=7513b452c09o45a7101tdb174f808e29`;
    axios.get(url).then(getInfo);
  }
  if (weather.ready) {
    return (
      <div className={picture}>
        <div className="all">
          <form onSubmit={handleSubmit} className="mb-3 p-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  className="form-control w-100"
                  placeholder="Enter a city"
                  autoFocus="on"
                  onChange={changeCity}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  className="btn btn-primary w-100"
                  value="search"
                />
              </div>
            </div>
          </form>
          <Weather weather={weather} />
        </div>
      </div>
    );
  } else {
    inputCity();
    return "Loading...";
  }
}
