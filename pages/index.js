
import React from "react"
import Header from "../components/LayoutWrapper/Header"
import Footer from "../components/LayoutWrapper/Footer"
import SkipComponents from "../components/SkipComponent"
import Divider from "../components/shared/Divider"
import Landing from "../components/Landing"
import CruiseComponent from "../components/CruiseComponent"
import ScrollButton from "../components/shared/ScrollButton"

export default function Home() {
  return (
   <>
    <Header/>
    <ScrollButton/>
    <Landing/>
    <SkipComponents/>
    <CruiseComponent/>
    
    <Footer/>
   </>
  )
}
