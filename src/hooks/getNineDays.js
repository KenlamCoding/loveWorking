export async function getNineDays() {
    const response = await fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc");
    return await response.json();
}