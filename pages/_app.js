import useSWR from 'swr';
import { NextUIProvider } from '@nextui-org/react';
import { Cairo } from 'next/font/google';
import "../src/css/publicStyle.css";
import React, { useEffect, useState } from 'react';
import { strings } from '@/utilis/Localization';
import NavBar from "@/modules/layout/navBar/NavBar";
import Footer from "@/modules/layout/footer/Footer";
import SignupPage from "./signup";

const cairo = Cairo({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: 'swap'
});

const fetchLocation = async (language) => {
    if (navigator.geolocation) {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const userLocationResponse = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyBhs9awrQC82lygPiy4Cq91xyX9s3WUjUI&language=${language}`
        );

        const userLocation = await userLocationResponse.json();

        const location = userLocation?.results[0]?.address_components
            .filter((ele) => ele.types.includes('political'))
            .map((el) => el.long_name)
            .slice(0, 8)
            .join(',')
            .toString();

        return { location, latitude: position.coords.latitude, longitude: position.coords.longitude };
    } else {
        throw new Error('Please enable location permission');
    }
};

const MyApp = ({ Component, pageProps }) => {
    const [languageChanged, setLanguageChanged] = useState(false);

    useEffect(() => {
        const savedLang = localStorage.getItem('lang');
        strings.setLanguage(savedLang || 'en');
        setLanguageChanged(prevState => !prevState);
        fetchLocation()
        console.log('lkkkkkkkk',fetchLocation());
    }, []);

    const { data: locationData, error: locationError } = useSWR(languageChanged ? 'en' : null, fetchLocation);

    return (
        <NextUIProvider>
            <style jsx global>{`
                html {
                    font-family: ${cairo.style.fontFamily};
                }
            `}</style>
            {Component.name !== "Login" && Component.name !== "ForgetPasswordPage" && Component.name !== "SignupPage" ?
                <NavBar /> : null}
            <Component {...pageProps} locationData={locationData} locationError={locationError} />
            {Component.name !== "Login" && Component.name !== "ForgetPasswordPage" && Component.name !== "SignupPage" ?
                <Footer /> : null}
        </NextUIProvider>
    );
}

export default MyApp;
