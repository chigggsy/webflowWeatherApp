import './styles/style.css'

fetch('/.netlify/functions/weather?city=London')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error))

console.log('This is the newest test and I need to go to bed cos im tired as.')
