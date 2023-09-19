export async function getTodayWeather() {
    var GetToDayWeather;
    try{
         //Get today weather (京士柏)
         //https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc
         let response = await fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc");
          GetToDayWeather = await response.json();
    }catch(e){
        console.log("hi")
    }
   
    return GetToDayWeather;
}