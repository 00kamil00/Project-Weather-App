const cityNameContainer = document.getElementById('city')
const temperatureContainer = document.getElementById('temperature')
const conditionsContainer = document.getElementById('conditions')
const humidityContainer = document.getElementById('humidity')


function renderInfo(data) {
    cityNameContainer.textContent = data.cityName
    temperatureContainer.textContent = `${data.temperature}°F`
    conditionsContainer.textContent = data.conditions
    humidityContainer.textContent = data.humidity
}

function changeToC(temperature) {
    const tempInC = ((temperature - 32) * (5 / 9)).toFixed(1)
    temperatureContainer.textContent = `${tempInC}°C`
}

function changeToF(temperature) {
    temperatureContainer.textContent = `${temperature}°F`
}



export { renderInfo, changeToC, changeToF }