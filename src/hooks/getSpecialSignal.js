export async function getSpecialSignal() {
    //Get speacial weather signal
    //desciption && goverment giving information 
    try {
        const response = await fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warnsum&lang=tc");
        const getSpecialWeatherTips = await response.json();
        return getSpecialWeatherTips;
    } catch (e) {
        console.log("hi")
    }
}