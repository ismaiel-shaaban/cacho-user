
import Footer from "@/modules/layout/footer/Footer";
import NavBar from "@/modules/layout/navBar/NavBar";

export default function StoreLayout({ children }) {
    return (
        <>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    )
}