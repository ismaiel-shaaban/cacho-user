import StoreModule from "@/modules/storesModule/storeModule/StoreModule";
import store_1 from "../../public/panner/img-2.jpg";
import product_1 from "../../public/product/img-1.jpg";
import product_2 from "../../public/product/img-2.jpeg";
import image_1 from "../../public/storeImage/img-5.png";
import image_2 from "../../public/storeImage/img-2.png";
import image_3 from "../../public/storeImage/img-3.png";
import image_4 from "../../public/storeImage/img-4.png";
import image_5 from "../../public/storeImage/img-5.png";
import image_6 from "../../public/storeImage/img-6.png";
import image_7 from "../../public/storeImage/img-7.png";
import image_8 from "../../public/storeImage/img-8.png";
import image_9 from "../../public/storeImage/img-9.png";
import image_10 from "../../public/storeImage/img-10.png";
import image_11 from "../../public/storeImage/img-11.png";
import image_12 from "../../public/storeImage/img-12.png";
import bg from "../../public/storeImage/bg.png";

const storesData = [
    {
        id: 1,
        storeName: "Pizza Hut",
        storeImage: store_1,
        videoLink: bg,
        rate: 4.5,
        reviews: 100,
        storeLocation: "Gate 8, Ahmed Oraby st, behind kamal market, Giza, Egypt.",
        status: "Open",
        open: "9 AM - 10 PM",
        description: "Pizza Hut is an American restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. It provides Italian-American cuisine, including pizza, pasta, side dishes and desserts.",
        images: [image_1,image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9, image_10, image_11, image_12],
        products: [
            {
                id: 1,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 2,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 3,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 4,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 5,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 6,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 7,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 8,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            }
        ],
        offers: [
            {
                id: 1,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 2,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 3,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 4,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 5,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 6,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 7,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 8,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            }
        ],
        reviewsData: [
            {
                id: 1,
                name: "Ahmed",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 2,
                name: "Mohamed",
                starsCount: 1,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 3,
                name: "Ali",
                starsCount: 2,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 4,
                name: "Khaled",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 5,
                name: "Ahmed",
                starsCount: 1,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 6,
                name: "Mohamed",
                starsCount: 3,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 7,
                name: "Ali",
                starsCount: 2,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 8,
                name: "Khaled",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
        ]
    },
    {
        id: 2,
        storeName: "NTC",
        storeImage: store_1,
        videoLink: bg,
        rate: 3,
        reviews: 320,
        storeLocation: "Gate 8, Ahmed Oraby st, behind kamal market, Giza, Egypt.",
        status: "Closed",
        open: "9 AM - 10 PM",
        description: "Pizza Hut is an American restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. It provides Italian-American cuisine, including pizza, pasta, side dishes and desserts.",
        images: [image_1,image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9, image_10, image_11, image_12],
        products: [
            {
                id: 1,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 2,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 3,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 4,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 5,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 6,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 7,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 8,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            }
        ],
        offers: [
            {
                id: 1,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 2,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 3,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 4,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 5,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 6,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 7,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 8,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            }
        ],
        reviewsData: [
            {
                id: 1,
                name: "Ahmed",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 2,
                name: "Mohamed",
                starsCount: 1,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 3,
                name: "Ali",
                starsCount: 2,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 4,
                name: "Khaled",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 5,
                name: "Ahmed",
                starsCount: 1,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 6,
                name: "Mohamed",
                starsCount: 3,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 7,
                name: "Ali",
                starsCount: 2,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 8,
                name: "Khaled",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
        ]
    },
    {
        id: 3,
        storeName: "Store Name",
        storeImage: store_1,
        videoLink: bg,
        rate: 4.5,
        reviews: 100,
        storeLocation: "Gate 8, Ahmed Oraby st, behind kamal market, Giza, Egypt.",
        status: "Open",
        open: "9 AM - 10 PM",
        description: "Pizza Hut is an American restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. It provides Italian-American cuisine, including pizza, pasta, side dishes and desserts.",
        images: [image_1,image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9, image_10, image_11, image_12],
        products: [
            {
                id: 1,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 2,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 3,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 4,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 5,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 6,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 7,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 8,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            }
        ],
        offers: [
            {
                id: 1,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 2,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 3,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 4,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 5,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 6,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 7,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 8,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            }
        ],
        reviewsData: [
            {
                id: 1,
                name: "Ahmed",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 2,
                name: "Mohamed",
                starsCount: 1,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 3,
                name: "Ali",
                starsCount: 2,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 4,
                name: "Khaled",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 5,
                name: "Ahmed",
                starsCount: 1,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 6,
                name: "Mohamed",
                starsCount: 3,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 7,
                name: "Ali",
                starsCount: 2,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 8,
                name: "Khaled",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
        ]
    },
    {
        id: 4,
        storeName: "Pizza Hut",
        storeImage: store_1,
        videoLink: bg,
        rate: 4.5,
        reviews: 100,
        storeLocation: "Gate 8, Ahmed Oraby st, behind kamal market, Giza, Egypt.",
        status: "Open",
        open: "9 AM - 10 PM",
        description: "Pizza Hut is an American restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. It provides Italian-American cuisine, including pizza, pasta, side dishes and desserts.",
        images: [image_1,image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9, image_10, image_11, image_12],
        products: [
            {
                id: 1,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 2,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 3,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 4,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 5,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 6,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 7,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 8,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            }
        ],
        offers: [
            {
                id: 1,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 2,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 3,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 4,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 5,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 6,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 7,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 8,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            }
        ],
        reviewsData: [
            {
                id: 1,
                name: "Ahmed",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 2,
                name: "Mohamed",
                starsCount: 1,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 3,
                name: "Ali",
                starsCount: 2,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 4,
                name: "Khaled",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 5,
                name: "Ahmed",
                starsCount: 1,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 6,
                name: "Mohamed",
                starsCount: 3,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 7,
                name: "Ali",
                starsCount: 2,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 8,
                name: "Khaled",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
        ]
    },
    {
        id: 5,
        storeName: "Pizza Hut",
        storeImage: store_1,
        videoLink: bg,
        rate: 4.5,
        reviews: 100,
        storeLocation: "Gate 8, Ahmed Oraby st, behind kamal market, Giza, Egypt.",
        status: "Open",
        open: "9 AM - 10 PM",
        description: "Pizza Hut is an American restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. It provides Italian-American cuisine, including pizza, pasta, side dishes and desserts.",
        images: [image_1,image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9, image_10, image_11, image_12],
        products: [
            {
                id: 1,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 2,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 3,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 4,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 5,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 6,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 7,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 8,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            }
        ],
        offers: [
            {
                id: 1,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 2,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 3,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 4,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 5,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 6,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 7,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 8,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            }
        ],
        reviewsData: [
            {
                id: 1,
                name: "Ahmed",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 2,
                name: "Mohamed",
                starsCount: 1,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 3,
                name: "Ali",
                starsCount: 2,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 4,
                name: "Khaled",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 5,
                name: "Ahmed",
                starsCount: 1,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 6,
                name: "Mohamed",
                starsCount: 3,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 7,
                name: "Ali",
                starsCount: 2,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 8,
                name: "Khaled",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
        ]
    },
    {
        id: 6,
        storeName: "Pizza Hut",
        storeImage: store_1,
        videoLink: bg,
        rate: 4.5,
        reviews: 100,
        storeLocation: "Gate 8, Ahmed Oraby st, behind kamal market, Giza, Egypt.",
        status: "Open",
        open: "9 AM - 10 PM",
        description: "Pizza Hut is an American restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. It provides Italian-American cuisine, including pizza, pasta, side dishes and desserts.",
        images: [image_1,image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9, image_10, image_11, image_12],
        products: [
            {
                id: 1,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 2,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 3,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 4,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 5,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 6,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 7,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 8,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            }
        ],
        offers: [
            {
                id: 1,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 2,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 3,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 4,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 5,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 6,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 7,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 8,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            }
        ],
        reviewsData: [
            {
                id: 1,
                name: "Ahmed",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 2,
                name: "Mohamed",
                starsCount: 1,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 3,
                name: "Ali",
                starsCount: 2,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 4,
                name: "Khaled",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 5,
                name: "Ahmed",
                starsCount: 1,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 6,
                name: "Mohamed",
                starsCount: 3,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 7,
                name: "Ali",
                starsCount: 2,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 8,
                name: "Khaled",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
        ]
    },
    {
        id: 7,
        storeName: "Pizza Hut",
        storeImage: store_1,
        videoLink: bg,
        rate: 4.5,
        reviews: 100,
        storeLocation: "Gate 8, Ahmed Oraby st, behind kamal market, Giza, Egypt.",
        status: "Open",
        open: "9 AM - 10 PM",
        description: "Pizza Hut is an American restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. It provides Italian-American cuisine, including pizza, pasta, side dishes and desserts.",
        images: [image_1,image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9, image_10, image_11, image_12],
        products: [
            {
                id: 1,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 2,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 3,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 4,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 5,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 6,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 7,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 8,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            }
        ],
        offers: [
            {
                id: 1,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 2,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 3,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 4,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 5,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 6,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 7,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 8,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            }
        ],
        reviewsData: [
            {
                id: 1,
                name: "Ahmed",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 2,
                name: "Mohamed",
                starsCount: 1,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 3,
                name: "Ali",
                starsCount: 2,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 4,
                name: "Khaled",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 5,
                name: "Ahmed",
                starsCount: 1,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 6,
                name: "Mohamed",
                starsCount: 3,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 7,
                name: "Ali",
                starsCount: 2,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 8,
                name: "Khaled",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
        ]
    },
    {
        id: 8,
        storeName: "Pizza Hut",
        storeImage: store_1,
        videoLink: bg,
        rate: 4.5,
        reviews: 100,
        storeLocation: "Gate 8, Ahmed Oraby st, behind kamal market, Giza, Egypt.",
        status: "Open",
        open: "9 AM - 10 PM",
        description: "Pizza Hut is an American restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. It provides Italian-American cuisine, including pizza, pasta, side dishes and desserts.",
        images: [image_1,image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9, image_10, image_11, image_12],
        products: [
            {
                id: 1,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 2,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 3,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 4,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 5,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 6,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 7,
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 8,
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            }
        ],
        offers: [
            {
                id: 1,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 2,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 3,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 4,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 5,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 6,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 7,
                discount: "50%",
                image: product_1,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            },
            {
                id: 8,
                discount: "50%",
                image: product_2,
                marketName: "Market Name",
                title: "Product Title",
                price: "100",
                oldPrice: "200",
                link: "#",
                rating: "4.5",
                ratingCount: "100"
            }
        ],
        reviewsData: [
            {
                id: 1,
                name: "Ahmed",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 2,
                name: "Mohamed",
                starsCount: 1,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 3,
                name: "Ali",
                starsCount: 2,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 4,
                name: "Khaled",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 5,
                name: "Ahmed",
                starsCount: 1,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 6,
                name: "Mohamed",
                starsCount: 3,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 7,
                name: "Ali",
                starsCount: 2,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 8,
                name: "Khaled",
                starsCount: 4,
                date: "12 Dec, 2024",
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
        ]
    },
]

const StorePage = ({storeData}) => {
    return (
        <section className="container">
            <StoreModule storeData={storeData[0]}/>
        </section>
    )
}

export default StorePage

export async function getServerSideProps({params}) {
    const {id} = params
    const storeData = storesData.filter(store => store.id === +id)
    return {
        props: {
            storeData,
        }
    }
}