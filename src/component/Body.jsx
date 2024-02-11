import React, { useState } from "react";
import pin from "../assest/pin.png";

function Body() {
  const [searchText, setSearchText] = useState("");
  const [weatherData, setWeatherData] = useState({});

  let api_key = "8a0d13aa9bc19f4ab2a635273ddd769b";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=Metric&appid=${api_key}`;

  const getWeatherData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setWeatherData(result));
  };

  const onclicksearch = () => {
    if (searchText.length > 0) {
      getWeatherData();
    }
  };

  return (
    <div className="MainContainer">
      <div>
        <div className="container">
          <input
            className="inputField"
            placeholder="Enter City"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <button onClick={onclicksearch}>search</button>
        <div className="cityName">
          <h1>{weatherData.name}</h1>
          <img src={pin} />
        </div>
      </div>

      <div>
        <div className="temp">
          <h2>{weatherData?.main?.temp}</h2>
        </div>
        <div className="variation">
          <h3>{weatherData?.main?.temp_min}</h3>
          <h3>{weatherData?.main?.temp_max}</h3>
        </div>
      </div>

      <div>
        <div className="environment">
          <h1>smokee</h1>
        </div>
        <div className="lastContainer">
          {weatherData?.main?.feels_like && (
            <h1>{weatherData?.main?.feels_like}</h1>
          )}
          {/* <h4>{weatherData?.main?.humidity}</h4>
          <h4>{weatherData?.main?.pressure}</h4> */}
        </div>
      </div>
    </div>
  );
}

export default Body;
