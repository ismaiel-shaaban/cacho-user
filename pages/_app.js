import NavBar from "@/modules/layout/navBar/NavBar"
import "../src/css/publicStyle.css"

import React from 'react'
import Footer from "@/modules/layout/footer/Footer"

const MyApp = ({ Component, pageProps }) => {

    
  return (
    <div >
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp