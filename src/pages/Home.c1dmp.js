// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// import getWeather from './masterPage'
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    $w('#submitButton').onClick(async () => {
        const city = $w('#cityInput').value;

        // Determine selected units (Fahrenheit or Celsius)
        const units = $w('#fahrenheitRadio').checked ? 'imperial' : 'metric';

        $w('#loadingIndicator').show(); // Show loading
        const weatherData = await getWeather(city, units);
        $w('#loadingIndicator').hide(); // Hide loading

        if (weatherData) {
            // Display temperature based on selected units
            const temperature = units === 'imperial' 
                ? `${weatherData.current.temp_f}°F` 
                : `${weatherData.current.temp_c}°C`;

            $w('#temperatureText').text = temperature;
            $w('#cityNameText').text = weatherData.location.name;
            $w('#weatherIcon').src = weatherData.current.condition.icon;
        } else {
            console.error('Error fetching weather data');
        }
    });

    // Optional: Add event listeners to radio buttons for real-time updates
    $w('#fahrenheitRadio, #celsiusRadio').onChange(() => {
        console.log('Temperature unit changed');
    });
    // Click 'Preview' to run your code
});
