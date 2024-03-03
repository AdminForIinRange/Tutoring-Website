import React from 'react'
import Home from './Home/Home'

import AboutUs from './AboutUs/AboutUs.jsx'
import FindTutor from './FindTutor/FindTutor.jsx'
import Review from '../components/Review.jsx'
import FAQ from '../components/FAQ.jsx'
import Footer from '../components/Footer.jsx'
import { Box } from '@chakra-ui/react'

export default function GlobalPage() {
  return (
    <Box>

    <Home />
 
    <AboutUs />
    <FindTutor />
    <Review />
    <FAQ />
    <Footer />
   
    </Box>
  )
}
