import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";
import Error from "./components/Error";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("searchHistory")) || []
  );
  const [currentCity, setCurrentCity] = useState(""); // Store last searched city
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  ); // Theme state

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  // Function to Fetch Weather Data
  const fetchWeather = async (city) => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        const errorMessage =
          response.status === 404 ? "City not found" : "Error fetching data";
        throw new Error(errorMessage);
      }
      
      

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message || "City not Found. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // Function to Update Search History (Keep Last 5)
  const updateHistory = (city) => {
    setHistory((prev) => {
      const updatedHistory = [city, ...prev.filter((c) => c !== city)].slice(
        0,
        5
      );
      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
      return updatedHistory;
    });
  };

  // Function to Handle Refresh
  const handleRefresh = () => {
    if (currentCity) {
      fetchWeather(currentCity);
    }
  };

  // Function to Toggle Dark/Light Theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply Theme on Body
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="app-container">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeather} />

      {/* Theme Toggle Button */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

      {/* Refresh Button */}
      <button 
        className="refresh-btn" 
        onClick={handleRefresh} 
        disabled={!currentCity}
      >
        🔄 Refresh
      </button>

      {loading && <Loader />}
      {error && <Error message={error} />}
      {weather && <WeatherCard weather={weather} />}

      {/* Recent Search History */}
      <div className="history">
        <h2>Recent Searches</h2>
        <ul>
          {history.map((city, index) => (
            <li key={index} onClick={() => fetchWeather(city)}>
              {city}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
