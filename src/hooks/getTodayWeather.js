export async function getTodayWeather() {
    //Get today weather (京士柏)
    //https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc
    let response = await fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc");
    let GetToDayWeather = await response.json();
    return GetToDayWeather;
}