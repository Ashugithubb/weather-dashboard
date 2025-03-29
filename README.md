# Weather Dashboard

A simple weather dashboard built with React and Vite, which allows users to search for the weather of a city, view recent search history, and toggle between light and dark themes.

## Features
- Search for weather data by city name
- View current temperature, humidity, and weather conditions
- Maintain a history of the last 5 searched cities
- Refresh weather data for the last searched city
- Light and dark theme toggle
- Responsive UI

## Tech Stack
- React.js
- Vite
- OpenWeather API
- Local Storage (for search history and theme preference)

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the project root and add your OpenWeather API key:
   ```sh
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

## Deployment

### Deploying to Netlify

1. Build the project:
   ```sh
   npm run build
   ```
2. Drag and drop the `dist` folder onto [Netlify](https://app.netlify.com/)
3. Alternatively, connect your GitHub repo and let Netlify handle the build process.

## Folder Structure
```
/weather-dashboard
│── public/        # Static assets
│── src/           # Source code
│   ├── components/  # UI components
│   ├── App.js       # Main application file
│   ├── App.css      # Styles
│── .env            # API Key
│── vite.config.js  # Vite configuration
│── package.json    # Dependencies and scripts
```

## API Reference
- [OpenWeather API](https://openweathermap.org/api)

## Issues & Contributions
If you encounter issues or have suggestions, feel free to open an issue or submit a pull request!

## License
This project is licensed under the MIT License.

