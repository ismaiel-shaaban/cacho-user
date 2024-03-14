import {strings} from "@/utilis/Localization";
import SectionTitle from "@/modules/landingPageModule/components/sectionTitle/SectionTitle";
import StoresCard from "@/modules/storesModule/components/storesCards/storesCard/StoresCard";

const Nearest = ({storesData}) => {
    return (
        <section className="container mt-[40px]">
            <SectionTitle title={strings.Nearest} link={"#"} select={true}/>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-[20px] gap-2 mt-[40px]">
                {storesData.map((store) => (
                    <StoresCard key={store.id} store={store}/>
                ))}
            </div>
        </section>
    );
}

export default Nearest;