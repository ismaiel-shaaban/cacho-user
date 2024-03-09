import {NextUIProvider} from '@nextui-org/react'
import {Cairo} from 'next/font/google'
import "../src/css/publicStyle.css"
import React, {useEffect, useState} from 'react'
import {strings} from '@/utilis/Localization';
import NavBar from "@/modules/layout/navBar/NavBar"
import Footer from "@/modules/layout/footer/Footer"

const cairo = Cairo({
    weight: ["400", "500","600", "800", "900"],
    subsets: ["latin"],
    display: 'swap',
})
const MyApp = ({Component, pageProps}) => {
    const [, setLanguageChanged] = useState(false);
    useEffect(() => {
        const savedLang = localStorage.getItem('lang');
        strings.setLanguage(savedLang || 'en');
        setLanguageChanged(prevState => !prevState);
    }, []);
    return (
        <NextUIProvider>
            <style jsx global>{`
                html {
                    font-family: ${cairo.style.fontFamily};
                }
            `}</style>
            <NavBar/>
            <Component {...pageProps} />
            <Footer/>
        </NextUIProvider>
    )
}

export default MyApp