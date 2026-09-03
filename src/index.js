import "./styles.css"


getApi('london')

async function getApi(city) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=6MD7CBSSL88JZG5HV4LB43HTD`)
        const weatherData = await response.json()

        const cityName = weatherData.address
        console.log(cityName)

        const temperature = weatherData.days[0].temp
        console.log(temperature)

        const conditions = weatherData.days[1].conditions
        console.log(conditions)

        const humidity = weatherData.days[0].humidity
        console.log(humidity)

    } catch (error) {
        console.error(error)
    }
}