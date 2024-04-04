import {useEffect, useState} from 'react';
import { Cairo } from 'next/font/google';
import { NextUIProvider } from '@nextui-org/react';
import "../src/css/publicStyle.css";
import { strings } from '@/utilis/Localization';
import NavBar from "@/modules/layout/navBar/NavBar";
import Footer from "@/modules/layout/footer/Footer";
import {fetchLocation} from "@/utilis/getUserLocation";
import {getCookies} from "cookies-next";

const cairo = Cairo({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: 'swap'
});


const MyApp = ({ Component, pageProps }) => {
    const [userLocation, setUserLocation] = useState("");
    useEffect(() => {
        fetchLocation(strings.getLanguage() || "en").then((data) => {
            setUserLocation(data?.location);
        });
    }, []);
    return (
        <NextUIProvider>
            <style jsx global>{`
                html {
                    font-family: ${cairo.style.fontFamily};
                }
            `}</style>
            {Component.name !== "Login" && Component.name !== "ForgetPasswordPage" && Component.name !== "SignupPage" ?
                <NavBar userLocation={userLocation} /> : null}
            <Component {...pageProps}/>
            {Component.name !== "Login" && Component.name !== "ForgetPasswordPage" && Component.name !== "SignupPage" ?
                <Footer /> : null}
        </NextUIProvider>
    );
}

export default MyApp;
