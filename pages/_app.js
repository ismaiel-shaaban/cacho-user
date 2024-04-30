import { useEffect, useState } from 'react';
import { Cairo } from 'next/font/google';
import { NextUIProvider } from '@nextui-org/react';
import "../src/css/publicStyle.css";
import { strings } from '@/utilis/Localization';
import NavBar from "@/modules/layout/navBar/NavBar";
import Footer from "@/modules/layout/footer/Footer";
import { fetchLocation } from "@/utilis/getUserLocation";
import { getCookie } from "cookies-next";
import { useRouter } from 'next/router';

const cairo = Cairo({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: 'swap'
});

const MyApp = ({ Component, pageProps }) => {
    const [userLocation, setUserLocation] = useState("");
    const router = useRouter();

    useEffect(() => {
        fetchLocation(strings.getLanguage() || "en").then((data) => {
            setUserLocation(data?.location);
        });
    }, []);

    // Check if the current page is one of the specified pages
    const shouldShowNavAndFooter = !["/login", "/forget-password", "/signup"].includes(router.pathname);

    return (
        <NextUIProvider>
            <style jsx global>{`
                html {
                    font-family: ${cairo.style.fontFamily};
                }
            `}</style>
            {shouldShowNavAndFooter && <NavBar userLocation={userLocation} />}
            <Component {...pageProps}/>
            {shouldShowNavAndFooter && <Footer />}
        </NextUIProvider>
    );
}

export default MyApp;
