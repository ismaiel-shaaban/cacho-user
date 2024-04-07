import { NextResponse } from 'next/server'
import { getCookie } from 'cookies-next';
import { fetchUserData } from "@/utilis/getUserData";

export async function middleware(req) {
    try {
        const res = NextResponse.next();
        const token = getCookie('token', {res, req});
        const userData = await fetchUserData(token);
        if (req.nextUrl.pathname.startsWith('/chat') || req.nextUrl.pathname.startsWith('/saved')) {
            const url = req.nextUrl.clone()
            url.pathname = '/login'
            if (userData?.uuid === null || token === null || token === undefined || token === '') {
                return NextResponse.rewrite(url)
            }
        }

        // if (req.nextUrl.pathname.startsWith('/login') && userData?.uuid !== null) {
        //     return NextResponse.rewrite(new URL('/', req.url))
        // }
        return NextResponse.next();
    } catch (error) {
        console.error('Error:', error.message);
        return NextResponse.rewrite(new URL('/', req.url))
    }
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)'
}

