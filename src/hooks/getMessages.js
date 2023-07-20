export  async function getMessages(){
    let response = await fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc");
    let GetToDayWeather = await response.json();
    const temp = GetToDayWeather.forecastDesc.split("。");
    let arrayMessage = temp.filter(message => message !== "")
    return arrayMessage;
}