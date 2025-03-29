import "./WeatherCard.css";

function WeatherCard({ weather }) {
  if (!weather) return <p>No weather data available.</p>;

  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <img
        className="weather-icon"
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <p>🌡️ Temperature: {weather.main.temp}°C</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
      <p>🌤️ Weather: {weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;
