import "./styles.css"


async function getApi(city) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=6MD7CBSSL88JZG5HV4LB43HTD`)
        const weatherData = await response.json()

        const cityNameContainer = document.getElementById('city')
        const temperatureContainer = document.getElementById('temperature')
        const conditionsContainer = document.getElementById('conditions')
        const humidityContainer = document.getElementById('humidity')
        const changeCBtn = document.getElementById('change-C-btn')
        const changeFBtn = document.getElementById('change-F-btn')


        const cityName = weatherData.address
        cityNameContainer.textContent = cityName
        // console.log(cityName)

        const temperature = weatherData.days[0].temp
        temperatureContainer.textContent = `${temperature}°F`
        // console.log(temperature)

        const conditions = weatherData.days[1].conditions
        conditionsContainer.textContent = conditions
        // console.log(conditions)

        const humidity = weatherData.days[0].humidity
        humidityContainer.textContent = `${humidity}%`
        // console.log(humidity)

        const tempInC = ((temperature - 32) * (5 / 9)).toFixed(1)
        const tempInF = ((tempInC * 1.8) + 32).toFixed(1)

        changeCBtn.addEventListener("click", () => {
            temperatureContainer.textContent = `${tempInC}°C`
        })

        changeFBtn.addEventListener("click", () => {
            temperatureContainer.textContent = `${tempInF}°F`
        })


    } catch (error) {
        console.error(error)
    }
}


function renderInfo() {
    const userCity = document.getElementById('cityName').value
    getApi(userCity)    
}

const form = document.getElementById('weatherForm')
form.addEventListener("submit", (e) => {
    e.preventDefault()
    renderInfo()
})