import StoresCards from "@/modules/storesModule/components/storesCards/StoresCards";
import Head from "next/head";
const Stores = () => {

    return(
        <>
            <Head>
                <title>Stores</title>
            </Head>
            <section className="container">
                <StoresCards/>
            </section>
        </>

    )
}

export default Stores
