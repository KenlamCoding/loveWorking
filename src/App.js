import React from 'react';

import Banner from "./components/Banner";
import Content from "./contents/Content";
import Header from "./components/Header";
import "./assets/layout.css";
import "./assets/mediaQuery.css";
function App() {
    return (
    <>
      <Header />
      <Content /> 
      <Banner />
    </>
    );
}

export default App;
