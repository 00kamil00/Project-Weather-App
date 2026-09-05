async function getApi(city) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=6MD7CBSSL88JZG5HV4LB43HTD`)
        const weatherData = await response.json()

        const apiObject = {
            cityName: weatherData.address,
            temperature: weatherData.days[0].temp,
            conditions: weatherData.days[0].conditions,
            humidity: weatherData.days[0].humidity
        }

        return apiObject

    } catch (error) {
        console.error(error)
    }
}



export { getApi }