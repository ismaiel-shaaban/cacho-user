export const loginUser = async (username, password) => {
    const response = await fetch('https://caco-dev.mimusoft.com/api/customer/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }
    return response.json();
}