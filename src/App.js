import React ,{ useState }from 'react';

import Home from "./pages/Home";
import WeatherAPI from "./hooks/WeatherAPI";
import Banner from "./layout/Banner";
import Content from "./layout/Content";
import Header from "./layout/Header";
import "./assets/layout.css";
import "./assets/mediaQuery.css";
function App() {
  return (
    <>
      {/* <Header />*/}
      <Content /> 
      {/* <Banner /> */}
  
    </>
    );
}

export default App;
