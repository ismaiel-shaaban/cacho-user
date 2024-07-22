import { getCookie } from 'cookies-next';
export const fetcher = (url) => fetch(url, {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${getCookie('token')}`,
        "X-APP-LOCALE": localStorage.getItem("lang") || "en"
    }
}).then((res) => res.json())
