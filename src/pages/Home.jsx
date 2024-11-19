import React from 'react'
import Slider from '../components/Banner/Banner'
import Success from '../components/Success/Success'
import UserTestimonials from '../components/UserTestimonials/UserTestimonials'
import Tips from '../components/Tips/Tips'



function Home() {
  return (
    <div className='container mx-auto'>
     <Slider/>
     <Success/>
     <Tips/>
     <UserTestimonials/>

    </div>
  )
}

export default Home
