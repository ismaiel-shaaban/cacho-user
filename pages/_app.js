
import "../src/css/publicStyle.css"
import React, { useEffect, useState } from 'react'
import { strings } from '@/utilis/Localization';
import NavBar from "@/modules/layout/navBar/NavBar"
import Footer from "@/modules/layout/footer/Footer"

const MyApp = ({ Component, pageProps }) => {
  const [, setLanguageChanged] = useState(false);
  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    strings.setLanguage(savedLang || 'en');
    setLanguageChanged(prevState => !prevState);
  }, []);
  return (
    <div>
      <NavBar/>
        <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default  MyApp