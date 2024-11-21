const tempData = document.getElementById("temp_data")
const windData = document.getElementById("wind_data")
const timezoneData = document.getElementById("timezone_data")
const timeData = document.getElementById("time_data")

const getWeather = async() => {
    try {
        const responce = await fetch("https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1")
        const data = await responce.json()
        const temp = data.current.temperature_2m
        const windSpeed = data.current.wind_speed_10m
        const timeZ = data.timezone
        const crrDate = new Date(data.current.time)
        const crrTime = crrDate.toLocaleString()
        tempData.textContent = temp
        windData.textContent = windSpeed
        timezoneData.textContent = timeZ
        timeData.textContent = crrTime
        return data
    } catch (err) {
        console.error(err)
    }
}

getWeather()