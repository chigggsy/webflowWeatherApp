import './styles/style.css'

const netlifyFunctionUrl =
  'https://prismatic-kangaroo-1a0ac9.netlify.app/.netlify/functions/weather?city=London'

fetch(netlifyFunctionUrl)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error))

console.log('One last change please.')
