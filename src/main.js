import './styles/style.css'
import axios from 'axios'

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY
const city = 'Manchester'
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

const fetchWeather = async () => {
  try {
    const response = await axios.get(url)
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}

fetchWeather()
