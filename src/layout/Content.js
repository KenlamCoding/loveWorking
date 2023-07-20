import React, {
    useState,useEffect
} from 'react';
import "../assets/content.css"
export default function Content(){
    const [weather, setWeather] = useState([]);
    const [signal, setSignal] = useState([]);

    async function getTodayAdvice() {
        // 
        //Get Today Weather data (京士柏)
        //https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc
        //

        //Get Today message
        let response = await fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc");
        let GetToDayWeather = await response.json();
        const temp = GetToDayWeather.forecastDesc.split("。");
        let arrayMessage = temp.filter(message => message !== "")

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

    }
    useEffect(() => {
    }, [])
    return(<>
    <main>
            <div className="flex-row">
                <div className="mainImg"></div>
                <div className="dataShow">
                    <h2 className="title">夠鐘番工la</h2>
                    <div className="detail">

                        <div>
                            <img src="https://www.hko.gov.hk/images/HKOWxIconOutline/pic63.png" alt="" width="120px"/>
                        </div>
                        <div className="flex-col">
                            {/*Exist = show*/}
                            <img src={false&&require('../assets/signal/'+'TC1'+'.png')} alt="" width="60px;" height="auto"/>
                            <img src={true&&require('../assets/signal/TC3.png')} alt="" width="60px"  height="auto"/>
                        </div>
                    </div>
                    <div className="detail">
                        <h1>京士柏</h1>
                        <h2>29C</h2>

                    </div>
                    <div >
                        <div className="flex-col">
                            <h3 className="tag">建議: </h3>
                            <div className="flex-row">
                                {/*
                                1. PSR:=>中
                                1. >30c
                                */}
                                <img className="icon" src={true&&require('../assets/item/umbrella.jpg')} width="75px;" height="75px;" alt=""/>
                                <img className="icon" src={true&&require('../assets/item/waterBottle.jpg')} width="75px;" height="75px;" alt=""/>
                            </div>
                            <h5 >更新 16:02</h5>
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>)
}