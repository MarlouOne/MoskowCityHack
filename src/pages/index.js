import React, { useEffect, useState } from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import AnalysSectionVK from '../components/AnalysSectionVK'
import AnalysSectionTG from '../components/AnalysSectionTG'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import axios from 'axios'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:8081/GetResultsOfAnalysis')
    .then(res => console.log(res.data)).catch(err => console.log(err))
  }, [])

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <AnalysSectionTG {...homeObjThree} />
        <AnalysSectionVK {...homeObjTwo} />
    </>
  )
}

export default Home