import { getCookie } from 'cookies-next';
export const fetcher = (url) => fetch(url ,{
    headers : {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${getCookie('token')}`,
        "X-APP-LOCALE": localStorage.getItem("lang")
    }
}).then((res) => res.json())
