export async function fetchUserData(token) {
    const response = await fetch('https://caco-dev.mimusoft.com/api/customer/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });

    if (!response.ok) {
        throw new Error('User data fetch failed');
    }

    return response.json();
}
