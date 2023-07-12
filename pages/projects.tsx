import React, { useState } from "react";
import axios from "axios";

export default function Projects() {
  const [data, setData] = useState({});

  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8e899e2d9422345bc0870c635282637c&units=metric`;
  // @ts-ignore
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  const handleClick = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    setLocation("");
  };
  // @ts-ignore
  return (
    <div className="weather-app">
      <div className="grid-col">
        <div className="info-flex">
          <div className="search">
            <img src="/project-image/icons8-search-25.svg"></img>
            <input
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onKeyPress={searchLocation}
              placeholder="Seacrh for places..."
              type="text"
            ></input>
            <img
              src="/project-image/icons8-target-20.svg"
              onClick={handleClick}
            ></img>
          </div>
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <p>{data.main.temp.toFixed()}°C</p> : null}
          </div>
          <div className="day">
            <p>
              Tuesday, <span className="time">16:00</span>
            </p>
          </div>
          <div className="underline underline-2"></div>
          <div className="description">
            {data.weather ? (
              <p>
                {data.weather[0].description.charAt(0).toUpperCase() +
                  data.weather[0].description.slice(1)}
              </p>
            ) : null}
          </div>
        </div>

        <div className="status-info">
          <div>
            <h1>Today's highlights</h1>
          </div>
          <div className="status-grid">
            <div className="wind-status info-box">
              <h4>Wind Status</h4>
              {data.wind ? (
                <p>
                  {data.wind.speed.toFixed()}
                  <span>km/h</span>
                </p>
              ) : null}
            </div>
            <div className="sunrise info-box">
              <h4>Sunrise & SunSet</h4>
              <p>5:22 AM</p>
              <p>20:34 PM</p>
            </div>
            <div className="Humidity info-box">
              <h4>Humidity</h4>
              {data.main ? (
                <p>
                  {data.main.humidity}
                  <span>%</span>
                </p>
              ) : null}
            </div>
            <div className="Visibility info-box">
              <h4>Feels like</h4>
              {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
