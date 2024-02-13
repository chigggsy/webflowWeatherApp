const axios = require('axios')

exports.handler = async (event) => {
  const city = event.queryStringParameters.city || 'London' // Default city
  const API_KEY = process.env.VITE_OPENWEATHER_API_KEY // Securely using the environment variable
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

  try {
    const response = await axios.get(url)
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message }),
    }
  }
}
