import useSWR from "swr";
import { fetcher } from "@/utilis/fetcherFUN";

export async function fetchUserData(token) {
    try {
        if (!token) {
            // If there is no token, return null
            return null;
        }
        const res = await fetch('https://management.cachooapp.com/api/customer/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json",
                'Authorization': `Bearer ${token}`
            },
        });
        if (!res.ok) { // Check for successful response (status code 200)
            throw new Error(`Error fetching user data: Server responded with status ${res.status}`);
        }
        return await res.json();
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // Rethrow the error to handle it in the component
    }
}

export const useUserData = (token) => {
    const { data, error, isLoading } = useSWR(token ? 'https://management.cachooapp.com/api/customer/profile' : null, fetcher);
    return {
        data,
        error,
        isLoading
    };
};