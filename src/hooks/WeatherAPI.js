import {
    useState
} from "react";
export default function WeatherAPI(){
    const [weathers, setWeathers] = useState([]);
    const [todayData, setTodayData] = useState([]);
    const [todayWeathers, setTodayWeathers] = useState([]);
    const [warning, setWarning] = useState([]);
    const [action, setAction] = useState("");
    // Only need data which will effect the action of going to work
    /* Function 1 : Today weather 
        1. Temperature
        2. PSR (Rain)
        3. Special  
            - WRAIN: 暴雨警告信號
            - WTCSGNL: 熱帶氣旋警告信號
            Object: icon
            - https: //www.hko.gov.hk/textonly/v2/explain/wxicon_c.html
            - https://www.hko.gov.hk/tc/wxinfo/dailywx/warnlegend.html
        4. Suggestion (Extra)
     Feature one : view today weather and giving advice
    */
    // async function getTodayAdvice() {
    //     // 

    //     //Get Today Weather data (京士柏)
    //     //https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc
    //     //

    //     //Get Today message
    //     let response = await fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc");
    //     let GetToDayWeather = await response.json();
    //     const temp = GetToDayWeather.forecastDesc.split("。");
    //     let arrayMessage = temp.filter(message => message !== "")
    //     setTodayWeathers(arrayMessage)

    //     console.log(todayWeathers)
    //     //Get Special Weather
    //     getSpecialWeather()
    //     setAction("getToday")
    // }
   
    // /*Function 2: 9 days
     async function getNineDayWeather() {
        //9-day Weather Forecast (fnd)
        //
        const response = await fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc");
        const getWeathers = await response.json();
        setWeathers(getWeathers)
        setAction("get9Day")
        setTodayWeathers([])
        setWarning([])
    }
    // // Object 3 : More offical message
    // async function getSpecialWeather() {
            //     /*
            //     Night 21:00 後
            //     Today 9:00 前
            //     //Special Weather Tips (warnsum)
            //     //WTCSGNL: 強烈季候風信號
            //         //TC1,TC3
            //         //TC8NE TC8SE TC8NW TC8SW TC9 TC10
            //     //WRAIN: 暴雨警告信號
            //         //WRAINA yellow
            //         //WRAINR
            //         //WRAINB
            //     */
    //     //Special Weather(warnsum)
    //     //desciption && goverment giving information
    //     const response = await fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warnsum&lang=tc");
    //     const getSpecialWeatherTips = await response.json();
    //     setWarning(getSpecialWeatherTips)
    //     return getSpecialWeatherTips;
    // }
    function showMe(){
        console.log("hi")
    }

    
    return (
        <>
        {/* < div className = "w-9/12 mx-auto flex flex-col mx-3" >
             <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={getNineDayWeather}>9 Day</button>  
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={getTodayAdvice}>TIme to Work</button>  
                
            </div>
                {
                    action === "get9Day" && weathers.weatherForecast && weathers.weatherForecast.map(eachWeather => {
                        return (
                            <div  className = "flex flex-col border-2 w-fit m-3 items-center" key = {eachWeather.forecastDate} >
                                <div className = "flex flex-row " >
                                    <h3 className="p-3">{eachWeather.forecastDate}</h3>
                                    <div className="p-3">{eachWeather.week}</div>
                                </div>
                                <div className = "flex flex-row" >
                                    <h2 className="p-3">
                                        {eachWeather.forecastMintemp.value}
                                        {eachWeather.forecastMintemp.unit}
                                        -
                                        {eachWeather.forecastMaxtemp.value}
                                        {eachWeather.forecastMaxtemp.unit}
                                    </h2>
                                    <h3 className="p-3">
                                        {eachWeather.forecastMinrh.value}
                                        {eachWeather.forecastMinrh.unit}
                                        -
                                        {eachWeather.forecastMaxrh.value}
                                        {eachWeather.forecastMaxrh.unit} 
                                    </h3>
                                </div>
                                <div className = "flex flex-row">
                                    <div className="p-3">{eachWeather.forecastWind}</div>
                                    <div className="p-3">{eachWeather.forecastWeather}</div>
                                </div>
                            </div>
                        )
                    })
                }
                
                {
                    action === "getToday" 
                    && todayWeathers 
                    && todayWeathers.map((messageWeathers)=>{
                        return(<div className = "flex flex-col border-2 w-fit m-3 items-center" >
                                <div className = "flex flex-row" >
                                    <h3 className="p-3">
                                        {messageWeathers}
                                    </h3>
                                </div>
                        </div>)
                    })
                        
                }  
                {warning 
                && warning.WTCSGNL 
                && < img className = "h-auto w-28"
                    src={require("../assets/signal/"+warning.WTCSGNL.code +".png")} 
                    alt="Rice"/>
           }
                {warning 
                &&warning.WRAIN
                &&<img className="h-auto w-28" 
                    src = {
                        require("../assets/signal/" + warning.WRAIN.code + ".png")
                    }
                    alt="Rice"/>}

        </div> */}
        </>
    )

}