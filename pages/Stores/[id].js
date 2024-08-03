import StoreModule from "@/modules/storesModule/storeModule/StoreModule";
import Head from "next/head";
import {useState} from "react";

const StorePage = () => {
    const [title, setTitle] = useState("Store");
    const handlePassTitle = (title) => {
        setTitle(title+" Store");
    }
    return (<>
            <Head>
                <title>
                    {title}
                </title>
            </Head>
            <section>
                <StoreModule passTitle={handlePassTitle}/>
            </section>
        </>)
}

export default StorePage
