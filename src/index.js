import "./styles.css"
import { getApi } from "./fetching.js"
import { renderInfo, changeToC, changeToF } from "./dom.js"



const form = document.getElementById('weatherForm')
const changeCBtn = document.getElementById('change-C-btn')
const changeFBtn = document.getElementById('change-F-btn')

let currentTemp = null

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const userCity = document.getElementById('cityName').value
    const result = await getApi(userCity)
    renderInfo(result)
    currentTemp = result.temperature
})

changeCBtn.addEventListener("click", () => {
    changeToC(currentTemp)
})

changeFBtn.addEventListener("click", () => {
    changeToF(currentTemp)
})