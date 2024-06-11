import Image from "next/image";
import SectionTitle from "@/modules/landingPageModule/components/sectionTitle/SectionTitle";
import { strings } from "@/utilis/Localization";
import useSWR from "swr";
import { fetcher } from "@/utilis/fetcherFUN";
import { useRouter } from "next/router";
import { Skeleton } from "@nextui-org/react";

const SpecialOffers = () => {
    const router = useRouter();
    const { data, isLoading, error } = useSWR("https://cachooapp.com/api/customer/offers?isSpecial=1&with=business", fetcher, {
        revalidateOnFocus: false,
    });

    const handleImageClick = (uuid) => {
        router.push(`/Stores/${uuid}`);
    };

    const renderSingleImage = (item) => (
        <div className="w-full h-full rounded-md overflow-hidden cursor-pointer"
             onClick={() => handleImageClick(item?.business?.uuid)}>
            <Image
                width={400}
                height={400}
                src={item?.image}
                alt={"Special Offers"}
                className="object-cover w-full h-full"
                quality={100}
            />
        </div>
    );

    const renderTwoImages = (items) => (
        <div className="flex w-full h-full gap-4">
            {items.map((item, index) => (
                <div key={index} className="w-1/2 h-full rounded-md overflow-hidden cursor-pointer"
                     onClick={() => handleImageClick(item?.business?.uuid)}>
                    <Image
                        width={200}
                        height={200}
                        src={item?.image}
                        alt={"Special Offers"}
                        className="object-cover w-full h-full"
                        quality={100}
                    />
                </div>
            ))}
        </div>
    );

    const renderThreeImages = (items) => (
        <div className="flex w-full h-full gap-4">
            <div className="w-1/2 h-full rounded-md overflow-hidden cursor-pointer"
                 onClick={() => handleImageClick(items[0]?.business?.uuid)}>
                <Image
                    width={200}
                    height={200}
                    src={items[0]?.image}
                    alt={"Special Offers"}
                    className="object-cover w-full h-full"
                    quality={100}
                />
            </div>
            <div className="flex flex-col w-1/2 h-full gap-4">
                {items.slice(1).map((item, index) => (
                    <div key={index} className="w-full h-1/2 rounded-md overflow-hidden cursor-pointer"
                         onClick={() => handleImageClick(item?.business?.uuid)}>
                        <Image
                            width={200}
                            height={200}
                            src={item?.image}
                            alt={"Special Offers"}
                            className="object-cover w-full h-full"
                            quality={100}
                        />
                    </div>
                ))}
            </div>
        </div>
    );

    const renderImages = () => {
        if (isLoading) {
            return (
                <div className="flex flex-col space-y-3">
                    <Skeleton className="rounded-lg">
                        <div className="h-48 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">
                            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </div>
            );
        }

        if (error) {
            return <div className="text-red-500 text-center">{strings.FailedToLoadOffers}</div>;
        }

        if (!data || !data.response || !data.response.data) {
            return null;
        }

        const items = data.response.data.slice(0, 3);
        const numImages = items.length;

        switch (numImages) {
            case 1:
                return renderSingleImage(items[0]);
            case 2:
                return renderTwoImages(items);
            case 3:
                return renderThreeImages(items);
            default:
                return null;
        }
    };

    return (
        <section className="container mt-[30px]">
            <SectionTitle title={strings.SpecialOffers} />
            <div className="w-full h-[calc(100dvh-180px)] gap-[20px] mt-[25px]">
                {renderImages()}
            </div>
        </section>
    );
};

export default SpecialOffers;
