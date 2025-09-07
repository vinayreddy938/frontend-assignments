import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieSearch from './Movie/MovieSearch'
import Trending from './Trending/Trending'
import Popular from './Popular/Popular'
import TvSeriesLatest from './TvSeriesLatest/TvSeriesLatest'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'


function App() {
  

  return (
    <div>
   <Nav/>
   <Trending/> 
   <Popular/>
   <TvSeriesLatest/>
   <Footer/>
    </div>
 
    
  )
}

export default App
