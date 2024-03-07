import React from 'react'
import Services from '../services/Services'
import Contact from '../Contact/Contact'
// import Indoor_plants from '../Plants/indoor-plants/Indoor_plants'
// import Outdoor_plants from '../Plants/outdoor_plants/Outdoor_plants'
import Hero from '../../components/hero/Hero'
import Plants from '../Plants/Plants'






const Home = () => {
  return (
    <div className='-z-50 '>
     
     <Hero/>
     <Plants/>
     <Services/>
     <Contact/>
     
    
     {/* <Indoor_plants/> */}
     {/* <Outdoor_plants/> */}
     
    
    </div>
  )
}

export default Home
