import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import CardGrid from './Components/CardGrid/CardGrid';
import {data} from './data';

const App = () => {
  return (
    <>
    <Header />
    <CardGrid cards={data} />
    <Footer />
    </>

  );
}

export default App

