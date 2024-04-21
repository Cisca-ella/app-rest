import React from "react";
import "./weather.css";

export default function Weather() {
    return (
      <div className="weatherApp">
        <div class="weather-app">
          <header>
            <form id="search-form">
              <input
                type="search"
                placeholder="Enter a city.."
                required
                class="search-input"
                id="search-input"
              />
              <input type="submit" value="Search" class="search-button" />
            </form>
          </header>
          <main>
            <div class="current-weather">
              <div>
                <h1 class="current-city" id="current-city">
                  Paris
                </h1>
                <p class="current-details">
                  <span id="current-date"></span>, moderate rain <br />
                  Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
                </p>
              </div>
              <div class="current-temperature">
                <span class="current-temperature-icon">☀️</span>
                <span class="current-temperature-value">24</span>
                <span class="current-temperature-unit">°C</span>
              </div>
            </div>
          </main>
          <footer>
            <p>
              This project was coded by
              <a href="" target="_blank">
                Francisca
              </a>{" "}
              and is
              <a href="#" target="_blank">
                {" "}
                on Vercel
              </a>{" "}
              and
              <a href="#" target="_blank">
                hosted on Netlify
              </a>
            </p>
          </footer>
        </div>
      </div>
    );
  }