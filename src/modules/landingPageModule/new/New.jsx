import {strings} from "@/utilis/Localization";
import ProductSection from "@/components/sheared/productSection/ProductSection";

const New = ({newData})=>{
    return(
    <ProductSection title={strings.New} data={newData} link={"#"} />
    )
}

export default New;