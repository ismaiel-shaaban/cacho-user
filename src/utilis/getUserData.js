import useSWR from "swr";

export async function fetchUserData(token) {
    try {
        if (!token) {
            // If there is no token, return null
            return null;
        }
        const res = await fetch('https://caco-dev.mimusoft.com/api/customer/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
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

// const useUserData = (token) => {
//     const {data , error} = useSWR(token ? 'https://caco-dev.mimusoft.com/api/customer/profile' : null, fetchUserData(token));
//     return {
//         data,
//         error
//     };
// };
//
// export default useUserData;