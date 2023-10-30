import React, { useState, useEffect } from "react";

import "./forecast.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import ForcastData from "./ForcastData";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function findResult(result) {
    setForecastData(result.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast border mt-4 ">
        <div className="row">
          {forecastData.map(function (forecastData, index) {
            if (index > 0 && index < 7) {
              return (
                <div className="col" key={index}>
                  <ForcastData data={forecastData} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=7513b452c09o45a7101tdb174f808e29`;
    axios.get(url).then(findResult);
    return null;
  }
}
