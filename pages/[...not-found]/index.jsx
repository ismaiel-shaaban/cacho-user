import Link from 'next/link'
import Head from "next/head";
import {LuExternalLink} from "react-icons/lu";

export default function NotFound() {
    return (
        <>
            <Head>
                <title>
                    404 Not Found
                </title>
            </Head>
            <div className="h-dvh flex flex-col items-center justify-center">
                <h1 className="text-[100px] font-black text-[--primary-color] text-center">404</h1>
                <p className=" text-[40px] sm:text-[60px] font-bold">
                    This Page Not Found
                </p>
                <Link className="underline text-[40px] flex items-center gap-2" href={"/"}>Go To Home <span><LuExternalLink size={28} /></span></Link>
            </div>
        </>
    )
}

