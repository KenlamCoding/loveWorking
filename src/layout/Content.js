import React, {
    useState,useEffect
} from 'react';
import "../assets/content.css"
import {getTodayWeather} from "../hooks/getTodayWeather"
export default function Content(){
    const [weather, setWeather] = useState([]);
    const [signal, setSignal] = useState([]);
    let result=[];
    async function getTodayAdvice(){
        //Get Today Weather data (京士柏)
        //https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc
        let response = await fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc");
        let GetToDayWeather = await response.json();
        setWeather(GetToDayWeather)
    }
    async function getSpecialWeather() {
        //天氣警告一覽 (warnsum)
        /*
        //WTCSGNL: 強烈季候風信號
            //TC1,TC3
            //TC8NE TC8SE TC8NW TC8SW TC9 TC10
        //WRAIN: 暴雨警告信號
            //WRAINA yellow
            //WRAINR
            //WRAINB
        */
        //desciption && goverment giving information
        const response = await fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warnsum&lang=tc");
        const getSpecialWeatherTips = await response.json();
        setSignal(getSpecialWeatherTips)
    }
    useEffect(() => {
        getTodayAdvice()
        getSpecialWeather()
    }, [])
    return(<>
    <main>
            <div className="flex-row">
            {
                (signal.WTCSGNL && signal.WTCSGNL.code != "TC1" && "TC3")||(signal.WRAIN && signal.WRAIN.code!="WRAINA" && "WRAINR")? 
                < div className = "mainImg" > </div> : 
                <div className = "mainSadImg" > </div >
            }
            
                <div className="dataShow">
                     {(signal.WTCSGNL && signal.WTCSGNL.code != "TC1" && "TC3")
                     ||(signal.WRAIN && signal.WRAIN.code!="WRAINA" && "WRAINR")? 
                    < h2 className = "title" > 問老細洗唔洗番工 </h2>:
                     <h2 className="title">夠鐘番工la</h2>
                     
                     }
                    <div className="detail">
                        <div>
                            <img src = {
                                `https://www.hko.gov.hk/images/HKOWxIconOutline/pic${weather.icon}.png`
                            }
                            alt = ""
                            width = "120px" />
                        </div>
                        <div className="flex-col">
                            {/*Exist = show
                                <img src = {signal.WTCSGNL && require(`../assets/signal/${signal.WTCSGNL.code}.png`)
                            */}
                            {
                                signal.WTCSGNL && < img src = {
                                    require(`../assets/signal/${signal.WTCSGNL.code}.png`)
                                }
                            alt = "WTCSGNL" width = "60px;" height = "auto" />
                            }

                            {signal.WRAIN &&
                            <img src =  {require(`../assets/signal/${signal.WRAIN.code}.png`)}
                            alt = "WRAIN" width = "60px" height = "auto" />
                            }
                        </div>
                    </div>
                    <div className="detail">
                        <h1>京士柏</h1>
                        
                    </div>

                    
                    <div >
                        <div className="flex-col">
                            <h2  className = "tag" >
                            {weather.temperature&&weather.temperature.data
                            && weather.temperature.data[0].value}C 
                       </h2>
                            {
                                weather.uvindex &&
                                 weather.uvindex.data && 
                                 weather.uvindex.data &&
                                 <h3 className = "" > UV index: {weather.uvindex.data[0].value}</h3> 
                            } 
                            
                            <div className = "flex-row" >
                                
                            <h3 className="tag">建議 </h3>
                                <div className="flex-row">
                                    {
                                    /* 降雨機率   
                                    1. PSR:=>中
                                    2. >30c
                                    */}
                                    {
                                        (weather.icon <= 53 && weather.icon >= 65) &&<img className="icon" src={require('../assets/item/umbrella.jpg')} width="75px;" height="75px;" alt=""/>
                                    
                                    
                                    }

                                    {
                                        (weather.temperature && weather.temperature.data && weather.temperature.data[0].value > 28) && < img className = "icon"
                                        src = {
                                            require('../assets/item/waterBottle.jpg')
                                        }
                                        width = "75px;"
                                        height = "75px;"
                                        alt = "" />
                                    }
                                </div>
                            </div>     
                            

                            <h5 > 更新 {
                                weather.updateTime&&weather.updateTime.substr(0, 16)
                            } </h5>
                            
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </main>
    </>)
}