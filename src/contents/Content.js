import React, {
    useState,useEffect
} from 'react';
import "../assets/content.css"
import {getTodayWeather} from "../hooks/getTodayWeather"
import { getSpecialSignal } from '../hooks/getSpecialSignal';

export default function Content(){
    const [weather, setWeather] = useState([]);
    const [signal, setSignal] = useState([]);
    let result=[];
    async  function getTodayAdvice(){
        //Get Today Weather data (京士柏)
        //https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc
        //let response = await fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc");
        let GetToDayWeather = await getTodayWeather().then(data => setWeather(data))
        
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
        const response = await getSpecialSignal().then(data => setSignal(data));
        
    }
    function demo(){
        setSignal({
            "WTCSGNL": {
                "code": "TC8NE"
            }
        })
    }
    useEffect(() => {
        getTodayAdvice()
        getSpecialWeather()
    }, [])
    return(<>
    <main>
            <div className="flex-row-sm-col">
                {
                    ( signal?.WTCSGNL?.code !== "TC1" && signal?.WTCSGNL?.code !== "TC3" && signal?.WTCSGNL?.code!==undefined) 
                    || (signal?.WRAIN && signal?.WRAIN?.code !== "WRAINA" && "WRAINR" && signal?.WTCSGNL?.code!==undefined) ?
                    <div>
                        <h2 className = "title" > 快啲問老細洗唔洗番工LA</h2>
                        <div className = "mainImg" > </div>
                    </div>
                    : 
                    <div>
                        <h2 className="title">夠鐘番工la</h2>
                        <div className = "mainSadImg" > </div >
                    </div>
                }
                <div className="dataShow">
                    <div className="detail">
                        <h1>京士柏</h1>
                        <h3 className = "tag" >
                            {weather?.temperature?.data[0]?.value}C 
                       </h3>
                    </div>
                    <div className = "detail " >
                        
                        <div>
                            {
                                weather?.icon!==undefined && <img src = {
                                    `https://www.hko.gov.hk/images/HKOWxIconOutline/pic${weather.icon}.png`
                                }
                                alt = ""
                                width = "120px" />
                            }
                            
                        </div>
                        <div className="flex-col ">
                            
                            {
                                signal.WTCSGNL && < img src = {
                                    require(`../assets/signal/${signal?.WTCSGNL?.code}.png`)
                                }
                            alt = "WTCSGNL" width = "60px;" height = "auto" />
                            }

                            {signal.WRAIN &&
                            <img src =  {require(`../assets/signal/${signal?.WRAIN?.code}.png`)}
                            alt = "WRAIN" width = "60px" height = "auto" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="flex-col">
                            
                            {
                                
                                  <h3 className = "tag" > UV : {weather.uvindex&& weather.uvindex.data[0] && weather?.uvindex?.data[0].value}</h3> 
                            } 
                            
                            <div className = "flex-col" >
                            
                                <div className="flex-row justify-center">
                                    {
                                    /* 降雨機率   
                                    1. PSR:=>中
                                    2. >30c
                                    */}
                                    {
                                        !(weather.icon <= 53 && weather.icon >= 65) &&<img className="icon" 
                                        src={require('../assets/item/umbrella.jpg')} width="75px;" height="75px;" alt=""/>
                                    
                                    
                                    }

                                    {
                                        (weather?.temperature?.data && weather?.temperature?.data[0]?.value > 28) && 
                                        <img className = "icon"
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
                                weather?.updateTime?.substr(0, 16)
                            } </h5>
                            
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </main>
    </>)
}