import React from 'react'
import Home from './Home/Home'

import AboutUs from './AboutUs/AboutUs.jsx'
import FindTutor from './FindTutor/FindTutor.jsx'
import Review from '../components/Review.jsx'
import FAQ from '../components/FAQ.jsx'
import Footer from '../components/Footer.jsx'

export default function GlobalPage() {
  return (
    <>

    <Home />
 
    <AboutUs />
    <FindTutor />
    <Review />
    <FAQ />
    <Footer />
   
    </>
  )
}
