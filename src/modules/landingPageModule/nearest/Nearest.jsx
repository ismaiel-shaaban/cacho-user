import {strings} from "@/utilis/Localization";
import SectionTitle from "@/modules/landingPageModule/components/sectionTitle/SectionTitle";
import NearestCard from "@/modules/nearestModule/components/nearestCards/nearestCard/NearestCard";

const Nearest = ({storesData}) => {
    return (
        <section className="container mx-auto px-4 mt-[40px]">
            <SectionTitle title={strings.Nearest} link={"#"} select={true}/>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-[20px] gap-2 mt-[40px]">
                {storesData.map((store) => (
                    <NearestCard key={store.id} store={store}/>
                ))}
            </div>
        </section>
    );
}

export default Nearest;