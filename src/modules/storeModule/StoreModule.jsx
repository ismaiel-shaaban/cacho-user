import {useEffect, useState} from "react";
import StoreVideo from "@/modules/storeModule/components/storeVideo/StoreVideo";
import StoreTabs from "@/modules/storeModule/components/storeTabs/StoreTabs";

const StoreModule = ({storeData}) => {
    const [store, setStore] = useState(storeData);
    useEffect(() => {
        if (storeData) {
            setStore(storeData);
        }
    }, []);
    if (store.length === 0) return <div>Loading...</div>;
    return (
    <section>
      <StoreVideo video={store.videoLink} />
        <StoreTabs/>
    </section>
  );
}

export default StoreModule;