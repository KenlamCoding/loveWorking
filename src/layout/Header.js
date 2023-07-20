
import React, {
    useState,
    useEffect
} from 'react';
import {getNineDays} from '../hooks/getNineDays';
import "../assets/nav.css";
export default function Header(){
    const [nineDay, setNineDay] = useState([]);
    
    // async function getNineDayWeather() {
    //       //9-day Weather Forecast (fnd)
    //       const response = await fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc");
    //       const getWeathers = await response.json();
    //       setNineDay(getWeathers.weatherForecast)
    // }

    useEffect(() => {
        let response = getNineDays();
            response.then((success)=>{
                setNineDay(success.weatherForecast)
            },(fail)=>{
                console.log(fail)
            })
        }, [])
    return(
    <>
        
        <nav className="nineDay">
            <section>
                {
                    nineDay && nineDay.map((day,index)=>{
                        return(
                            <div className = "navItem" key = {index} >
                                <span>{day.forecastDate.substr(4, 7)}</span>
                                <span>{day.week}</span>

                                <div><img src={`https://www.hko.gov.hk/images/HKOWxIconOutline/pic${day.ForecastIcon}.png`} alt="" width="80px"/></div>
                                <div>{day.forecastMintemp.value}C-{day.forecastMaxtemp.value}C</div>
                            </div>
                            
                        )
                    })
                }
                
            </section>
        </nav>
    </>

    )
}