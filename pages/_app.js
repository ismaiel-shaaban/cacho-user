
import "../src/css/publicStyle.css"
import { appWithTranslation } from "next-i18next";
import React from 'react'

import NavBar from "@/modules/layout/navBar/NavBar"
import Footer from "@/modules/layout/footer/Footer"

const MyApp = ({ Component, pageProps }) => {

    
  return (
    <div>
      <NavBar/>
        <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default  appWithTranslation(MyApp)